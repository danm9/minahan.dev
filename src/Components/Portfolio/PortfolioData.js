import Logo from "../Images/Logos/Logos.js";
import { Image } from "react-bootstrap";

export const projectData = [
  {
    Project: "Minahan.dev - This site",
    Description:
      "This site was created for my personal work. I am using React on the frontend and hosting the site on Netlify.",
    Technologies: [
      <Image id="logo" src={Logo.React} title="React" />,
      <Image id="logo" src={Logo.Bootstrap} title="Bootstrap" />,
      <Image id="logo" src={Logo.Github} title="Github" />,
      <Image id="logo" src={Logo.VSCode} title="VSCode" />,
      <Image id="logo" src={Logo.Netlify} title="Netlify" />,
    ],
    Github: "https://github.com/danm9/minahan.dev",
    URL: "https://www.minahan.dev",
  },
  {
    Project: "Velocity Tools",
    Description:
      "This site was created for the BU Agile Innovation Lab for Agile Velocity Calculations.",
    Technologies: [
      <Image id="logo" src={Logo.HTMLCSSJS} title="HTML/CSS/JS" />,
      <Image id="logo" src={Logo.Bootstrap} title="Bootstrap" />,
      <Image id="logo" src={Logo.Github} title="Github" />,
      <Image id="logo" src={Logo.VSCode} title="VSCode" />,
    ],
    Github: "https://github.com/danm9/velocity-site",
    URL: "https://danm9.github.io/velocity-site/",
  },
  {
    Project: "Blue Sky App v1",
    Description:
      "For our Capstone at UGA, we have been working on a web application and mobile web application that will help Blue Sky Commericial and Residential Cleaning. The application is not done, it's in active development. My team and I created a React Frontend, Spring backend that's set up as an API, and the API is connected to a MySQL database. For our Database, we are using AWS RDS for now.",
    Technologies: [
      <Image id="logo" src={Logo.React} title="React" />,
      <Image id="logo" src={Logo.Java} title="Java" />,
      <Image id="logo" src={Logo.Spring} title="Spring" />,
      <Image id="logo" src={Logo.Github} title="GitHub" />,
      <Image id="logo" src={Logo.VSCode} title="VSCode" />,
      <Image id="logo" src={Logo.Eclipse} title="Eclipse" />,
      <Image id="logo" src={Logo.MySQLWorkbench} title="MySQL Workbench" />,
      <Image id="logo" src={Logo.Postman} title="Postman" />,
    ],
    Github: "https://github.com/danm9/blue-sky-frontend",
    URL: "",
  },
  {
    Project: "Blue Sky App",
    Description:
      "For our Phase 2 of the Capstone, I converted the API from Java/Spring to NodeJs/Express and moved from MySQL to MongoDB to make our app a full MERN stack.",
    Technologies: [
      <Image id="logo" src={Logo.React} title="React" />,
      <Image id="logo" src={Logo.NodeJS} title="NodeJS" />,
      <Image id="logo" src={Logo.Express} title="Express" />,
      <Image id="logo" src={Logo.MongoDB} title="MongoDB" />,
      <Image id="logo" src={Logo.Github} title="GitHub" />,
      <Image id="logo" src={Logo.VSCode} title="VSCode" />,
      <Image id="logo" src={Logo.Postman} title="Postman" />,
      <Image id="logo" src={Logo.Cypress} title="Cypress" />,
    ],
    Github: "https://github.com/danm9/blue-sky-frontend",
    URL: "https://blueskydemoapp.netlify.app/",
  },
  {
    Project: "Kloud Komputing (UGA Final)",
    Description:
      "This site was created for a Final in my Master of Business & Technology program at UGA. The requirements were to come up with a company that was giving a quote on cloud computing. I chose to use vanilla JS/HTML/CSS to follow the assignment requirements.",
    Technologies: [
      <Image id="logo" src={Logo.HTMLCSSJS} title="HTML/CSS/JS" />,
      <Image id="logo" src={Logo.Github} title="GitHub" />,
      <Image id="logo" src={Logo.VSCode} title="VSCode" />,
    ],
    Github: "https://github.com/danm9/MinahanFinal",
    URL: "https://danm9.github.io/MinahanFinal/index.html",
  },
];
