import { saveAs } from "file-saver";
import * as XLSX from "xlsx";
import type { WorkBook, WorkSheet } from "xlsx";

interface ICell {
    v: Date | number | boolean | string;
    t: string;
    z: string;
}

export class Workbook implements WorkBook {
    SheetNames: string[] = [];
    Sheets: { [sheet: string]: WorkSheet } = {};
}

export const generateArray = (table: HTMLElement) => {
    const out = [];
    const rows = table.querySelectorAll("tr");
    const ranges = [];
    for(let R = 0; R < rows.length; ++R) {
        const outRow = [];
        const row = rows[R];
        const columns = row.querySelectorAll("td");
        for(let C = 0; C < columns.length; ++C) {
            const cell = columns[C];
            const colspanStr = cell.getAttribute("colspan");
            const rowspanStr = cell.getAttribute("rowspan");
            let colspan;
            let rowspan;
            if(colspanStr) {
                colspan = parseInt(colspanStr);
            }
            if(rowspanStr) {
                rowspan = parseInt(rowspanStr);
            }
            const cellValue = cell.innerText;
            // Skip ranges
            ranges.forEach(function(range) {
                if(R >= range.s.r && R <= range.e.r && outRow.length >= range.s.c && outRow.length <= range.e.c) {
                    for(let i = 0; i <= range.e.c - range.s.c; ++i) outRow.push(null);
                }
            });
            // Handle Row Span
            if(rowspan || colspan) {
                rowspan = rowspan || 1;
                colspan = colspan || 1;
                ranges.push({
                    s: {
                        r: R,
                        c: outRow.length,
                    },
                    e: {
                        r: R + rowspan - 1,
                        c: outRow.length + colspan - 1,
                    },
                });
            }
            // Handle Value
            outRow.push(cellValue !== "" ? cellValue : null);
            // Handle Colspan
            if(colspan) {
                for(let k = 0; k < colspan - 1; ++k) {
                    outRow.push(null);
                }
            }
        }
        out.push(outRow);
    }
    return [out, ranges];
};

export const datenum = (date: Date) => {
    return (+date - +new Date(Date.UTC(1899, 11, 30))) / (24 * 60 * 60 * 1000);
};

export const sheetFromDataArray = (data: any) => {
    const ws: { [key: string]: any } = {};
    const range = {
        s: {
            c: 10000000,
            r: 10000000,
        },
        e: {
            c: 0,
            r: 0,
        },
    };
    for(let R = 0; R !== data.length; ++R) {
        for(let C = 0; C !== data[R].length; ++C) {
            if(range.s.r > R) range.s.r = R;
            if(range.s.c > C) range.s.c = C;
            if(range.e.r < R) range.e.r = R;
            if(range.e.c < C) range.e.c = C;
            const cell: ICell = {
                v: data[R][C],
                t: "",
                z: "",
            };
            if(cell.v == null) continue;
            const cellRef = XLSX.utils.encode_cell({
                c: C,
                r: R,
            });
            if(typeof cell.v === "number") cell.t = "n";
            else if(typeof cell.v === "boolean") cell.t = "b";
            else if(cell.v instanceof Date) {
                cell.t = "n";
                cell.z = XLSX.SSF.get_table()[14];
                cell.v = datenum(cell.v);
            } else cell.t = "s";
            ws[cellRef] = cell;
        }
    }
    if(range.s.c < 10000000) {
        ws["!ref"] = XLSX.utils.encode_range(range);
    }
    return ws;
};

export const s2ab = (s: string) => {
    const buf = new ArrayBuffer(s.length);
    const view = new Uint8Array(buf);
    for(let i = 0; i !== s.length; ++i) {
        view[i] = s.charCodeAt(i) & 0xFF;
    }
    return buf;
};

