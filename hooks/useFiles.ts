"use client";

import { useEffect, useState } from "react";
import { isImage } from "@/lib/utils";
import { FileItem } from "@/types/file";
import * as fileService from "@/services/fileService";
import { toast } from "sonner";

export function useFiles() {
    const [file, setFile] = useState<File | null>(null);

    const [files, setFiles] = useState<FileItem[]>([]);

    const [loading, setLoading] = useState(false);

    const [search, setSearch] = useState("");

    const [previewOpen, setPreviewOpen] = useState(false);

    const [previewUrl, setPreviewUrl] = useState("");

    const [previewFileName, setPreviewFileName] = useState("");

    const [dialogOpen, setDialogOpen] = useState(false);

    const [selectedFile, setSelectedFile] = useState("");

    const filteredFiles = files.filter((file) =>
        file.name.toLowerCase().includes(search.toLowerCase())
    );

    function askDelete(name: string) {

        setSelectedFile(name);

        setDialogOpen(true);

    }

    async function confirmDelete() {
        try {

            const data = await fileService.deleteFile(selectedFile);

            toast.success(data.message);

            setDialogOpen(false);

            setSelectedFile("");

            await loadFiles();

        } catch (error) {

            console.error(error);

            toast.error("No fue posible eliminar el archivo.");

        }
    }

    async function loadFiles() {
        const data = await fileService.getFiles();

        setFiles(data);
    }

    useEffect(() => {
        loadFiles();
    }, []);

    async function uploadFile() {
        if (!file) {
            toast.warning("Debes seleccionar un archivo");
            return;
        }

        setLoading(true);
        try {
            const data = await fileService.uploadFile(file);

            //alert(data.message);
            toast.success(data.message);

            setFile(null);

            await loadFiles();
        } catch (error) {
            console.error(error);
            toast.error("No fue posible subir el archivo.");
        } finally {
            setLoading(false);
        }

    }


    async function downloadFile(name: string) {
        try {
            const data = await fileService.downloadFile(name);

            const link = document.createElement("a");

            link.href = data.url;

            link.download = name;

            document.body.appendChild(link);

            link.click();

            document.body.removeChild(link);

        } catch (error) {
            console.error(error);

            toast.error("No fue posible descargar");
        }
    }

    async function previewFile(name: string) {

        if (!isImage(name)) {
            toast.info("Vista previa disponible solo para imagenes.");
            return;
        }

        const data = await fileService.previewFile(name);

        setPreviewFileName(name);

        setPreviewUrl(data.url);

        setPreviewOpen(true);
    }

    return {

        file,
        setFile,

        files,
        filteredFiles,

        loading,

        search,
        setSearch,

        previewOpen,
        previewUrl,
        previewFileName,

        setPreviewOpen,

        dialogOpen,
        selectedFile,
        setDialogOpen,

        uploadFile,
        askDelete,
        confirmDelete,
        downloadFile,
        previewFile,
    };
}