import { useRef } from "react";

interface prop {
  onCommand: (command: string) => void;
}

export default function Typebar({ onCommand }: prop) {
  const inputRef = useRef<HTMLInputElement>(null);

  function handleKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === "Enter" && inputRef.current?.value) {
      onCommand(inputRef.current.value);
      inputRef.current.value = "";
    }
  }

  return (
    <div className="flex items-center">
      <span className="pr-2">guest@schnzs.xyz:~{">"}</span>
      <input
        id="input-bar"
        ref={inputRef}
        className="w-full outline-0"
        autoFocus={true}
        onKeyDown={handleKeyDown}
      ></input>
    </div>
  );
}
