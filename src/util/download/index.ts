export default function download(data: Blob | ArrayBuffer, filename: string, options?: BlobPropertyBag) {
    const blob = new Blob([data], options);
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.setAttribute("download", filename);
    a.setAttribute("url", url);
    a.style.display = "none";
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
    document.body.removeChild(a);
}
