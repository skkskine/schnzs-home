import { useEffect, useState } from "react";
import TextIntro from "./TextIntro";
import Typebar from "./Typebar";
import HandleCommands from "../../../utils/commands";
import type { Command } from "../../../types/command";

interface TextInput {
  id: string;
  text: string;
}

export default function Terminal() {
  const [outputList, setOutputList] = useState<TextInput[]>([]);

  function handleCommand(command: Command) {
    const text = HandleCommands(command);

    setOutputList(
      text === "clear" ? [] : [...outputList, { id: crypto.randomUUID(), text }]
    );
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
          <p key={output.id} className="mb-2 max-w-1/2 whitespace-pre-wrap">
            {output.text}
          </p>
        ))}
      </pre>
      <Typebar onCommand={handleCommand}></Typebar>
    </div>
  );
}
