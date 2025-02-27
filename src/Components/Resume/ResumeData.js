import Logo from "../Images/Logos/Logos.js";
import Icon from "../Images/Icons/Icon.js";

export const educationData = [
  {
    College: "University of Georgia '22",
    Program: "Master of Business & Technology",
    Logo: Logo.UGA,
    URL: "www.uga.edu",
    Alt: "University of Georgia",
  },
  {
    College: "Boston University '16",
    Program: "MS, Project Management",
    Logo: Logo.BU,
    URL: "www.bu.edu",
    Alt: "Boston University",
  },
  {
    College: "University of Phoenix '14",
    Program: "BS, Business",
    Logo: Logo.UoP,
    URL: "www.phoenix.edu",
    Alt: "University of Phoenix",
  },
];

export const certificationData = [
  {
    Provider: "Project Management Institute",
    Certification: "Project Management Professional",
    Logo: Logo.PMP,
    URL: "https://www.pmi.org/",
    Alt: "PMP",
  },
  {
    Provider: "Project Management Institute",
    Certification: "PMI-Agile Certified Profressional",
    Logo: Logo.PMIACP,
    URL: "https://www.pmi.org/",
    Alt: "PMI-ACP",
  },
];

export const skillsData = [
  {
    Skill: "Management",
    Icon: Icon.Tasks,
  },
  {
    Skill: "Project Management",
    Icon: Icon.ProjectDiagram,
  },
  {
    Skill: "Agile Project Management",
    Icon: Icon.StickyNote,
  },
  {
    Skill: "Program Management",
    Icon: Icon.ProjectDiagram,
  },
  {
    Skill: "Engineering Management",
    Icon: Icon.CodeBranch,
  },
];

export const programmingData = [
  { Logo: Logo.Python, Alt: "Python" },
  { Logo: Logo.Java, Alt: "Java" },
  { Logo: Logo.HTMLCSSJS, Alt: "HTML/CSS/JS" },
  { Logo: Logo.NodeJS, Alt: "NodeJS" },
  { Logo: Logo.VSCode, Alt: "VSCode" },
  { Logo: Logo.Bootstrap, Alt: "Bootstrap" },
  { Logo: Logo.React, Alt: "React" },
  { Logo: Logo.Flask, Alt: "Flask" },
  { Logo: Logo.Pycharm, Alt: "Pycharm" },
  { Logo: Logo.Spyder, Alt: "Spyder" },
  { Logo: Logo.MongoDB, Alt: "MongoDB" },
  { Logo: Logo.SQLite, Alt: "SQLite" },
  { Logo: Logo.MySQLWorkbench, Alt: "MySQLWorkbench" },
  { Logo: Logo.Spring, Alt: "Spring" },
  { Logo: Logo.Git, Alt: "Git" },
  { Logo: Logo.Eclipse, Alt: "Eclipse" },
  { Logo: Logo.Netlify, Alt: "Netlify" },
  { Logo: Logo.Fedora, Alt: "Fedora" },
  { Logo: Logo.RedHat, Alt: "RedHat" },
  { Logo: Logo.AWS, Alt: "AWS" },
  { Logo: Logo.Github, Alt: "Github" },
  { Logo: Logo.Heroku, Alt: "Heroku" },
  { Logo: Logo.Jira, Alt: "Jira" },
  { Logo: Logo.Miro, Alt: "Miro" },
  { Logo: Logo.Postman, Alt: "Postman" },
  { Logo: Logo.Slack, Alt: "Slack" },
  { Logo: Logo.Smartsheet, Alt: "Smartsheet" },
  { Logo: Logo.Trello, Alt: "Trello" },
  { Logo: Logo.AzureDevops, Alt: "AzureDevops" },
];

