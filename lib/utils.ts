export function formatFileSize(size?: number): string {
    if (!size) return "-";
  
    if (size < 1024) {
      return `${size} B`;
    }
  
    if (size < 1024 * 1024) {
      return `${(size / 1024).toFixed(2)} KB`;
    }
  
    return `${(size / 1024 / 1024).toFixed(2)} MB`;
  }
  
  export function formatDate(date?: string): string {
    if (!date) return "-";
  
    return new Date(date).toLocaleString("es-CO");
  }
  
  export function getExtension(fileName: string): string {
    return fileName.split(".").pop()?.toLowerCase() || "";
  }
  
  export function isImage(fileName: string): boolean {
    const extension = getExtension(fileName);
  
    return [
      "jpg",
      "jpeg",
      "png",
      "gif",
      "webp",
    ].includes(extension);
  }