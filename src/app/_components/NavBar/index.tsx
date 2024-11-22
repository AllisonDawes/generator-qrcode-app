import { ScanQrCodeIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function NavBar() {
  const pathname = usePathname();

  return (
    <nav className="flex items-start justify-between w-full h-16 bg-gray-300 px-16 py-6 ">
      <div className="flex text-center gap-x-4">
        <ScanQrCodeIcon className="text-gray-800" />
        <h1 className="font-bold text-gray-800">QR Code Generator</h1>
      </div>

      <div className="flex gap-x-16">
        <Link
          href="/"
          className={
            pathname === "/"
              ? "font-bold text-green-700 border-b-4 border-green-700"
              : "font-bold text-gray-700"
          }
        >
          Home
        </Link>

        <Link
          href="/subscription"
          className={
            pathname === "/subscription"
              ? "font-bold text-green-700"
              : "font-medium text-gray-800"
          }
        >
          Planos
        </Link>

        <Link
          href="/about"
          className={
            pathname === "/about"
              ? "font-bold text-green-700"
              : "font-medium text-gray-800"
          }
        >
          Sobre
        </Link>
      </div>
    </nav>
  );
}
