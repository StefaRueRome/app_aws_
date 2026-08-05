interface Props {
    value: string;
    onChange: (value: string) => void;
  }
  
  export default function SearchBar({
    value,
    onChange,
  }: Props) {
    return (
      <input
        type="text"
        placeholder="Buscar archivo..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full border rounded-lg p-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-400"
      />
    );
  }