function getTreeLastNodeSum(list: Record<string, any>[], childrenField = "children") {
    if(!Array.isArray(list)) return 0;
    const result: number[] = [];
    function start(data: Record<string, any>[]) {
        const [hasChilds, noChilds] = data.reduce<Record<string, any>[][]>((pre, cur) => {
            if(cur[childrenField] && cur[childrenField].length > 0) {
                pre[0].push(cur);
            } else {
                pre[1].push(cur);
            }
            return pre;
        }, [[], []]);
        result.push(noChilds.length);
        hasChilds.forEach(item => {
            start(item.children);
        });
    }
    start(list);
    return result.reduce((pre, cur) => pre + cur, 0);
}

function getDeepInsertId(list: Record<string, any>[], childrenField = "children") {
    let deep = 1;
    const newList = JSON.parse(JSON.stringify(list));
    const flatResult: Record<string, any>[] = [];
    function start(data: Record<string, any>[], level = 1, parentlist: number[] = [], parentId: string | undefined = void 0) {
        if(level > deep) deep = level;
        return data.map((d, i) => {
            const id = [...parentlist, i].join("-");
            const rootId = parentlist.length > 0 ? parentlist[0] : void 0;
            const item = {
                ...d,
                level,
                excel_id: id,
                excel_parentId: parentId,
                excel_rootId: rootId !== void 0 ? String(rootId) : rootId,
            };
            flatResult.push(item);
            if(Array.isArray(d[childrenField]) && d[childrenField].length > 0) {
                d[childrenField] = start(d[childrenField], level + 1, [...parentlist, i], id);
            }
            return item;
        });
    }
    const result = start(newList);
    return { deep, result, flatResult };
}

function formatHeader(headers: any[], options?: { key: string; children: string }) {
    const EXCEL_MERGE = "";
    if(!Array.isArray(headers)) return [];
    const { key, children } = Object.assign({ key: "label", children: "children" }, options);
    const childNodes = headers.map(item => getTreeLastNodeSum(item[children], children));
    const { deep, flatResult, result: deepResult } = getDeepInsertId(headers);
    const result: string[][] = Array.from({ length: deep }).map(() => []);
    result.forEach((r, ri) => {
        const levelList = flatResult.filter(item => item.level === ri + 1);
        const rootTypeLits = deepResult.map(dr => {
            if(ri === 0) return [dr];
            const value = levelList.filter(item => item.excel_rootId === dr.excel_id);
            return value.length > 0 ? value : [{ [key]: EXCEL_MERGE }];
        });
        const labels = rootTypeLits.reduce<string[]>((pre, cur, i) => {
            const curLabels = cur.map(c => {
                const length = c[children] && c[children].length > 0 ? c[children].length - 1 : 0;
                return [c[key], ...Array.from({ length }).map(() => EXCEL_MERGE)];
            }).flat(Infinity);
            const poor = childNodes[i] - curLabels.length;
            const poorList = Array.from({ length: poor > 0 ? poor : 0 }).map(() => EXCEL_MERGE);
            pre.push(...curLabels, ...poorList);
            return pre;
        }, []);
        r.push(...labels);
    });
    return result;
}

function formatJson(filterVal: string[], jsonData: any[]) {
    return jsonData.map((v: any) => filterVal.map((j: any) => v[j]));
}

export const exportTable2Excel = (id: string) => {
    const theTable = document.getElementById(id);
    if(theTable) {
        const oo = generateArray(theTable);
        const ranges = oo[1];

        /* original data */
        const data = oo[0];
        const wsName = "SheetJS";

        const wb = new Workbook();
        const ws = sheetFromDataArray(data);

        /* add ranges to worksheet */
        // ws['!cols'] = ['apple', 'banan']
        ws["!merges"] = ranges;

        /* add worksheet to workbook */
        wb.SheetNames.push(wsName);
        wb.Sheets[wsName] = ws;

        const wbout = XLSX.write(wb, {
            bookType: "xlsx",
            bookSST: false,
            type: "binary",
        });

        saveAs(new Blob([s2ab(wbout)], {
            type: "application/octet-stream",
        }), "test.xlsx");
    }
};

