type AcceptedCommands =
  | "bio"
  | "skills"
  | "contacts"
  | "clear"
  | "credits"
  | "commands"
  | "cv";
export type Command = AcceptedCommands & string;
