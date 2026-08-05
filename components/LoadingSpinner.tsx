interface Props {
    text?: string;
  }
  
  export default function LoadingSpinner({
    text = "Cargando...",
  }: Props) {
    return (
      <div className="flex items-center gap-3 py-2">
        <div className="w-5 h-5 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
  
        <span className="text-blue-600 font-medium">
          {text}
        </span>
      </div>
    );
  }