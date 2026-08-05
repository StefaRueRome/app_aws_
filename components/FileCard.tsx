import FileIcon from "./FileIcon";
import FileActions from "./FileActions";
import {
    Trash2,
    Download,
    Eye,
} from "lucide-react";
import {
    formatFileSize,
    formatDate,
} from "@/lib/utils";

interface Props {
    name: string;
    size?: number;
    lastModified?: string;
    onDelete: (name: string) => void;
    onDownload: (name: string) => void;
    onPreview: (name: string) => void;
}

export default function FileCard({
    name,
    size,
    lastModified,
    onDelete,
    onDownload,
    onPreview
}: Props) {
    const extension = name.split(".").pop()?.toLowerCase();

    return (
        <div className="bg-white rounded-xl shadow hover:shadow-lg transition p-5 flex justify-between items-center">

            <div className="flex items-center gap-4">

                <FileIcon fileName={name} />

                <div>

                    <p className="font-semibold text-gray-700">
                        {name}
                    </p>

                    <p className="text-sm text-gray-900">
                        {formatFileSize(size)}
                    </p>

                    <p className="text-xs text-gray-900">
                        {formatDate(lastModified)}
                    </p>

                </div>

            </div>

            <FileActions
                fileName={name}
                onDelete={onDelete}
                onDownload={onDownload}
                onPreview={onPreview}
            />

        </div>
    );
}