import { Dispatch, SetStateAction } from "react";

interface Props {
  inputText: string;
  setInputText: Dispatch<SetStateAction<string>>;
}

export function Input({ inputText = "", setInputText }: Props) {
  return (
    <input
      type="text"
      placeholder="Digite o texto ou URL"
      className="text-gray-600 outline-green-600 w-full font-medium px-3 py-3 rounded-md mr-3 mb-4"
      value={inputText}
      onChange={(e) => setInputText(e.target.value)}
    />
  );
}
