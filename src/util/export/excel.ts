import { saveAs } from "file-saver";
import * as XLSX from "xlsx";
import { generateArray, Workbook, sheetFromDataArray, s2ab } from "./util";


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

export const exportExcel = (header: string[], data: any[], filename = "excel-list", multiHeader: string[][] = [], merges: any[] = [], autoWidth = true, bookType = "xlsx") => {
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
