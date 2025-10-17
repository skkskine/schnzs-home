import { useRef } from "react";
import type { Command } from "../types/command";

interface prop {
  bufferCommand: string;
  onCommand: (command: Command) => void;
  onArrow: (arrow: "ArrowUp" | "ArrowDown") => void;
}

export default function Typebar({ bufferCommand, onCommand, onArrow }: prop) {
  const inputRef = useRef<HTMLInputElement>(null);

  if (inputRef.current) {
    inputRef.current!.value = bufferCommand;
  }

  function handleKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === "ArrowUp" || event.key === "ArrowDown") {
      onArrow(event.key);
    }

    if (inputRef.current?.value && event.key === "Enter") {
      onCommand(inputRef.current.value as Command);
      inputRef.current.value = "";
    }
  }

  return (
    <div className="flex items-center mt-3 pb-4">
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
