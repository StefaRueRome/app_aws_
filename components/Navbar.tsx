import { Cloud } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
    return (
        <header className="bg-blue-700 text-white shadow-lg">

            <div className="max-w-6xl mx-auto flex justify-between items-center px-8 py-5">

                <div className="flex items-center gap-3">

                    <Link
                        href="/"
                        className="flex items-center gap-3"
                    >

                        <Cloud size={32} />

                        <div>

                            <h1 className="text-2xl font-bold">
                                AWS File Manager
                            </h1>

                            <p className="text-blue-100 text-sm">
                                Next.js + TypeScript + AWS S3
                            </p>

                        </div>

                    </Link>

                </div>

                <div className="flex gap-3">

                    <Link
                        href="/"
                        className="bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded-lg transition"
                    >
                        Inicio
                    </Link>

                    <Link
                        href="/upload"
                        className="bg-white text-blue-700 hover:bg-gray-100 px-4 py-2 rounded-lg transition"
                    >
                        Gestor
                    </Link>

                </div>

            </div>

        </header>
    );
}