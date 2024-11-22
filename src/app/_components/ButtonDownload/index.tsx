import { FileDownIcon } from "lucide-react";

interface Props {
  qrCode: string;
}

export function ButtonDownload({ qrCode }: Props) {
  return (
    <a
      href={qrCode}
      download="qrcode.png"
      className="flex gap-3 bg-green-700 hover:bg-green-800 text-gray-100 font-semibold rounded-md p-3 no-underline text-center"
    >
      Baixar QR Code
      <FileDownIcon />
    </a>
  );
}
