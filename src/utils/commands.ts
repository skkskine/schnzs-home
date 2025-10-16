import type { Command } from "../types/command";
import { bio, contacts, skills } from "./texts";

export default function HandleCommands(command: Command): string {
  switch (command) {
    case "bio":
      return bio;
    case "skills":
      return skills;
    case "contacts":
      return contacts;
    case "clear":
      return "clear";
    default:
      return "this command doesn't exists. type commands for a comprehensive list";
  }
}
