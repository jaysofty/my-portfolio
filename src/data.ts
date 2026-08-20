import { FaServer } from "react-icons/fa";
import { RiComputerLine } from "react-icons/ri";
import { DiPhotoshop } from "react-icons/di";
import tech_crush_ui from "./assets/tech_crush_ui.png";
import makeup_port_folio from "./assets/makeup_logo.png";
import ai_expense from "./assets/claimFlow.png"
import dog_nation from "./assets/dog_nation.png"
import news_dashboard from "./assets/news_dashboard.png"
export const about = [
  {
    id: 1,
    title: "Frontend Development",
    about:
      "scalable cross platform web applications using HTML, CSS, REACTjs, Typescript, Nextjs ",
    Icon: RiComputerLine,
  },
  {
    id: 2,
    title: "Backend Development",
    about: "Handle database, server, api using Node js, Expressjs, python + fastapi, Postgres, Prisma",
    Icon: FaServer,
  },
  {
    id: 3,
    title: "Graphic Design",
    about:
      "if youre looking to start your brand i believe the best strategic ways to go about marketing your brand are through Banners, Ids, MockLogo, im your guy!  ",
    Icon: DiPhotoshop,
  },
];

export const skill = [
  {
    name: "JavaScript",
    level: 90,
    //Icon: BsCircleFill,
  },
  {
    name: "React",
    level: 80,
    //  Icon: BsCircleFill,
  },
  // {
  //   name: "React Native",
  //   level: "80%",
  //   Icon: BsCircleFill,
  // },
  // {
  //   name: "Dart",
  //   level: "65%",
  //   Icon: BsCircleFill,
  // },
  {
    name: "Python",
    level: 50,
    // Icon: BsCircleFill,
  },
  {
    name: "TypeScript",
    level: 40,
    // Icon: BsCircleFill,
  },
  {
    name: "Nodejs",
    level: 50,
    //Icon: BsCircleFill,
  },
];

export const projects = [
  

  {
    id: 1,
    name: "AI Expense Tracker System",
    description: "Next.js Expense AI tracker with Azure Document Intelligence, Neon DB. Receipt gets uploaded and data gets analyzed and extracted for approval or rejection.",
    category: "Next.js",
    image_path: ai_expense,
    live_url: "https://expense-tracker-system-six.vercel.app/",
    github_url: "https://github.com/jaysofty/expense_tracker_system",
  },

    {
    id: 2,
    name: "Dog Marketplace",
    description: "Discover dogs from trusted sellers across Nigeria. Browse quality listings, connect with sellers, and find the perfect companion for your family.",
    category: "Next.js",
    image_path: dog_nation,
    live_url: "https://dogs-nation.vercel.app/",
    github_url: "https://github.com/jaysofty/dogs_nation",
  },
    {
    id: 3,
    name: "News Application",
    description: "allows users to view, search, create, update, and delete news articles through a simple and professional dashboard.",
    category: "Next.js",
    image_path: news_dashboard,
    live_url: "https://news-application-lake-nine.vercel.app/",
    github_url: "https://github.com/jaysofty/news-application",
  },
  {
    id: 4,
    name: "Reusable UI login and dashboard page",
    description:
      "This is a Demo UI that consist of a login page, settings page and a dashboard fully responsive no authentication has been applied login and enjoy the view.",
    category: "Nextjs",
    image_path: tech_crush_ui,
    live_url: "https://reusable-ui-zeta.vercel.app/dashboard/settings",
     github_url: "https://github.com/jaysofty/reusable-ui",
  },
  {
    id: 5,
    name: "Makeup and Gele Website",
    description:
      "Simple Makeup portfolio showcasing artistry",
    category: "ReactJs && Typescript",
    image_path: makeup_port_folio,
    github_url:  "https://github.com/jaysofty/makeup-portfolio",
    live_url: "https://makeup-portfolio-kohl.vercel.app/",
  
  },
];
