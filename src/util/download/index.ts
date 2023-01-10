export function downloadLink(url: string) {
    const a = document.createElement("a");
    a.setAttribute("href", url);
    a.setAttribute("target", "_blank");
    a.style.display = "none";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}

export default function download(data: Blob | ArrayBuffer, filename: string, options?: BlobPropertyBag) {
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
