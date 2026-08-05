import Link from "next/link";
import {
  Cloud,
  ArrowRight,
  Database,
  FolderOpen,
  Server,
} from "lucide-react";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-white">

      <section className="max-w-6xl mx-auto px-8 py-20">

        <div className="text-center">

          <div className="flex justify-center mb-6">
            <Cloud className="w-20 h-20 text-blue-600" />
          </div>

          <h1 className="text-5xl font-bold text-gray-800">
            AWS File Manager
          </h1>

          <p className="text-xl text-gray-600 mt-6 max-w-2xl mx-auto">
            Aplicación desarrollada con Next.js y TypeScript
            para gestionar archivos almacenados en Amazon S3
            mediante una API REST.
          </p>

          <Link
            href="/upload"
            className="inline-flex items-center gap-2 mt-10 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl text-lg transition"
          >
            Ir al Gestor

            <ArrowRight size={22} />
          </Link>

        </div>

      </section>

      <section className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-8 pb-20">

        <div className="bg-white rounded-xl shadow-lg p-8">

          <FolderOpen className="text-blue-600 w-12 h-12 mb-5" />

          <h2 className="font-bold text-xl">
            Gestión de archivos
          </h2>

          <p className="text-gray-600 mt-3">
            Subir, eliminar, buscar,
            descargar y visualizar archivos
            almacenados en Amazon S3.
          </p>

        </div>

        <div className="bg-white rounded-xl shadow-lg p-8">

          <Database className="text-green-600 w-12 h-12 mb-5" />

          <h2 className="font-bold text-xl">
            Amazon S3
          </h2>

          <p className="text-gray-600 mt-3">
            Integración utilizando AWS SDK v3,
            URLs firmadas y buenas prácticas
            de seguridad.
          </p>

        </div>

        <div className="bg-white rounded-xl shadow-lg p-8">

          <Server className="text-purple-600 w-12 h-12 mb-5" />

          <h2 className="font-bold text-xl">
            API REST
          </h2>

          <p className="text-gray-600 mt-3">
            Endpoints desarrollados en Next.js
            para subir, listar, eliminar,
            descargar y visualizar archivos.
          </p>

        </div>

      </section>

    </main>
  );
}