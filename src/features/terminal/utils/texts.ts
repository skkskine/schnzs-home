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
  bio
  skills
  contacts
  commands

`;

export const bio = `${formatTitle("bio")}
# my it journey

started my it learnings during high school, studying computer science. after graduation, i completed a web development course and started working in the field.

## first role: web developer at heavy studio
joined heavy studio, a web agency specializing in fashion and food industries. focused on:
- developing e-commerce platforms
- managing hosting, domains, emails, and providing technical support

## next step: senior developer at siav
moved to siav, a leader in enterprise content management solutions. worked on two major redesign projects for the company’s flagship products.

### key learning:
- architectural design and implementation of enterprise applications
- designed and implemented client side performance-intensive solutions
- code splitting and bundle optimizations

type 'skills' to learn more on what i can do
`;

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
