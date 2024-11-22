interface Props {
  text: string;
  loading: boolean;
  generateQrCode: () => void;
}

export function Button({ text, loading, generateQrCode }: Props) {
  return (
    <button
      onClick={text.length === 0 || loading ? () => {} : generateQrCode}
      className={`${
        text.length === 0 || loading
          ? "bg-green-700 text-gray-100 font-bold outline-green-600 px-4 py-3 rounded-md disabled:opacity-50 cursor-not-allowed"
          : "bg-green-700 text-gray-100 font-bold outline-green-600 px-4 py-3 rounded-md hover:bg-green-800 text-center"
      }`}
      disabled={text.length === 0 || loading ? true : false}
    >
      Gerar QR Code
    </button>
  );
}
