type AcceptedCommands =
  | "bio"
  | "skills"
  | "contacts"
  | "clear"
  | "credits"
  | "commands";
export type Command = AcceptedCommands & string;
