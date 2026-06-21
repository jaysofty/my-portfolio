import { FaServer } from "react-icons/fa";
import { RiComputerLine } from "react-icons/ri";
import { DiPhotoshop } from "react-icons/di";
import edo_state from "./assets/EDO-STATE-GOVT..jpg";
import reminder from "./assets/reminder.jpg";
import game_hub from "./assets/game_hub.jpg";
import digit_home from "./assets/digit_home.png";
import port_folio from "./assets/port.png";
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
    name: "Portfolio website",
    description:
      "My Portofolio website that shows my experience, a bio about me and also a list of some of my projects",
    image_path: port_folio,
    github_url: "https://gitlab.com/kunlele.kunzy/my-portfolio.git",
  },
  {
    id: 2,
    name: "Reminder App",
    description:
      "This App Adds And Deletes List of Todos with a time and date Tracker youll keep your schedule organized",
    category: "react",
    image_path: reminder,
    github_url: "https://github.com/kunzyJames/reminder-app",
    // deployed_url: "https://devxandercode.github.io/covid-19-tracker/",
  },
  {
    id: 3,
    name: "Game-Hub",
    description:
      "A game Web App with Rawg Api built with Typescript and Reactjs",
    category: "Typescript",
    image_path: game_hub,
    github_url: "https://github.com/kunzyJames/game-hub",
    // deployed_url: "https://my-portfolio-website-react.herokuapp.com/",
  },

  {
    id: 4,
    name: "Edo State Educational Management App",
    description: "A Control management system for Edo State Edu",
    category: "Typescript",
    image_path: edo_state,
    url: "https://gitlab.com/kunlele.kunzy/stripe-checkout.git",
    // deployed_url: "https://my-portfolio-website-react.herokuapp.com/",
  },
  {
    id: 5,
    name: "Digit Home Real Estate App",
    description:
      "Digit Home is a private real estate firm created to connect land/house owners by solving change and exchange of properties",
    category: "Typescript",
    image_path: digit_home,
    github_url: "https://digithomeltd.com/handymen",
    // deployed_url: "https://my-portfolio-website-react.herokuapp.com/",
  },
];
