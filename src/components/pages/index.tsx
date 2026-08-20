import {
  Heading,
  Progress,
  SimpleGrid,
  Box,
  Text,
  Stack,
  Card,
  CardBody,
  Badge,
  useColorModeValue,
  Flex,
  Button,
} from "@chakra-ui/react";
import { useState } from "react";
import { motion } from "framer-motion";
import { fontColors } from "../../theme";
import { fadeInUp, routeAnimation } from "../../animation";

const MotionCard = motion(Card);
const MotionBox = motion(Box);

const skills = [
  { name: "JavaScript", level: 80, category: "Frontend" },
  { name: "React", level: 90, category: "Frontend" },
  { name: "Next.js", level: 85, category: "Frontend" },
  { name: "TypeScript", level: 75, category: "Frontend" },
  { name: "Redux.js", level: 80, category: "Tools" },
  { name: "Vite", level: 85, category: "Frontend" },
  { name: "HTML", level: 95, category: "Frontend" },
  { name: "CSS", level: 85, category: "Frontend" },
  { name: "Cloud / DevOps", level: 70, category: "Cloud" },

  // Tools & DevOps Tooling
  { name: "Docker", level: 80, category: "Tools" },
  { name: "Terraform", level: 70, category: "Tools" },
  { name: "Azure", level: 75, category: "Tools" },
  { name: "GitHub Actions", level: 80, category: "Tools" },
  { name: "CI/CD", level: 80, category: "Tools" },
  { name: "Git", level: 85, category: "Tools" },
  { name: "Postman", level: 80, category: "Tools" },
  { name: "Nginx", level: 75, category: "Tools" },
  { name: "Python", level: 65, category: "Programming" },
  { name: "Blockchain", level: 60, category: "Emerging Tech" },
  { name: "Web Graphics", level: 80, category: "Design" },
  { name: "Desktop Publishing", level: 85, category: "Design" },
  { name: "Postman", level: 80, category: "Tools" },
  { name: "Graphics Design", level: 89, category: "Tools" },
];

const categories = ["All", "Frontend", "Cloud", "Tools", "Design"];

const About = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const cardBg = useColorModeValue("white", "gray.900");
  const borderColor = useColorModeValue("gray.200", "whiteAlpha.200");
  const muted = useColorModeValue("gray.600", "gray.400");
  const statBoxBg = useColorModeValue("gray.50", "whiteAlpha.50");
  const activeTabBg = useColorModeValue("blue.600", "blue.500");
  const inactiveTabBg = useColorModeValue("gray.100", "whiteAlpha.100");

  const filteredSkills =
    selectedCategory === "All"
      ? skills
      : skills.filter(
          (skill) =>
            skill.category
              .toLowerCase()
              .includes(selectedCategory.toLowerCase()) ||
            skill.category === selectedCategory,
        );

  return (
    <MotionBox
      variants={routeAnimation}
      initial="initial"
      animate="animate"
      exit="exit"
      py={6}
    >
      {/* Header */}
      <Heading
        color={fontColors.secondary}
        size="xl"
        fontWeight="extrabold"
        mb={6}
      >
        About Me
      </Heading>

      {/* Bio & Highlight Cards Section */}
      <SimpleGrid columns={{ base: 1, lg: 3 }} spacing={6} mb={12}>
        {/* Main Bio Card */}
        <Box
          gridColumn={{ base: "span 1", lg: "span 2" }}
          bg={cardBg}
          p={6}
          borderRadius="2xl"
          borderWidth="1px"
          borderColor={borderColor}
          boxShadow="sm"
          display="flex"
          flexDirection="column"
          justifyContent="center"
        >
          <Text
            fontSize="lg"
            fontWeight="semibold"
            color={fontColors.secondary}
            mb={3}
          >
            Crafting Scalable Web Experiences & Robust Infrastructure
          </Text>
          <Text lineHeight="1.8" color={muted} fontSize="md">
            Frontend Engineer and DevOps Engineer with experience building
            scalable, high-performance web applications and deploying
            containerized systems using modern cloud and DevOps practices.
            Specializes in React, Next.js, TypeScript, responsive UI systems,
            Docker, CI/CD, GitHub Actions, Terraform, Azure, Nginx, and REST API
            integration. Passionate about clean code, performance optimization,
            automation, reliable deployments, and delivering strong user
            experiences
          </Text>
        </Box>

        {/* Quick Stats Column */}
        <Stack spacing={4}>
          <Box
            bg={statBoxBg}
            p={4}
            borderRadius="xl"
            borderWidth="1px"
            borderColor={borderColor}
          >
            <Text fontSize="2xl" fontWeight="bold" color="blue.500">
              Frontend
            </Text>
            <Text fontSize="sm" color={muted}>
              Specialized User Interfaces
            </Text>
          </Box>
          <Box
            bg={statBoxBg}
            p={4}
            borderRadius="xl"
            borderWidth="1px"
            borderColor={borderColor}
          >
            <Text fontSize="2xl" fontWeight="bold" color="blue.500">
              DevOps & Cloud
            </Text>
            <Text fontSize="sm" color={muted}>
              Scalable Deployments
            </Text>
          </Box>
        </Stack>
      </SimpleGrid>

      {/* Skills Header & Filters */}
      <Flex
        direction={{ base: "column", sm: "row" }}
        justify="space-between"
        align={{ base: "flex-start", sm: "center" }}
        mb={6}
        gap={4}
      >
        <Heading color={fontColors.secondary} size="lg">
          Technical Expertise
        </Heading>

        {/* Category Filter Tabs */}
        <Flex wrap="wrap" gap={2}>
          {categories.map((cat) => (
            <Button
              key={cat}
              size="sm"
              onClick={() => setSelectedCategory(cat)}
              bg={selectedCategory === cat ? activeTabBg : inactiveTabBg}
              color={selectedCategory === cat ? "white" : muted}
              borderRadius="full"
              px={4}
              _hover={{ opacity: 0.8 }}
            >
              {cat}
            </Button>
          ))}
        </Flex>
      </Flex>

      {/* Skills Grid */}
      <SimpleGrid
        columns={{
          base: 1,
          sm: 2,
          lg: 3,
        }}
        spacing={6}
      >
        {filteredSkills.map((skill) => (
          <MotionCard
            key={skill.name}
            variants={fadeInUp}
            whileHover={{ y: -4 }}
            transition={{ duration: 0.2 }}
            bg={cardBg}
            variant="outline"
            borderColor={borderColor}
            borderRadius="xl"
            boxShadow="sm"
            overflow="hidden"
          >
            <CardBody>
              <Stack spacing={4}>
                <Flex justify="space-between" align="flex-start">
                  <Box>
                    <Text
                      fontWeight="bold"
                      color={fontColors.secondary}
                      fontSize="md"
                    >
                      {skill.name}
                    </Text>
                    <Badge
                      mt={2}
                      colorScheme="blue"
                      variant="subtle"
                      borderRadius="full"
                      px={2.5}
                      py={0.5}
                      fontSize="0.7em"
                    >
                      {skill.category}
                    </Badge>
                  </Box>
                </Flex>

                <Progress
                  value={skill.level}
                  size="sm"
                  borderRadius="full"
                  hasStripe
                  isAnimated
                  colorScheme="blue"
                />

                <Text fontSize="xs" color={muted} fontWeight="medium">
                  {skill.level}% proficiency
                </Text>
              </Stack>
            </CardBody>
          </MotionCard>
        ))}
      </SimpleGrid>
    </MotionBox>
  );
};

export default About;
