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
  {
    Skill: "Programming",
    Icon: Icon.Code,
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
];

export const toolsData = [
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
    Company: "Testlio",
    Position: "Director, Business Software Practice",
    Location: "Remote",
    Date: "October 2021 - Present",
    Logo: Logo.Testlio,
    Description: [
      <li>
        Direct and manage a portfolio of accounts that fall within the Business
        Software Practice.
      </li>,
      <li>
        Responsible for the growth of existing accounts, support to sales for
        new accounts, and growth of the team, consisting of Testing Managers,
        Testing Coordinators, and Engagement Managers.
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
        Manage Projects and Programs in the Financial Services Industry, ranging
        from $250k projects to >$9m per year programs encompassing many
        projects.
      </li>,
      <li>
        Mentor and support project managers, technical leads, and all other
        members of program and projects.
      </li>,
      <li>
        Coordinate cross-team collaboration with resource management, sales,
        support, services, finance, and the PMO.
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
        Managed TaxSlayer’s software development teams, comprised of ~30
        developers on six teams, who build and maintain TaxSlayer’s consumer and
        professional tax products as well as two business applications
        (LegalSpark and Workful).
      </li>,
      <li>
        Responsibilities included the resourcing of strategic projects that
        drive innovation and revenue for TaxSlayer, the overall career
        development of each team, and working with internal stakeholders, other
        departments within TaxSlayer, and the engineering team to ensure
        communication on projects were successful
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
        Responsible for the growth of Zapata’s Intelligence and Strategic
        programs within DoD markets. Responsibilities included opportunity
        identification, teaming, and managing the capture and proposal process.{" "}
      </li>,
      <li>
        Served as Program Manager for the first prime government contract for
        Zapata, which was a remote program. Responsible for program execution,
        P&L, resourcing, and government communication.{" "}
      </li>,
    ],
    URL: "https://www.zapatatechnology.com/",
    Alt: "Zapata Technology, Inc",
  },
  {
    Company: "Minutemen Consulting Group",
    Position: "President & Founder",
    Location: "Evans, GA",
    Date: "July 2016 – July 2018",
    Logo: Logo.Minutemen,
    Description: [
      <li>
        Minutemen was a project management consulting company that executed
        three contracts. The first contract involved implementing agile
        processes for a Real Estate company based in Georgia. A training program
        was developed and delivered to aid in understanding agile. The second
        and third contracts were for a large technology firm to develop a
        request for proposal for project management software and to develop
        processes for the innovation and design department to streamline
        projects.
      </li>,
    ],
    URL: "www.minahan.dev",
  },
  {
    Company: "Booz | Allen | Hamilton",
    Position: "Lead Associate",
    Location: "Augusta, GA",
    Date: "December 2011 – October 2016 ",
    Logo: Logo.BoozAllen,
    Description: [
      <li>
        Managed up to 20 full-time equivalent (FTE) positions that provide
        intelligence products and training.
      </li>,
      <li>
        Managed a special projects team that delivered tailored information
        technology (IT) and analytical products to government clients. The
        products included web development upgrades, data science products, data
        analytics, capacity analyses, and trend analyses.
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
    Position: "President",
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
