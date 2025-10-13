import { useState } from "react";
import TextIntro from "./TextIntro";
import Typebar from "./Typebar";
import HandleCommands from "../../../utils/commands";

interface Command {
  id: string;
  text: string;
}

export default function Terminal() {
  const [outputList, setOutputList] = useState<Command[]>([]);

  function handleCommand(command: string) {
    const text = HandleCommands(command);

    setOutputList(
      text === "clear" ? [] : [...outputList, { id: crypto.randomUUID(), text }]
    );
  }

  return (
    <div className="h-screen p-5">
      <TextIntro></TextIntro>
      <pre>
        {outputList.map((output) => (
          <p key={output.id} className="m-1">
            {output.text}
          </p>
        ))}
      </pre>
      <Typebar onCommand={handleCommand}></Typebar>
    </div>
  );
}
