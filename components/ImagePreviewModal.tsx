interface Props {
    open: boolean;
    imageUrl: string;
    fileName: string;
    onClose: () => void;
  }
  
  export default function ImagePreviewModal({
    open,
    imageUrl,
    fileName,
    onClose,
  }: Props) {
  
    if (!open) return null;
  
    return (
      <div
        className="fixed inset-0 bg-black/60 flex items-center justify-center z-50"
        onClick={onClose}
      >
        <div
          className="bg-white rounded-xl p-6 max-w-4xl max-h-[90vh]"
          onClick={(e) => e.stopPropagation()}
        >
          <h2 className="font-bold text-xl text-gray-700 mb-4">
            {fileName}
          </h2>
  
          <img
            src={imageUrl}
            alt={fileName}
            className="max-h-[70vh] rounded-lg"
          />
  
          <button
            onClick={onClose}
            className="mt-5 bg-blue-600 text-white px-5 py-2 rounded-lg"
          >
            Cerrar
          </button>
        </div>
      </div>
    );
  }