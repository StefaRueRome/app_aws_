import LoadingSpinner from "./LoadingSpinner";
import { useRef } from "react";

interface UploadFormProps {
    file: File | null;
    loading: boolean;
    onFileChange: (file: File | null) => void;
    onUpload: () => void;
}

export default function UploadForm({
    file,
    loading,
    onFileChange,
    onUpload,
}: UploadFormProps) {
    const inputRef = useRef<HTMLInputElement>(null);
    return (
        <div className="bg-white rounded-xl shadow-md p-6 mb-8">

            <h2 className="text-xl font-semibold text-gray-700 mb-4">
                Subir archivo
            </h2>

            <input
                ref={inputRef}
                type="file"
                className="hidden"
                disabled={loading}
                onChange={(e) => {
                    if (e.target.files?.length) {
                        onFileChange(e.target.files[0]);
                    }
                }}
            />

            {file && (
                <div className="mt-4 bg-blue-50 border border-blue-200 rounded-lg p-3">

                    <p className="font-medium text-gray-700">
                        Archivo seleccionado
                    </p>

                    <p className="text-sm text-gray-600">
                        {file.name}
                    </p>

                    <p className="text-xs text-gray-500">
                        {(file.size / 1024).toFixed(2)} KB
                    </p>

                </div>
            )}

            <div className="flex gap-3 mt-4">

                <button
                    type="button"
                    onClick={() => inputRef.current?.click()}
                    disabled={loading}
                    className="bg-gray-100 hover:bg-gray-200 text-gray-600 border px-5 py-2 rounded-lg transition"
                >
                    {file ? "Cambiar archivo" : "Seleccionar archivo"}
                </button>

                <button
                    onClick={onUpload}
                    disabled={loading || !file}
                    className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white px-6 py-2 rounded-lg transition"
                >
                    {loading ? "Subiendo..." : "Subir archivo"}
                </button>

            </div>

            {loading && (
                <LoadingSpinner text="Subiendo archivo a Amazon S3..." />
            )}

        </div>
    );
}