import { NextRequest, NextResponse } from "next/server";
import { GetObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

import { getS3Client } from "@/lib/s3";

export async function GET(request: NextRequest) {
  try {
    const s3 = getS3Client();
    const { searchParams } = new URL(request.url);

    const key = searchParams.get("key");

    if (!key) {
      return NextResponse.json(
        { error: "Archivo requerido" },
        { status: 400 }
      );
    }

    const command = new GetObjectCommand({
      Bucket: process.env.BUCKET_NAME!,
      Key: key,
    });

    const url = await getSignedUrl(s3, command, {
      expiresIn: 60,
    });

    return NextResponse.json({ url });

  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Error generando la URL." },
      { status: 500 }
    );
  }
}