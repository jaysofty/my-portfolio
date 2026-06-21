import {
  List,
  ListItem,
  WrapItem,
  Avatar,
  Heading,
  Link,
  ListIcon,
  Button,
  HStack,
} from "@chakra-ui/react";
import { useState } from "react";
import { MdCheckCircle, MdSettings, MdEmail } from "react-icons/md";
import { FcAbout } from "react-icons/fc";
import { BsBook } from "react-icons/bs";
import { GoLocation } from "react-icons/go";
import { GiTie } from "react-icons/gi";
import resume from "../assets/Updated Resume.pdf";
import { motion } from "framer-motion";
import avatar from "../assets/avatar.jpg";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from "react-icons/ai";
import { fontColors } from "../theme";

interface NavItemProps {
  activeItem: string;
  setActiveItem: (item: string) => void;
  name: string;
  route: string;
}

const NavItem = ({ activeItem, name, route }: NavItemProps) => {
  return activeItem !== name ? <Link href={route}>{name}</Link> : null;
};

const AsideList = () => {
  const [activeItem, setActiveItem] = useState<string>("");

  return (
    <>
      <motion.div
        animate={{
          scale: [1, 2, 2, 1, 1],
          rotate: [0, 0, 270, 270, 0],
          borderRadius: ["20%", "20%", "50%", "50%", "20%"],
        }}
      >
        <List
          spacing={3}
          paddingLeft={3}
          paddingY="5px"
          color={fontColors.secondary}
        >
          <WrapItem>
            <Avatar size="2xl" name="Abowaba Adekunle" src={avatar} />{" "}
          </WrapItem>
          <ListItem>
            <Heading
              whiteSpace={"nowrap"}
              as="h1"
              fontSize="2xl"
              marginBottom={10}
              paddingY={"2.5"}
            >
              Abowaba Adekunle
            </Heading>

            <ListIcon as={FcAbout} color="blue.500" />
            <NavItem
              setActiveItem={setActiveItem}
              name="About"
              route="/"
              activeItem={activeItem}
            />
          </ListItem>
          <ListItem whiteSpace="nowrap">
            <a href={resume} download="Adekunle's Resume.pdf">
              <ListIcon as={GiTie} color="blue.500" />
              Download Resume
            </a>
          </ListItem>
          <ListItem>
            <ListIcon as={BsBook} color="blue.500" />
            <NavItem
              setActiveItem={setActiveItem}
              name="Education"
              route="/education"
              activeItem={activeItem}
            />
          </ListItem>
          <ListItem>
            <ListIcon as={MdCheckCircle} color="blue.500" />
            <NavItem
              setActiveItem={setActiveItem}
              name="Projects"
              route="/projects"
              activeItem={activeItem}
            />
          </ListItem>
          <ListItem>
            <ListIcon as={MdSettings} color="blue.500" />
            <NavItem
              setActiveItem={setActiveItem}
              name="Services"
              route="/services"
              activeItem={activeItem}
            />
          </ListItem>
          <ListItem whiteSpace="nowrap">
            <ListIcon as={GoLocation} color="blue.500" />
            <NavItem
              setActiveItem={setActiveItem}
              name="Lagos, Nigeria"
              route="#"
              activeItem={activeItem}
            />
          </ListItem>
          <ListItem>
            <Button
              whiteSpace="normal"
              name="Email"
              textAlign="left"
              onClick={() => {
                window.open("mailto:kunlele.kunzy@gmail.com");
              }}
              variant="link"
              fontSize="lg"
            >
              <ListIcon as={MdEmail} color="blue.500" />
              kunlele.kunzy@gmail.com
            </Button>
          </ListItem>
          <Heading as="h1" fontSize="2xl">
            Socials
          </Heading>
          <HStack
            justify="space-around"
            margin="auto"
            paddingY={5}
            paddingRight={5}
            color="blue.500"
          >
            <Link
              href="https://www.linkedin.com/in/adekunle-abowaba-09a2701b4/"
              target="__blank"
              aria-label="LinkedIn"
            >
              <AiFillLinkedin className="w-8 h-8 cursor-pointer" />
            </Link>
            <Link
              href="https://github.com/jaysofty?tab=repositories"
              target="__blank"
              aria-label="GitHub"
            >
              <AiFillGithub className="w-8 h-8 cursor-pointer" />
            </Link>
            <Link href="https://twitter.com/jaysofty_" target="__blank">
              <AiFillTwitterCircle
                className="cursor-pointer"
                aria-label="twitter"
              />
            </Link>
          </HStack>
        </List>
      </motion.div>
    </>
  );
};

export default AsideList;
