import {
  Avatar,
  Badge,
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  HStack,
  Link,
  List,
  ListIcon,
  ListItem,
  Text,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";

import { useEffect, useState } from "react";

import {
  MdCheckCircle,
  MdEmail,
  MdLocationOn,
  MdSettings,
} from "react-icons/md";

import { FcAbout } from "react-icons/fc";
import { BsBook } from "react-icons/bs";
import { GiTie } from "react-icons/gi";

import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from "react-icons/ai";

import { motion } from "framer-motion";

import resume from "../assets/Adekunle_James_ATS_CV_Updated.pdf";
import avatar from "../assets/avatar.jpg";

interface NavItemProps {
  activeItem: string;
  name: string;
  route: string;
  icon: React.ElementType;
  iconColor?: string;
  onNavigate: (name: string) => void;
}

const NavItem = ({
  activeItem,
  name,
  route,
  icon: Icon,
  iconColor = "blue.500",
  onNavigate,
}: NavItemProps) => {
  const isActive = activeItem === name;

  const activeBg = useColorModeValue("blue.50", "blue.900");
  const hoverBg = useColorModeValue("gray.100", "whiteAlpha.100");
  const activeColor = useColorModeValue("blue.700", "blue.300");
  const mutedColor = useColorModeValue("gray.600", "gray.300");

  return (
    <ListItem w="full">
      <Link
        href={route}
        onClick={() => onNavigate(name)}
        display="flex"
        alignItems="center"
        gap={3}
        px={3}
        py={2.5}
        borderRadius="lg"
        textDecoration="none"
        bg={isActive ? activeBg : "transparent"}
        color={isActive ? activeColor : mutedColor}
        fontWeight={isActive ? "semibold" : "medium"}
        transition="all 0.2s ease"
        _hover={{
          bg: isActive ? activeBg : hoverBg,
          color: activeColor,
          textDecoration: "none",
          transform: "translateX(2px)",
        }}
        _focusVisible={{
          outline: "2px solid",
          outlineColor: "blue.400",
          outlineOffset: "2px",
        }}
      >
        <Box
          as={Icon}
          boxSize={5}
          color={isActive ? activeColor : iconColor}
          flexShrink={0}
        />

        <Text fontSize="sm">{name}</Text>

        {isActive && (
          <Box ml="auto" w="6px" h="6px" borderRadius="full" bg="blue.500" />
        )}
      </Link>
    </ListItem>
  );
};

const AsideList = () => {
  const [activeItem, setActiveItem] = useState("About");

  const cardBg = useColorModeValue("white", "gray.900");
  const borderColor = useColorModeValue("gray.200", "whiteAlpha.200");
  const mutedText = useColorModeValue("gray.500", "gray.400");
  const subtleBg = useColorModeValue("gray.50", "whiteAlpha.50");
  const emailBg = useColorModeValue("blue.50", "blue.900");
  const emailColor = useColorModeValue("blue.700", "blue.200");

  // Determine active page from the current URL.
  const getActiveItem = () => {
    const path = window.location.pathname;

    if (path.startsWith("/education")) {
      return "Education";
    }

    if (path.startsWith("/projects")) {
      return "Projects";
    }

    if (path.startsWith("/services")) {
      return "Services";
    }

    return "About";
  };

  useEffect(() => {
    setActiveItem(getActiveItem());

    const handlePopState = () => {
      setActiveItem(getActiveItem());
    };

    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

  const handleNavigate = (name: string) => {
    setActiveItem(name);
  };

  return (
    <Box
      as={motion.aside}
      initial={{ opacity: 0, x: -24 }}
      animate={{
        opacity: 1,
        x: 0,
        transition: {
          duration: 0.45,
          ease: "easeOut",
        },
      }}
      bg={cardBg}
      h="full"
      borderRight="1px solid"
      borderColor={borderColor}
      p={{ base: 4, md: 6 }}
      overflowY="auto"
    >
      <VStack spacing={6} align="stretch">
        {/* Profile */}
        <VStack spacing={3} textAlign="center">
          <Box
            position="relative"
            display="inline-flex"
            _after={{
              content: '""',
              position: "absolute",
              bottom: "4px",
              right: "4px",
              w: "14px",
              h: "14px",
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
              boxShadow="0 8px 25px rgba(0, 0, 0, 0.12)"
              border="3px solid"
              borderColor={subtleBg}
            />
          </Box>

          <Box>
            <Heading
              as="h1"
              fontSize="xl"
              fontWeight="extrabold"
              color="inherit"
              mb={1}
            >
              Abowaba Adekunle
            </Heading>

            <Text fontSize="sm" color={mutedText} fontWeight="medium">
              Software Engineer
            </Text>
          </Box>

          <Badge
            colorScheme="blue"
            variant="subtle"
            borderRadius="full"
            px={3}
            py={1}
            fontSize="xs"
          >
            Open to Opportunities
          </Badge>
        </VStack>

        <Divider borderColor={borderColor} />

        {/* Navigation */}
        <Box>
          <Text
            fontSize="xs"
            fontWeight="bold"
            textTransform="uppercase"
            letterSpacing="wider"
            color={mutedText}
            px={3}
            mb={2}
          >
            Navigation
          </Text>

          <List spacing={1}>
            <NavItem
              name="About"
              route="/"
              icon={FcAbout}
              activeItem={activeItem}
              onNavigate={handleNavigate}
            />

            <NavItem
              name="Education"
              route="/education"
              icon={BsBook}
              activeItem={activeItem}
              onNavigate={handleNavigate}
            />

            <NavItem
              name="Projects"
              route="/projects"
              icon={MdCheckCircle}
              activeItem={activeItem}
              onNavigate={handleNavigate}
            />

            <NavItem
              name="Services"
              route="/services"
              icon={MdSettings}
              activeItem={activeItem}
              onNavigate={handleNavigate}
            />
          </List>
        </Box>

        {/* Resume */}
        <Box>
          <Text
            fontSize="xs"
            fontWeight="bold"
            textTransform="uppercase"
            letterSpacing="wider"
            color={mutedText}
            px={3}
            mb={2}
          >
            Resume
          </Text>

          <Link
            href={resume}
            download="Adekunle_James_ATS_CV_Updated.pdf"
            display="flex"
            alignItems="center"
            gap={3}
            px={3}
            py={2.5}
            borderRadius="lg"
            color={mutedText}
            fontWeight="medium"
            fontSize="sm"
            textDecoration="none"
            _hover={{
              bg: subtleBg,
              color: "blue.500",
              textDecoration: "none",
            }}
            _focusVisible={{
              outline: "2px solid",
              outlineColor: "blue.400",
              outlineOffset: "2px",
            }}
          >
            <Box as={GiTie} boxSize={5} color="blue.500" flexShrink={0} />

            <Text>Download Resume</Text>

            <Text ml="auto" fontSize="xs" color={mutedText}>
              PDF
            </Text>
          </Link>
        </Box>

        {/* Contact Information */}
        <Box>
          <Text
            fontSize="xs"
            fontWeight="bold"
            textTransform="uppercase"
            letterSpacing="wider"
            color={mutedText}
            px={3}
            mb={2}
          >
            Contact
          </Text>

          <VStack spacing={1} align="stretch">
            <Flex align="center" gap={3} px={3} py={2.5}>
              <Box
                as={MdLocationOn}
                boxSize={5}
                color="blue.500"
                flexShrink={0}
              />

              <Text fontSize="sm" color={mutedText} fontWeight="medium">
                Lagos, Nigeria
              </Text>
            </Flex>

            <Button
              as="a"
              href="mailto:kunlele.kunzy@gmail.com"
              variant="ghost"
              justifyContent="flex-start"
              leftIcon={<MdEmail />}
              color={emailColor}
              bg={emailBg}
              borderRadius="lg"
              fontSize="sm"
              fontWeight="medium"
              px={3}
              py={5}
              _hover={{
                bg: useColorModeValue("blue.100", "blue.800"),
              }}
              _focusVisible={{
                outline: "2px solid",
                outlineColor: "blue.400",
                outlineOffset: "2px",
              }}
            >
              <Text
                overflow="hidden"
                textOverflow="ellipsis"
                whiteSpace="nowrap"
              >
                kunlele.kunzy@gmail.com
              </Text>
            </Button>
          </VStack>
        </Box>

        {/* Social Links */}
        <Box>
          <Divider borderColor={borderColor} mb={5} />

          <VStack spacing={3}>
            <Text
              fontSize="xs"
              fontWeight="bold"
              textTransform="uppercase"
              letterSpacing="wider"
              color={mutedText}
            >
              Connect
            </Text>

            <HStack spacing={3}>
              <Link
                href="https://www.linkedin.com/in/adekunle-abowaba-09a2701b4/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit LinkedIn profile"
                display="flex"
                alignItems="center"
                justifyContent="center"
                boxSize={10}
                borderRadius="full"
                color="blue.500"
                bg={subtleBg}
                transition="all 0.2s ease"
                _hover={{
                  color: "blue.600",
                  transform: "translateY(-2px)",
                  boxShadow: "md",
                }}
                _focusVisible={{
                  outline: "2px solid",
                  outlineColor: "blue.400",
                  outlineOffset: "2px",
                }}
              >
                <AiFillLinkedin size={21} />
              </Link>

              <Link
                href="https://github.com/jaysofty?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit GitHub repositories"
                display="flex"
                alignItems="center"
                justifyContent="center"
                boxSize={10}
                borderRadius="full"
                color="blue.500"
                bg={subtleBg}
                transition="all 0.2s ease"
                _hover={{
                  color: "blue.600",
                  transform: "translateY(-2px)",
                  boxShadow: "md",
                }}
                _focusVisible={{
                  outline: "2px solid",
                  outlineColor: "blue.400",
                  outlineOffset: "2px",
                }}
              >
                <AiFillGithub size={21} />
              </Link>

              <Link
                href="https://twitter.com/jaysofty_"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Twitter profile"
                display="flex"
                alignItems="center"
                justifyContent="center"
                boxSize={10}
                borderRadius="full"
                color="blue.500"
                bg={subtleBg}
                transition="all 0.2s ease"
                _hover={{
                  color: "blue.600",
                  transform: "translateY(-2px)",
                  boxShadow: "md",
                }}
                _focusVisible={{
                  outline: "2px solid",
                  outlineColor: "blue.400",
                  outlineOffset: "2px",
                }}
              >
                <AiFillTwitterCircle size={21} />
              </Link>
            </HStack>
          </VStack>
        </Box>
      </VStack>
    </Box>
  );
};

export default AsideList;
