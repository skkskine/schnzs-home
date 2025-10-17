import { useEffect, useState } from "react";
import TextIntro from "./TextIntro";
import Typebar from "./Typebar";
import HandleCommands from "../utils/commands";
import type { Command } from "../types/command";

interface TextInput {
  id: string;
  text: string;
}

export default function Terminal() {
  const [outputList, setOutputList] = useState<TextInput[]>([]);
  const [commandBuffer, setCommandBuffer] = useState<string[]>([""]);
  const [commandBufferIndex, setCommandBufferIndex] = useState<number>(0);

  function handleCommand(command: Command) {
    setCommandBuffer([commandBuffer[0], command, ...commandBuffer.slice(1)]);
    const text = HandleCommands(command);

    if (text === "cv") {
      window.open(
        "https://drive.google.com/file/d/1a5Cg2vjeia8W61FSrXJnV93AdEOekC8_/view?usp=sharing",
        "_blank"
      );
      return;
    }

    setOutputList(
      text === "clear" ? [] : [...outputList, { id: crypto.randomUUID(), text }]
    );

    setCommandBufferIndex(0);
  }

  function handleArrow(arrow: "ArrowUp" | "ArrowDown") {
    const shouldAdd =
      arrow === "ArrowUp" && commandBufferIndex < commandBuffer.length - 1;
    const shouldSubtract = arrow === "ArrowDown" && commandBufferIndex > 0;

    if (shouldAdd) {
      setCommandBufferIndex(commandBufferIndex + 1);
    }

    if (shouldSubtract) {
      setCommandBufferIndex(commandBufferIndex - 1);
    }
  }

  // always keep the page to the bottom
  useEffect(() => {
    window.scrollTo(0, document.body.scrollHeight);
  });

  return (
    <div className="h-screen p-5">
      <TextIntro></TextIntro>
      <pre>
        {outputList.map((output) => (
          <p
            key={output.id}
            className="mb-2 md:max-w-1/2 max-w-screen whitespace-pre-wrap"
          >
            {output.text}
          </p>
        ))}
      </pre>
      <Typebar
        onArrow={handleArrow}
        bufferCommand={commandBuffer[commandBufferIndex]}
        onCommand={handleCommand}
      ></Typebar>
    </div>
  );
}
