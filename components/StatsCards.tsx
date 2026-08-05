import {
    HardDrive,
    Files,
    Database,
} from "lucide-react";

import { FileItem } from "@/types/file";
import { formatFileSize } from "@/lib/utils";

interface Props {
    files: FileItem[];
}

export default function StatsCards({ files }: Props) {

    const totalSize = files.reduce(
        (acc, file) => acc + (file.size || 0),
        0
    );

    return (
        <div className="grid md:grid-cols-3 gap-5 mb-8">

            <div className="bg-white rounded-xl shadow p-5">

                <Files className="text-blue-600 mb-3" />

                <p className="text-gray-500">
                    Archivos
                </p>

                <h2 className="text-3xl font-bold text-gray-600">
                    {files.length}
                </h2>

            </div>

            <div className="bg-white rounded-xl shadow p-5">

                <HardDrive className="text-green-600 mb-3" />

                <p className="text-gray-500">
                    Espacio usado
                </p>

                <h2 className="text-3xl font-bold text-gray-600">
                    {formatFileSize(totalSize)}
                </h2>

            </div>

            <div className="bg-white rounded-xl shadow p-5">

                <Database className="text-orange-600 mb-3" />

                <p className="text-gray-500">
                    Almacenamiento
                </p>

                <h2 className="text-3xl font-bold text-gray-600">
                    Amazon S3
                </h2>

            </div>

        </div>
    );
}