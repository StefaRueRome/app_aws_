import {
    File,
    FileImage,
    FileText,
    FileSpreadsheet,
    FileArchive,
    FileVideo,
  } from "lucide-react";
  import { getExtension } from "@/lib/utils";

  interface Props {
    fileName: string;
  }
  
  export default function FileIcon({ fileName }: Props) {
    const extension = getExtension(fileName);
  
    switch (extension) {
      case "png":
      case "jpg":
      case "jpeg":
        return <FileImage className="text-green-600" />;
  
      case "pdf":
        return <FileText className="text-red-600" />;
  
      case "xlsx":
        return <FileSpreadsheet className="text-green-700" />;
  
      case "zip":
        return <FileArchive className="text-yellow-600" />;
  
      case "mp4":
        return <FileVideo className="text-purple-600" />;
  
      default:
        return <File className="text-gray-600" />;
    }
  }