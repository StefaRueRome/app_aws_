import { FileItem } from "@/types/file";

export async function getFiles(): Promise<FileItem[]> {
  const response = await fetch("/api/files");

  if (!response.ok) {
    throw new Error("No fue posible obtener los archivos.");
  }

  return response.json();
}

export async function uploadFile(file: File) {
  const formData = new FormData();

  formData.append("file", file);

  const response = await fetch("/api/files", {
    method: "POST",
    body: formData,
  });

  return response.json();
}

export async function deleteFile(name: string) {
  const response = await fetch(
    `/api/files?key=${encodeURIComponent(name)}`,
    {
      method: "DELETE",
    }
  );

  return response.json();
}

export async function downloadFile(name: string) {
  const response = await fetch(
    `/api/files/download?key=${encodeURIComponent(name)}`
  );

  return response.json();
}

export async function previewFile(name: string) {
  const response = await fetch(
    `/api/files/preview?key=${encodeURIComponent(name)}`
  );

  return response.json();
}