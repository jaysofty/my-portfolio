import {
  List,
  ListItem,
  Avatar,
  Heading,
  Link,
  ListIcon,
  Button,
  VStack,
  HStack,
  Box,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { MdCheckCircle, MdSettings, MdEmail } from "react-icons/md";
import { FcAbout } from "react-icons/fc";
import { BsBook } from "react-icons/bs";
import { GoLocation } from "react-icons/go";
import { GiTie } from "react-icons/gi";
import resume from "../assets/Adekunle_James_Professional_Resume.pdf";
import { motion } from "framer-motion";
import avatar from "../assets/avatar.jpg";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from "react-icons/ai";

interface NavItemProps {
  activeItem: string;
  name: string;
  route: string;
}

const NavItem = ({ activeItem, name, route }: NavItemProps) => {
  const isActive = activeItem === name;
  const activeColor = useColorModeValue("blue.600", "blue.300");
  const hoverBg = useColorModeValue("gray.100", "whiteAlpha.100");

  return (
    <Link
      href={route}
      style={{ textDecoration: "none" }}
      w="full"
    >
      <Box
        px={4}
        py={2.5}
        borderRadius="md"
        bg={isActive ? hoverBg : "transparent"}
        color={isActive ? activeColor : "inherit"}
        fontWeight={isActive ? "bold" : "medium"}
        _hover={{ bg: hoverBg, color: activeColor }}
        transition="all 0.2s ease"
      >
        {name}
      </Box>
    </Link>
  );
};

const AsideList = () => {
  const [activeItem, setActiveItem] = useState<string>("About");
  const borderColor = useColorModeValue("gray.200", "whiteAlpha.200");
  const cardBg = useColorModeValue("white", "gray.900");

  // Sync active item based on current URL path on load/route change
  useEffect(() => {
    const path = window.location.pathname;
    if (path.includes("education")) {
      setActiveItem("Education");
    } else if (path.includes("projects")) {
      setActiveItem("Projects");
    } else if (path.includes("services")) {
      setActiveItem("Services");
    } else {
      setActiveItem("About");
    }
  }, []);

  return (
    <Box
      as={motion.div}
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0, transition: { duration: 0.5 } }}
      bg={cardBg}
      h="full"
      borderRight="1px solid"
      borderColor={borderColor}
      p={6}
      overflowY="auto"
    >
      <VStack spacing={6} align="center">
        {/* Avatar with subtle modern ring */}
        <Box
          position="relative"
          _after={{
            content: '""',
            position: "absolute",
            bottom: "2px",
            right: "2px",
            w: "16px",
            h: "16px",
            bg: "green.400",
            border: "3px solid",
            borderColor: cardBg,
            borderRadius: "full",
          }}
        >
          <Avatar
            size="xl"
            name="Abowaba Adekunle"
            src={avatar}
            boxShadow="md"
          />
        </Box>

        <VStack spacing={1} textAlign="center">
          <Heading as="h1" fontSize="xl" fontWeight="bold">
            Abowaba Adekunle
          </Heading>
          <Text fontSize="sm" color="gray.500">
            Software Engineer
          </Text>
        </VStack>

        {/* Navigation Links */}
        <List spacing={1} w="full">
          <ListItem display="flex" alignItems="center">
            <ListIcon as={FcAbout} boxSize={5} mr={2} />
            <NavItem name="About" route="/" activeItem={activeItem} />
          </ListItem>
          <ListItem display="flex" alignItems="center" px={4} py={2.5} borderRadius="md" _hover={{ bg: useColorModeValue("gray.100", "whiteAlpha.100") }}>
            <ListIcon as={GiTie} color="blue.500" boxSize={5} mr={2} />
            <a href={resume} download="Adekunle_James_Professional_Resume.pdf" style={{ width: "100%", fontWeight: 500 }}>
              Download Resume
            </a>
          </ListItem>
          <ListItem display="flex" alignItems="center">
            <ListIcon as={BsBook} color="blue.500" boxSize={5} mr={2} />
            <NavItem name="Education" route="/education" activeItem={activeItem} />
          </ListItem>
          <ListItem display="flex" alignItems="center">
            <ListIcon as={MdCheckCircle} color="blue.500" boxSize={5} mr={2} />
            <NavItem name="Projects" route="/projects" activeItem={activeItem} />
          </ListItem>
          <ListItem display="flex" alignItems="center">
            <ListIcon as={MdSettings} color="blue.500" boxSize={5} mr={2} />
            <NavItem name="Services" route="/services" activeItem={activeItem} />
          </ListItem>
          <ListItem display="flex" alignItems="center" px={4} py={2.5}>
            <ListIcon as={GoLocation} color="blue.500" boxSize={5} mr={2} />
            <Text fontSize="sm" color="gray.500" fontWeight="medium">Lagos, Nigeria</Text>
          </ListItem>
          <ListItem display="flex" alignItems="center" px={2}>
            <Button
              leftIcon={<MdEmail />}
              colorScheme="blue"
              variant="link"
              fontSize="sm"
              fontWeight="medium"
              onClick={() => window.open("mailto:kunlele.kunzy@gmail.com")}
            >
              kunlele.kunzy@gmail.com
            </Button>
          </ListItem>
        </List>

        {/* Socials Footer */}
        <VStack spacing={2} w="full" pt={4} borderTop="1px solid" borderColor={borderColor}>
          <Heading as="h2" fontSize="sm" textTransform="uppercase" letterSpacing="wider" color="gray.400">
            Connect
          </Heading>
          <HStack spacing={4} pt={1} color="blue.500">
            <Link href="https://www.linkedin.com/in/adekunle-abowaba-09a2701b4/" target="_blank" aria-label="LinkedIn">
              <AiFillLinkedin size={24} />
            </Link>
            <Link href="https://github.com/jaysofty?tab=repositories" target="_blank" aria-label="GitHub">
              <AiFillGithub size={24} />
            </Link>
            <Link href="https://twitter.com/jaysofty_" target="_blank" aria-label="Twitter">
              <AiFillTwitterCircle size={24} />
            </Link>
          </HStack>
        </VStack>
      </VStack>
    </Box>
  );
};

export default AsideList;