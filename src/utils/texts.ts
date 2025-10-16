export const title = `
    ▄████  ██▓ ▄▄▄       ███▄    █  ███▄ ▄███▓ ▄▄▄       ██▀███   ██▓ ▄▄▄      
 ██▒ ▀█▒▓██▒▒████▄     ██ ▀█   █ ▓██▒▀█▀ ██▒▒████▄    ▓██ ▒ ██▒▓██▒▒████▄    
▒██░▄▄▄░▒██▒▒██  ▀█▄  ▓██  ▀█ ██▒▓██    ▓██░▒██  ▀█▄  ▓██ ░▄█ ▒▒██▒▒██  ▀█▄  
░▓█  ██▓░██░░██▄▄▄▄██ ▓██▒  ▐▌██▒▒██    ▒██ ░██▄▄▄▄██ ▒██▀▀█▄  ░██░░██▄▄▄▄██ 
░▒▓███▀▒░██░ ▓█   ▓██▒▒██░   ▓██░▒██▒   ░██▒ ▓█   ▓██▒░██▓ ▒██▒░██░ ▓█   ▓██▒
 ░▒   ▒ ░▓   ▒▒   ▓▒█░░ ▒░   ▒ ▒ ░ ▒░   ░  ░ ▒▒   ▓▒█░░ ▒▓ ░▒▓░░▓   ▒▒   ▓▒█░
  ░   ░  ▒ ░  ▒   ▒▒ ░░ ░░   ░ ▒░░  ░      ░  ▒   ▒▒ ░  ░▒ ░ ▒░ ▒ ░  ▒   ▒▒ ░
░ ░   ░  ▒ ░  ░   ▒      ░   ░ ░ ░      ░     ░   ▒     ░░   ░  ▒ ░  ░   ▒   
      ░  ░        ░  ░         ░        ░         ░  ░   ░      ░        ░  ░
                                                                             
  ██████  ▄████▄   ██░ ██  ██▓ ███▄    █ ▓█████ ▒███████▒ ▒█████    ██████   
▒██    ▒ ▒██▀ ▀█  ▓██░ ██▒▓██▒ ██ ▀█   █ ▓█   ▀ ▒ ▒ ▒ ▄▀░▒██▒  ██▒▒██    ▒   
░ ▓██▄   ▒▓█    ▄ ▒██▀▀██░▒██▒▓██  ▀█ ██▒▒███   ░ ▒ ▄▀▒░ ▒██░  ██▒░ ▓██▄     
  ▒   ██▒▒▓▓▄ ▄██▒░▓█ ░██ ░██░▓██▒  ▐▌██▒▒▓█  ▄   ▄▀▒   ░▒██   ██░  ▒   ██▒  
▒██████▒▒▒ ▓███▀ ░░▓█▒░██▓░██░▒██░   ▓██░░▒████▒▒███████▒░ ████▓▒░▒██████▒▒  
▒ ▒▓▒ ▒ ░░ ░▒ ▒  ░ ▒ ░░▒░▒░▓  ░ ▒░   ▒ ▒ ░░ ▒░ ░░▒▒ ▓░▒░▒░ ▒░▒░▒░ ▒ ▒▓▒ ▒ ░  
░ ░▒  ░ ░  ░  ▒    ▒ ░▒░ ░ ▒ ░░ ░░   ░ ▒░ ░ ░  ░░░▒ ▒ ░ ▒  ░ ▒ ▒░ ░ ░▒  ░ ░  
░  ░  ░  ░         ░  ░░ ░ ▒ ░   ░   ░ ░    ░   ░ ░ ░ ░ ░░ ░ ░ ▒  ░  ░  ░    
      ░  ░ ░       ░  ░  ░ ░           ░    ░  ░  ░ ░        ░ ░        ░    
         ░                                      ░                            
  `;

export const intro = `welcome :) i'm a frontend developer & code enthusiast

use one of the following commands to explore around:
  skills
  bio
  contacts
  commands

`;

export const bio = `${formatTitle("bio")}
i've started my IT journey in high school studying computer science, once i completed my studies i took a web development course and i started working right afterwards.
the first job experience was at heavy studio, a web agency focusing on the fashion and food, developing e-commerces and managing hosting, domain, emails, and techncal support.\n
after 3 years i felt that it was time to move on and i joined siav, a company developing exterprise content management solutions, in which i worked on two project, being both complete redesigns of the company main products.
here i learned about architecture, core feature development, team leaing, performance optimizations, working on international teams.
i was responsible of the startup of a complex enterprise application, curating all the core aspects, including the development of custom (yet simple) solutions to solve complex problems.`;

export const skills = `${formatTitle("skills")}
-architectural and technical lead
-performance optimizations
-code review, peer support and mentoring
-planning and documentation

-angular/react, javascript (es6+), typescript
-html5, css3, ux/ui
-redux-like state management
-rest apis, cookies, authentication
-testing, version control, i18n, a11y
-agile development, ci/cd`;

export const contacts = `${formatTitle("contacts")}
you can reach out by email at gianmaria@tuta.com, or find me on linkedin (Gianmaria Schinezos) and github (skkskine)`;

export const credits = `${formatTitle("credits")}
made with vite (react ts) and tailwind, deployed with docker in a vps`;

export const commands = `${formatTitle("commands")}
skills
bio
contacts
help
commands
credits`;

export const unknownCommand =
  "this command doesn't exists, type commands for a comprehensive list";

function formatTitle(title: string): string {
  let equals = "=".repeat(title.length);

  return `\n====${equals}====
=== ${title} ===
====${equals}====\n`;
}
