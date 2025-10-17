import type { Command } from "../types/command";
import {
  bio,
  commands,
  contacts,
  credits,
  skills,
  unknownCommand,
} from "./texts";

export default function HandleCommands(command: Command): string {
  switch (command) {
    case "bio":
      return bio;
    case "skills":
      return skills;
    case "contacts":
      return contacts;
    case "credits":
      return credits;
    case "commands":
      return commands;
    case "clear":
      return "clear";
    case "cv":
      return "cv";
    default:
      return unknownCommand;
  }
}
