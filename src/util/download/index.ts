import file, { type FileSaverOptions } from "file-saver";

export function download(data: Blob, filename: string, options?: BlobPropertyBag) {
    const blob = new Blob([data], options);
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.setAttribute("download", filename);
    a.setAttribute("href", url);
    a.style.display = "none";
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
    document.body.removeChild(a);
}

export default function(data: Blob | string, filename?: string, options?: FileSaverOptions) {
    file.saveAs(data, filename, options);
}