export const exportJson2Excel = (header: string[], data: any, filename = "excel-list", multiHeader: string[][] = [], merges: any[] = [], autoWidth = true, bookType = "xlsx") => {
    data = [...data];
    data.unshift(header);
    for(let i = multiHeader.length - 1; i > -1; i--) {
        data.unshift(multiHeader[i]);
    }

    const wsName = "SheetJS";
    const wb = new Workbook();
    const ws = sheetFromDataArray(data);

    if(merges.length > 0) {
        if(!ws["!merges"]) {
            ws["!merges"] = [];
        }
        merges.forEach(item => {
            ws["!merges"].push(XLSX.utils.decode_range(item));
        });
    }

    if(autoWidth) {
        // 设置worksheet每列的最大宽度
        const colWidth = data.map((row: any) => row.map((val: any) => {
        // 先判断是否为 null/undefined
            if(val == null) {
                return {
                    wch: 10,
                };
                // 再判断是否为中文
            } else if(val.toString().charCodeAt(0) > 255) {
                return {
                    wch: val.toString().length * 2,
                };
            } else {
                return {
                    wch: val.toString().length,
                };
            }
        }));
        // 以第一行为初始值
        const result = colWidth[0];
        for(let i = 1; i < colWidth.length; i++) {
            for(let j = 0; j < colWidth[i].length; j++) {
                if(result[j].wch < colWidth[i][j].wch) {
                    result[j].wch = colWidth[i][j].wch;
                }
            }
        }
        ws["!cols"] = result;
    }

    // Add worksheet to workbook
    wb.SheetNames.push(wsName);
    wb.Sheets[wsName] = ws;

    const wbout = XLSX.write(wb, {
        bookType: bookType as any,
        bookSST: false,
        type: "binary",
    });

    saveAs(new Blob([s2ab(wbout)], {
        type: "application/octet-stream",
    }), `${filename}.${bookType}`);
};


interface ExportExcelOptions {
    filename?: string;
    autoWidth?: boolean;
    bookType?: string;
    key?: string;
    children?: string;
}

export function exportExcel(header: Record<string, any>[], data: any[], filters: string[], merges: any[] = [], options?: ExportExcelOptions) {
    const { filename, autoWidth, bookType, key, children  } = Object.assign({
        filename: String(new Date().getTime()),
        autoWidth: true,
        bookType: "xlsx",
        key: "label",
        children: "children",
    }, options || {});
    const headers = formatHeader(header, { key, children });
    data = [...formatJson(filters, data)];
    data.unshift(...headers);

    const wsName = "SheetJS";
    const wb = new Workbook();
    const ws = sheetFromDataArray(data);

    if(merges.length > 0) {
        if(!ws["!merges"]) {
            ws["!merges"] = [];
        }
        merges.forEach(item => {
            ws["!merges"].push(XLSX.utils.decode_range(item));
        });
    }

    if(autoWidth) {
        // 设置worksheet每列的最大宽度
        const colWidth = data.map((row: any) => row.map((val: any) => {
        // 先判断是否为 null/undefined
            if(val == null) {
                return {
                    wch: 10,
                };
                // 再判断是否为中文
            } else if(val.toString().charCodeAt(0) > 255) {
                return {
                    wch: val.toString().length * 2,
                };
            } else {
                return {
                    wch: val.toString().length,
                };
            }
        }));
        // 以第一行为初始值
        const result = colWidth[0];
        for(let i = 1; i < colWidth.length; i++) {
            for(let j = 0; j < colWidth[i].length; j++) {
                if(result[j].wch < colWidth[i][j].wch) {
                    result[j].wch = colWidth[i][j].wch;
                }
            }
        }
        ws["!cols"] = result;
    }

    // Add worksheet to workbook
    wb.SheetNames.push(wsName);
    wb.Sheets[wsName] = ws;

    const wbout = XLSX.write(wb, {
        bookType: bookType as any,
        bookSST: false,
        type: "binary",
    });

    saveAs(new Blob([s2ab(wbout)], {
        type: "application/octet-stream",
    }), `${filename}.${bookType}`);
}
