import { Dispatch, SetStateAction } from "react";

interface Props {
  label: string;
  colorDark: string;
  setColorDark: Dispatch<SetStateAction<string>>;
}

export function InputColor({ label, colorDark, setColorDark }: Props) {
  return (
    <>
      <label className="block mb-2 text-gray-700">{label}</label>

      <input
        type="color"
        value={colorDark}
        onChange={(e) => setColorDark(e.target.value)}
        className="w-full h-8 rounded-md outline-green-600 border-none"
      />
    </>
  );
}
