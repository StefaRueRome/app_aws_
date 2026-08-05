import { Eye, Download, Trash2 } from "lucide-react";

interface Props {
    fileName: string;
    onDelete: (name: string) => void;
    onDownload: (name: string) => void;
    onPreview: (name: string) => void;
}

export default function FileActions({
    fileName,
    onDelete,
    onDownload,
    onPreview,
}: Props) {
    return (
        <div className="flex items-center gap-3">

            <button
                onClick={() => onPreview(fileName)}
                className="text-blue-600 hover:text-blue-800"
                title="Vista previa"
            >
                <Eye size={20} />
            </button>

            <button
                onClick={() => onDownload(fileName)}
                className="text-green-600 hover:text-green-800"
                title="Descargar"
            >
                <Download size={20} />
            </button>

            <button
                onClick={() => onDelete(fileName)}
                className="text-red-600 hover:text-red-800"
                title="Eliminar"
            >
                <Trash2 size={20} />
            </button>

        </div>
    );
}