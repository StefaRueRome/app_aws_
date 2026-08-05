"use client";
import { useFiles } from "@/hooks/useFiles";
import FileCard from "@/components/FileCard";
import { FileItem } from "@/types/file";
import Navbar from "@/components/Navbar";
import SearchBar from "@/components/SearchBar";
import UploadForm from "@/components/UploadForm";
import StatsCards from "@/components/StatsCards";
import ImagePreviewModal from "@/components/ImagePreviewModal";
import { FolderOpen } from "lucide-react";
import ConfirmDialog from "@/components/ConfirmDialog";

export default function UploadPage() {

    const {

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

    } = useFiles();



    return (
        <>
            <Navbar />

            <main className="max-w-5xl mx-auto mt-10 px-6">

                <StatsCards files={files} />

                <h1 className="text-4xl font-bold text-gray-900 mb-2">
                    AWS File Manager
                </h1>

                <p className="text-gray-600 mb-8">
                    Administra tus archivos almacenados en Amazon S3.
                </p>

                <SearchBar
                    value={search}
                    onChange={setSearch}
                />

                <div className="my-6">
                    <UploadForm
                        file={file}
                        loading={loading}
                        onFileChange={setFile}
                        onUpload={uploadFile}
                    />
                </div>

                <h2 className="text-xl font-semibold text-gray-700 mb-4">
                    Archivos
                </h2>

                <div className="space-y-4">

                    {filteredFiles.length === 0 ? (
                        search ? (
                            <div className="bg-white rounded-2xl shadow-md border border-gray-200 p-12 text-center">

                                <h2 className="text-xl font-semibold text-gray-700">
                                    No se encontraron resultados
                                </h2>

                                <p className="text-gray-700 mt-2">
                                    No existe ningún archivo que coincida con "<strong>{search}</strong>".
                                </p>

                            </div>
                        ) : (
                            <div className="bg-white rounded-2xl shadow-md border border-gray-200 p-12 text-center">

                                <FolderOpen
                                    size={70}
                                    className="mx-auto text-gray-400 mb-5"
                                />

                                <h2 className="text-2xl font-bold text-gray-700">
                                    No hay archivos
                                </h2>

                                <p className="text-gray-700 mt-3">
                                    Tu bucket está vacío.
                                </p>

                                <p className="text-gray-700 text-sm mt-1">
                                    Selecciona un archivo y súbelo para comenzar.
                                </p>

                            </div>
                        )
                    ) : (
                        filteredFiles.map((file) => (
                            <FileCard
                                key={file.name}
                                name={file.name}
                                size={file.size}
                                lastModified={file.lastModified}
                                onDelete={askDelete}
                                onDownload={downloadFile}
                                onPreview={previewFile}
                            />
                        ))
                    )}

                </div>

                <ImagePreviewModal
                    open={previewOpen}
                    imageUrl={previewUrl}
                    fileName={previewFileName}
                    onClose={() => setPreviewOpen(false)}
                />

                <ConfirmDialog
                    open={dialogOpen}
                    title="Eliminar archivo"
                    message={`¿Deseas eliminar "${selectedFile}"?`}
                    onConfirm={confirmDelete}
                    onCancel={() => setDialogOpen(false)}
                />

            </main>
        </>


    );
}