export const experienceData = [
  {
    Company: "Blankfactor",
    Position: "Client Partner",
    Location: "Remote",
    Date: "April 2024 - Present",
    Logo: Logo.Blankfactor,
    Description: [
      <li>
        Lead the delivery of high-impact technical projects and programs for
        Financial Services and FinTech clients, managing $12M+ in annual
        consulting services. Projects include digital banking solutions, payment
        systems modernization, fraud mitigation systems, reliability and
        scaling, and regulatory compliance.
      </li>,
      <li>
        Manage project and program managers, oversee resourcing, financial
        tracking, and contractor invoicing, ensuring financial transparency and
        alignment with project budgets and client expectations.
      </li>,
    ],
    URL: "https://blankfactor.com/",
  },
  {
    Company: "Blankfactor",
    Position: "Technical Program Manager",
    Location: "Remote",
    Date: "March 2023 - March 2024",
    Logo: Logo.Blankfactor,
    Description: [
      <li>
        Manage a portfolio of 10-15 concurrent projects and workstreams,
        overseeing resourcing, contractor invoicing, and performance
        evaluations.
      </li>,
      <li>
        Successfully delivered a multi-phase implementation of Workday Human
        Resource Management (HRM) to optimize financial and human resource
        management for internal operations, coordinating with vendors and
        internal teams to achieve a smooth deployment.
      </li>,
    ],
    URL: "https://blankfactor.com/",
  },
  {
    Company: "Testlio",
    Position: "Director, Business Software Practice",
    Location: "Remote",
    Date: "October 2021 - March 2023",
    Logo: Logo.Testlio,
    Description: [
      <li>
        Managed and grew a portfolio of B2B accounts, contributing to an 88%
        business growth rate in 2022 by advising on Software Development Life
        Cycle (SDLC) strategies.
      </li>,
      <li>
        Partnered with sales teams to expand new and existing accounts, while
        building and leading a high-performance client services team of
        engagement managers, and testing managers.
      </li>,
    ],
    URL: "www.testlio.com",
  },
  {
    Company: "Red Hat",
    Position: "Senior Program Manager",
    Location: "Remote",
    Date: "August 2020 - October 2021",
    Logo: Logo.RedHat,
    Description: [
      <li>
        Directed high-impact financial services programs ranging from $250K to
        $9M, applying agile methodologies to optimize project outcomes.
      </li>,
      <li>
        Mentored project managers and technical leads on agile and project
        management best practices to enhance team performance and client
        satisfaction.
      </li>,
      <li>
        Coordinated cross-functional collaboration with resource management,
        sales, finance, and the PMO to streamline program delivery.
      </li>,
    ],
    URL: "www.redhat.com",
  },
  {
    Company: "Boston University",
    Position: "Course Facilitator",
    Location: "Remote",
    Date: "May 2018 - Present",
    Logo: Logo.BuMet,
    Description: [
      <li>
        Course Facilitator for AD649 Agile Project Management and CS634 Agile
        Software Development.
      </li>,
    ],
    URL: "https://www.bu.edu/met/",
  },
  {
    Company: "TaxSlayer",
    Position: "Director of Software Development",
    Location: "Augusta, GA",
    Date: "July 2018 – August 2020",
    Logo: Logo.TaxSlayer,
    Description: [
      <li>
        Managed six software development teams (~30 developers) responsible for
        building and maintaining TaxSlayer's tax products and business
        applications (LegalSpark, Workful).
      </li>,
      <li>
        Implemented and standardized agile methodologies across development
        teams to improve efficiency and product delivery timelines.
      </li>,
    ],
    URL: "www.taxslayercorp.com",
  },
  {
    Company: "Zapata Technology, Inc.",
    Position: "VP, Intelligence & Strategic Programs    ",
    Location: "Augusta, GA",
    Date: "October 2016 – July 2018",
    Logo: Logo.Zapata,
    Description: [
      <li>
        Led the growth of Zapata’s DoD Intelligence and Strategic programs,
        overseeing capture processes, proposal management, and opportunity
        identification.
      </li>,
      <li>
        Served as Program Manager for a $4M custom software development program,
        managing P&L, resource allocation, and government stakeholder
        communications.
      </li>,
    ],
    URL: "https://www.zapatatechnology.com/",
    Alt: "Zapata Technology, Inc",
  },
  {
    Company: "Booz | Allen | Hamilton",
    Position: "Lead Associate",
    Location: "Augusta, GA",
    Date: "December 2011 – October 2016 ",
    Logo: Logo.BoozAllen,
    Description: [
      <li>
        Managed a 20-member team providing intelligence products and IT training
        solutions to government clients.
      </li>,
      <li>
        Delivered custom IT and analytical solutions for government clients
        through a specialized projects team, ensuring tailored outcomes to meet
        mission-critical needs.
      </li>,
    ],
    URL: "https://www.boozallen.com/",
  },
  {
    Company: "U.S. Army",
    Position: "Staff Sergeant",
    Location: "Multiple",
    Date: "July 2003 – January 2012",
    Logo: Logo.Mtn,
    Description: "",
    URL: "https://www.goarmy.com/",
  },
];

export const volunteerData = [
  {
    Company: "PMI Augusta Aiken",
    Position: "Past-President",
    Location: "Augusta, GA",
    Date: "December 2016 - Present",
    Logo: Logo.PMIAA,
    Description: [
      <li>
        Served as VP Marketing, President-Elect, President and now Past
        President
      </li>,
    ],
    URL: "www.pmiaugustaaiken.org",
  },
  {
    Company: "theClubhou.se",
    Position: "Director of Administration",
    Location: "Augusta, GA",
    Date: "December 2017 - Present",
    Logo: Logo.theClubhouse,
    Description: [
      <li>
        Board member for theClubhou.se and Hack Augusta, the parent not for
        profit.
      </li>,
    ],
    URL: "www.theClubhou.se",
  },
  {
    Company: "AFCEA",
    Position: "Small Business Chair, Augusta Fort-Gordon Chapter",
    Location: "Augusta, GA",
    Date: "January 2017 - July 2018",
    Logo: Logo.AFCEA,
    Description: [
      <li>
        Served as VP Marketing, President-Elect, President and now Past
        President
      </li>,
    ],
    URL: "https://www.afcea.org",
  },
  {
    Company: "IPMA",
    Position: "Quality Manager",
    Location: "Remote",
    Date: "January 2016 - October 2016",
    Logo: Logo.IPMA,
    Description: [
      <li>
        Served as Quality Manager, supporitng operations with Quality Assurance
        and Quality Control.
      </li>,
    ],
    URL: "https://www.ipma-usa.org/",
  },
];
