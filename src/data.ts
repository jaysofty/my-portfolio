import { FaServer } from "react-icons/fa";
import { RiComputerLine } from "react-icons/ri";
import { DiPhotoshop } from "react-icons/di";
import game_hub from "./assets/game_hub.jpg";
import tech_crush_ui from "./assets/tech_crush_ui.png";
import dog_nation from "./assets/dog_nation.png"
import makeup_port_folio from "./assets/makeup_logo.png";
import ai_expense from "./assets/ai_expense.png"
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
    about: "Handle database, server, api using Node js, Expressjs, python + fastapi",
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
    name: "Dog Marketplace",
    description:
      "A simple dog market place app for buying dog items",
    category: "Nextjs",
    image_path: dog_nation,
    github_url: "https://github.com/jaysofty/dogs_nation",
    live_url: "https://dogs-nation.vercel.app/",
  },
 
  {
    id: 2,
    name: "Game-Hub",
    description:
      "A game Web App with Rawg Api built with Typescript and Reactjs",
    category: "Typescript",
    image_path: game_hub,
    github_url: "https://github.com/jaysofty/gameapp",
    // deployed_url: "https://my-portfolio-website-react.herokuapp.com/",
  },

  {
    id: 3,
    name: "AI Expense Tracker System",
    description: "Next.js Expense AI tracker with Azure Document Intelligence, Neon DB. Receipt gets uploaded and data gets analyzed and extracted for approval or rejection.",
    category: "Reactjs",
    image_path: ai_expense,
    live_url: "https://expense-tracker-system-3qz5cb5r4-jaysoftys-projects.vercel.app/",
    github_url: "https://github.com/jaysofty/expense_tracker_system",
  },
  {
    id: 4,
    name: "Reusable UI login and dashboard page",
    description:
      "This UI page consist of a login page, settings page and a dashboard fully responsive and protected with middleware",
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
