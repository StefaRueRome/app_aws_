# ☁️ AWS File Manager

Aplicación web desarrollada con **Next.js**, **TypeScript** y **Amazon S3** para gestionar archivos mediante una API REST.

Permite subir, listar, buscar, descargar, visualizar y eliminar archivos almacenados en un bucket de Amazon S3.

## 🚀 Demo

**Aplicación desplegada en AWS Amplify:**

> https://main.d3t5wu73qk0n87.amplifyapp.com

---

## 📸 Capturas

### Página principal

![Home](screenshots/home.png)

### Gestor de archivos

![Upload](screenshots/gestor.png)

### Cargue de archivos

![Preview](screenshots/cargue.png)

### Confirmaciones

![Upload](screenshots/confirmacion.png)

### Búsqueda de archivos

![Upload](screenshots/busqueda.png)

### Eliminación de archivos

![Upload](screenshots/eliminar.png)

### Vista previa de archivos

![Upload](screenshots/previa.png)
---

## ✨ Funcionalidades

- 📤 Subida de archivos a Amazon S3
- 📁 Listado de archivos
- 🔍 Búsqueda por nombre
- 👁️ Vista previa de imágenes
- ⬇️ Descarga de archivos
- 🗑️ Eliminación con confirmación
- 🔔 Notificaciones mediante Sonner
- 📱 Diseño responsive
- ⚡ API REST con Next.js

---

## 🛠️ Tecnologías utilizadas

### Frontend

- Next.js 15
- React 19
- TypeScript
- Tailwind CSS
- Lucide React
- Sonner

### Servicios AWS

- Amazon S3
- AWS IAM
- AWS Amplify Hosting
- Amazon Elastic Container Registry (ECR)

### DevOps

- Docker
- Docker Multi-stage Build
- Next.js Standalone Output

---

## 📂 Estructura del proyecto

```text
app/
│
├── api/
│   └── files/
│       ├── route.ts
│       ├── download/
│       └── preview/
│
├── upload/
│   └── page.tsx
│
components/
│
├── ConfirmDialog.tsx
├── FileActions.tsx
├── FileCard.tsx
├── FileIcon.tsx
├── ImagePreviewModal.tsx
├── LoadingSpinner.tsx
├── Navbar.tsx
├── SearchBar.tsx
├── StatsCards.tsx
└── UploadForm.tsx
│
hooks/
│
└── useFiles.ts
│
services/
│
└── fileService.ts
│
lib/
│
├── s3.ts
└── utils.ts
│
types/
│
└── file.ts
```

---

## ⚙️ Variables de entorno

Crear un archivo llamado:

```text
.env.local
```

Con las siguientes variables:

```env
AWS_ACCESS_KEY_ID=xxxxxxxx
AWS_SECRET_ACCESS_KEY=xxxxxxxx
AWS_REGION=us-east-1
AWS_BUCKET_NAME=nombre-del-bucket
```

---

## ▶️ Instalación

Clonar el repositorio:

```bash
git clone https://github.com/StefaRueRome/app_aws_.git
```

Instalar dependencias:

```bash
npm install
```

Ejecutar en modo desarrollo:

```bash
npm run dev
```

Abrir en el navegador:

```
http://localhost:3000
```

---

## 🌐 Endpoints de la API

| Método | Endpoint | Descripción |
|---------|----------|-------------|
| GET | `/api/files` | Obtener archivos |
| POST | `/api/files` | Subir archivo |
| DELETE | `/api/files` | Eliminar archivo |
| GET | `/api/files/download` | Descargar archivo |
| GET | `/api/files/preview` | Vista previa |

---

# ☁️ Despliegue

## AWS Amplify

La aplicación se encuentra desplegada mediante **AWS Amplify Hosting**, el cual realiza el proceso de integración y despliegue continuo (CI/CD) a partir del repositorio de GitHub.

Proceso de despliegue:

1. Se realiza un push al repositorio.
2. AWS Amplify detecta los cambios.
3. Compila automáticamente la aplicación.
4. Publica la nueva versión.

---

## Amazon Elastic Container Registry (ECR)

La aplicación fue contenerizada utilizando Docker y posteriormente publicada en un repositorio privado de Amazon ECR.

Proceso realizado:

- Creación de la imagen Docker.
- Optimización mediante Multi-stage Build.
- Configuración de Next.js Standalone.
- Publicación de la imagen en Amazon ECR.

## 📚 Aprendizajes

Durante el desarrollo de este proyecto se implementaron conceptos relacionados con:

- Desarrollo de aplicaciones con Next.js y TypeScript.
- Gestión de archivos en Amazon S3.
- Generación de URLs prefirmadas para descarga y visualización de archivos.
- Administración de usuarios y permisos mediante AWS IAM.
- Despliegue automático con AWS Amplify.
- Contenerización de aplicaciones con Docker.
- Optimización de imágenes Docker mediante Multi-stage Build.
- Configuración de Next.js Standalone.
- Publicación de imágenes Docker en Amazon Elastic Container Registry (ECR).

## 🔮 Mejoras futuras

- Autenticación con Amazon Cognito
- Gestión de carpetas
- Compartir archivos mediante enlaces temporales
- Paginación
- Drag & Drop para subir archivos

---

## 👩‍💻 Autora

**Estefany Rueda**

Proyecto desarrollado como práctica para demostrar habilidades en desarrollo Full Stack con **Next.js**, **TypeScript** y **AWS**.