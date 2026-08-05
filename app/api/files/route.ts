import { DeleteObjectCommand } from "@aws-sdk/client-s3";

import { NextRequest, NextResponse } from "next/server";

import { PutObjectCommand } from "@aws-sdk/client-s3";

import { ListObjectsV2Command } from "@aws-sdk/client-s3";

import { getS3Client } from "@/lib/s3";

export async function POST(request: NextRequest) {
    try {
        const s3 = getS3Client();
        const data = await request.formData();

        const file = data.get("file") as File;

        if (!file) {
            return NextResponse.json(
                { error: "No se recibió ningún archivo" },
                { status: 400 }
            );
        }

        const buffer = Buffer.from(await file.arrayBuffer());

        const command = new PutObjectCommand({
            Bucket: process.env.BUCKET_NAME!,
            Key: file.name,
            Body: buffer,
            ContentType: file.type,
        });

        await s3.send(command);

        return NextResponse.json({
            success: true,
            message: "Archivo subido correctamente",
        });
    } catch (error) {
        console.error(error);

        return NextResponse.json(
            { error: String(error) },
            { status: 500 }
        );
    }
}


export async function GET() {
    try {
        const s3 = getS3Client();
        console.log({
            BUCKET_NAME: process.env.BUCKET_NAME,
            REGION: process.env.REGION,
            ACCESS_KEY_ID: process.env.ACCESS_KEY_ID ? "OK" : "NO",
            SECRET_ACCESS_KEY: process.env.SECRET_ACCESS_KEY ? "OK" : "NO",
          });

        const command = new ListObjectsV2Command({
            Bucket: process.env.BUCKET_NAME!,
        });

        const response = await s3.send(command);

        const files =
            response.Contents?.map((file) => ({
                name: file.Key,
                size: file.Size,
                lastModified: file.LastModified,
            })) || [];

        return NextResponse.json(files);
    } catch (error) {
        console.error(error);

        return NextResponse.json(
            { error: String(error) },
            { status: 500 }
        );
    }
}

export async function DELETE(request: Request) {
    try {
        const s3 = getS3Client();
        const { searchParams } = new URL(request.url);

        const key = searchParams.get("key");

        if (!key) {
            return NextResponse.json(
                { error: "Nombre del archivo requerido" },
                { status: 400 }
            );
        }

        const command = new DeleteObjectCommand({
            Bucket: process.env.BUCKET_NAME!,
            Key: key,
        });

        await s3.send(command);

        return NextResponse.json({
            success: true,
            message: "Archivo eliminado correctamente",
        });
    } catch (error) {
        console.error(error);

        return NextResponse.json(
            { error: "Error eliminando archivo" },
            { status: 500 }
        );
    }
}