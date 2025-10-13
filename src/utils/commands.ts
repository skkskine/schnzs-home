export default function HandleCommands(command: string): string {
  switch (command) {
    case "bio":
      return getBio();
    case "contacts":
      return getContacts();
    case "clear":
      return "clear";
    default:
      return "this command doesn't exists. type commands for a comprehensive list";
  }
}

function getBio(): string {
  return `Questa è la mia bio.
    Bella vero?`;
}

function getContacts(): string {
  return `-> you can reach out via email at gianmaria@tuta.com, or find me on linkedin (Gianmaria Schinezos) or github (skkskine) <-`;
}
