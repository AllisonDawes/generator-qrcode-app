"use client";

import { useState } from "react";
import QRCode from "qrcode";

import { NavBar } from "./_components/NavBar";
import { Input } from "./_components/Input";
import { InputColor } from "./_components/InputColor";
import { Button } from "./_components/Button";
import { ButtonDownload } from "./_components/ButtonDownload";

export default function Home() {
  const [text, setText] = useState("");
  const [qrCode, setQrCode] = useState("");
  const [colorDark, setColorDark] = useState("#000000");
  const [colorLight, setColorLight] = useState("#ffffff");
  const [loading, setLoading] = useState(false);

  async function generateQrCode() {
    setLoading(true);

    try {
      const qrCodeImage = await QRCode.toDataURL(text, {
        color: { dark: colorDark, light: colorLight },
      });

      setQrCode(qrCodeImage);

      setLoading(false);
    } catch (error) {
      setLoading(false);

      console.log(error);
    }
  }

  return (
    <>
      <NavBar />

      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-300 p-4">
        <h1 className="text-3xl font-bold mb-8 text-gray-700">
          Gerador de QR Code
        </h1>

        <div className="flex flex-col justify-center w-full max-w-md mb-16">
          <Input inputText={text} setInputText={setText} />

          <div className="flex justify-between mb-8 gap-x-8">
            <div className="w-full">
              <InputColor
                label="Cor do QR Code"
                colorDark={colorDark}
                setColorDark={setColorDark}
              />
            </div>

            <div className="w-full">
              <InputColor
                label="Cor de Fundo"
                colorDark={colorLight}
                setColorDark={setColorLight}
              />
            </div>
          </div>

          <Button
            text={text}
            loading={loading}
            generateQrCode={generateQrCode}
          />
        </div>

        {qrCode && (
          <div className="flex flex-col items-center">
            <img src={qrCode} alt="QR Code" className="border p-2 mb-8" />

            <ButtonDownload qrCode={qrCode} />
          </div>
        )}
      </div>
    </>
  );
}
