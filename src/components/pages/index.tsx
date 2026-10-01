import {
  Heading,
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
  Divider,
  HStack,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";

import { fontColors } from "../../theme";
import { fadeInUp, routeAnimation } from "../../animation";

const MotionCard = motion(Card);
const MotionBox = motion(Box);

const skills = [
  // Frontend Engineering
  { name: "JavaScript", category: "Frontend", level: "Proficient" },
  { name: "TypeScript", category: "Frontend", level: "Proficient" },
  { name: "React.js", category: "Frontend", level: "Proficient" },
  { name: "Next.js", category: "Frontend", level: "Proficient" },
  { name: "HTML5", category: "Frontend", level: "Proficient" },
  { name: "CSS3", category: "Frontend", level: "Proficient" },
  { name: "Tailwind CSS", category: "Frontend", level: "Proficient" },
  { name: "Chakra UI", category: "Frontend", level: "Working Knowledge" },
  { name: "Redux Toolkit", category: "Frontend", level: "Working Knowledge" },
  { name: "React Query", category: "Frontend", level: "Working Knowledge" },
  { name: "Vite", category: "Frontend", level: "Proficient" },

  // Backend Engineering
  { name: "Node.js", category: "Backend", level: "Proficient" },
  { name: "Express.js", category: "Backend", level: "Proficient" },
  { name: "REST API Development", category: "Backend", level: "Proficient" },
  { name: "API Integration", category: "Backend", level: "Proficient" },
  {
    name: "Authentication & Authorization",
    category: "Backend",
    level: "Working Knowledge",
  },
  { name: "JWT", category: "Backend", level: "Working Knowledge" },
  { name: "Prisma ORM", category: "Backend", level: "Working Knowledge" },
  { name: "Python", category: "Backend", level: "Working Knowledge" },

  // Databases
  { name: "PostgreSQL", category: "Databases", level: "Working Knowledge" },
  { name: "Supabase", category: "Databases", level: "Working Knowledge" },
  { name: "Neon", category: "Databases", level: "Working Knowledge" },
  { name: "SQL", category: "Databases", level: "Working Knowledge" },
  { name: "Vector Databases", category: "Databases", level: "Learning" },
  {
    name: "Database Design",
    category: "Databases",
    level: "Working Knowledge",
  },

  // Cloud & DevOps
  { name: "Docker", category: "Cloud & DevOps", level: "Proficient" },
  { name: "Docker Compose", category: "Cloud & DevOps", level: "Proficient" },
  {
    name: "Microsoft Azure",
    category: "Cloud & DevOps",
    level: "Working Knowledge",
  },
  { name: "Terraform", category: "Cloud & DevOps", level: "Working Knowledge" },
  { name: "GitHub Actions", category: "Cloud & DevOps", level: "Proficient" },
  { name: "CI/CD Pipelines", category: "Cloud & DevOps", level: "Proficient" },
  { name: "Nginx", category: "Cloud & DevOps", level: "Working Knowledge" },
  {
    name: "Linux & Bash",
    category: "Cloud & DevOps",
    level: "Working Knowledge",
  },
  { name: "AWS Fundamentals", category: "Cloud & DevOps", level: "Learning" },
  {
    name: "Cloud Networking",
    category: "Cloud & DevOps",
    level: "Working Knowledge",
  },

  // AI Engineering
  {
    name: "LLM API Integration",
    category: "AI Engineering",
    level: "Working Knowledge",
  },
  {
    name: "Retrieval-Augmented Generation",
    category: "AI Engineering",
    level: "Working Knowledge",
  },
  {
    name: "Embeddings",
    category: "AI Engineering",
    level: "Working Knowledge",
  },
  { name: "Vector Search", category: "AI Engineering", level: "Learning" },

  // Tools & Other Skills
  { name: "Git", category: "Tools", level: "Proficient" },
  { name: "GitHub", category: "Tools", level: "Proficient" },
  { name: "Postman", category: "Tools", level: "Proficient" },
  { name: "Vercel", category: "Tools", level: "Working Knowledge" },
  { name: "Render", category: "Tools", level: "Working Knowledge" },
  { name: "Graphics Design", category: "Design", level: "Proficient" },
  { name: "Desktop Publishing", category: "Design", level: "Proficient" },
];

const categories = [
  "All",
  "Frontend",
  "Backend",
  "Databases",
  "Cloud & DevOps",
  "AI Engineering",
  "Tools",
  "Design",
];

const focusAreas = [
  {
    title: "Frontend Engineering",
    description:
      "Responsive interfaces, reusable components, and accessible user experiences.",
  },
  {
    title: "Backend Engineering",
    description:
      "REST APIs, application architecture, authentication, and database integration.",
  },
  {
    title: "Cloud & DevOps",
    description:
      "Containerization, infrastructure automation, CI/CD, and cloud deployments.",
  },
];

const About = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const cardBg = useColorModeValue("white", "gray.900");
  const borderColor = useColorModeValue("gray.200", "whiteAlpha.200");
  const muted = useColorModeValue("gray.600", "gray.400");
  const statBoxBg = useColorModeValue("gray.50", "whiteAlpha.50");
  const activeTabBg = useColorModeValue("blue.600", "blue.500");
  const inactiveTabBg = useColorModeValue("gray.100", "whiteAlpha.100");
  const skillBg = useColorModeValue("gray.50", "whiteAlpha.100");

  const filteredSkills = useMemo(() => {
    if (selectedCategory === "All") {
      return skills;
    }

    return skills.filter((skill) => skill.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <MotionBox
      variants={routeAnimation}
      initial="initial"
      animate="animate"
      exit="exit"
      py={{ base: 4, md: 6 }}
    >
      {/* Page Header */}
      <Box mb={8}>
        <Heading
          color={fontColors.secondary}
          size="xl"
          fontWeight="extrabold"
          mb={3}
        >
          About Me
        </Heading>

        <Text color={muted} fontSize="md">
          My background, engineering interests, and technical capabilities.
        </Text>
      </Box>

      {/* Introduction */}
      <SimpleGrid columns={{ base: 1, lg: 3 }} spacing={6} mb={12}>
        <Box
          gridColumn={{ base: "span 1", lg: "span 2" }}
          bg={cardBg}
          p={{ base: 5, md: 8 }}
          borderRadius="2xl"
          borderWidth="1px"
          borderColor={borderColor}
          boxShadow="sm"
          display="flex"
          flexDirection="column"
          justifyContent="center"
        >
          <Badge
            colorScheme="blue"
            borderRadius="full"
            px={3}
            py={1}
            alignSelf="flex-start"
            mb={4}
          >
            Software Engineer
          </Badge>

          <Heading
            color={fontColors.secondary}
            fontSize={{ base: "xl", md: "2xl" }}
            lineHeight="1.4"
            mb={4}
          >
            Building Digital Products, APIs & Cloud Infrastructure
          </Heading>

          <Text color={muted} lineHeight="1.9" fontSize="md" mb={4}>
            I am a Software Engineer with hands-on experience in frontend
            development, backend engineering, API integration, and cloud
            infrastructure. I build responsive web applications, develop RESTful
            APIs, design database-driven systems, and automate application
            deployment using modern development practices.
          </Text>

          <Text color={muted} lineHeight="1.9" fontSize="md" mb={4}>
            My technical toolkit includes React, Next.js, TypeScript, Node.js,
            Express.js, PostgreSQL, Prisma, Docker, GitHub Actions, Terraform,
            and Microsoft Azure. I also explore AI-powered applications, LLM
            integrations, and Retrieval-Augmented Generation (RAG).
          </Text>

          <Text color={muted} lineHeight="1.9" fontSize="md">
            I am currently pursuing a B.Sc. in Information Technology at the
            National Open University of Nigeria (NOUN), with academic interests
            in Software Engineering, Database Management, and Network
            Architecture. I continuously strengthen my engineering foundation
            through practical projects, technical learning, and problem-solving.
          </Text>
        </Box>

        {/* Professional Highlights */}
        <Stack spacing={4}>
          <Box
            bg={statBoxBg}
            p={5}
            borderRadius="xl"
            borderWidth="1px"
            borderColor={borderColor}
          >
            <Text fontSize="sm" color={muted} mb={2}>
              Engineering Focus
            </Text>

            <Heading fontSize="xl" color="blue.500" mb={2}>
              Full-Stack Development
            </Heading>

            <Text fontSize="sm" color={muted} lineHeight="1.7">
              Building complete web solutions from user interfaces to backend
              services and data persistence.
            </Text>
          </Box>

          <Box
            bg={statBoxBg}
            p={5}
            borderRadius="xl"
            borderWidth="1px"
            borderColor={borderColor}
          >
            <Text fontSize="sm" color={muted} mb={2}>
              Infrastructure
            </Text>

            <Heading fontSize="xl" color="blue.500" mb={2}>
              Cloud & DevOps
            </Heading>

            <Text fontSize="sm" color={muted} lineHeight="1.7">
              Containerized applications, CI/CD workflows, infrastructure as
              code, and cloud deployment.
            </Text>
          </Box>

          <Box
            bg={statBoxBg}
            p={5}
            borderRadius="xl"
            borderWidth="1px"
            borderColor={borderColor}
          >
            <Text fontSize="sm" color={muted} mb={2}>
              Continuous Learning
            </Text>

            <Heading fontSize="xl" color="blue.500" mb={2}>
              AI Engineering
            </Heading>

            <Text fontSize="sm" color={muted} lineHeight="1.7">
              Exploring LLM-powered applications, embeddings, vector search, and
              RAG architectures.
            </Text>
          </Box>
        </Stack>
      </SimpleGrid>

      {/* Core Engineering Areas */}
      <Box mb={12}>
        <Heading color={fontColors.secondary} size="lg" mb={2}>
          Core Engineering Areas
        </Heading>

        <Text color={muted} mb={6}>
          The areas I work across when designing and developing software.
        </Text>

        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={5}>
          {focusAreas.map((area, index) => (
            <MotionCard
              key={area.title}
              variants={fadeInUp}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              bg={cardBg}
              borderWidth="1px"
              borderColor={borderColor}
              borderRadius="xl"
              boxShadow="sm"
            >
              <CardBody p={6}>
                <Flex
                  align="center"
                  justify="center"
                  boxSize={10}
                  bg={statBoxBg}
                  color="blue.500"
                  borderRadius="lg"
                  fontWeight="bold"
                  mb={4}
                >
                  0{index + 1}
                </Flex>

                <Heading fontSize="lg" color={fontColors.secondary} mb={3}>
                  {area.title}
                </Heading>

                <Text fontSize="sm" color={muted} lineHeight="1.8">
                  {area.description}
                </Text>
              </CardBody>
            </MotionCard>
          ))}
        </SimpleGrid>
      </Box>

      <Divider borderColor={borderColor} mb={8} />

      {/* Technical Skills */}
      <Box>
        <Flex
          direction={{ base: "column", lg: "row" }}
          justify="space-between"
          align={{ base: "flex-start", lg: "center" }}
          mb={6}
          gap={4}
        >
          <Box>
            <Heading color={fontColors.secondary} size="lg" mb={2}>
              Technical Skills
            </Heading>

            <Text color={muted} fontSize="sm">
              Technologies, frameworks, and tools I work with.
            </Text>
          </Box>

          <Badge colorScheme="blue" borderRadius="full" px={3} py={2}>
            {filteredSkills.length} Skills
          </Badge>
        </Flex>

        {/* Category Filters */}
        <Wrap spacing={2} mb={8}>
          {categories.map((category) => {
            const isActive = selectedCategory === category;

            return (
              <WrapItem key={category}>
                <Button
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  bg={isActive ? activeTabBg : inactiveTabBg}
                  color={isActive ? "white" : muted}
                  borderRadius="full"
                  px={4}
                  variant="solid"
                  aria-pressed={isActive}
                  _hover={{
                    bg: isActive ? activeTabBg : inactiveTabBg,
                    opacity: 0.8,
                  }}
                  _focusVisible={{
                    outline: "2px solid",
                    outlineColor: "blue.400",
                    outlineOffset: "2px",
                  }}
                >
                  {category}
                </Button>
              </WrapItem>
            );
          })}
        </Wrap>

        {/* Skills Grid */}
        <SimpleGrid
          columns={{
            base: 1,
            sm: 2,
            lg: 3,
          }}
          spacing={4}
        >
          {filteredSkills.map((skill, index) => (
            <MotionCard
              key={skill.name}
              variants={fadeInUp}
              initial="initial"
              animate="animate"
              whileHover={{ y: -3 }}
              transition={{
                duration: 0.2,
                delay: Math.min(index * 0.025, 0.2),
              }}
              bg={cardBg}
              variant="outline"
              borderColor={borderColor}
              borderRadius="xl"
              boxShadow="sm"
              overflow="hidden"
            >
              <CardBody p={5}>
                <Stack spacing={4}>
                  <Flex justify="space-between" align="center" gap={2}>
                    <Text
                      fontWeight="semibold"
                      color={fontColors.secondary}
                      fontSize="sm"
                    >
                      {skill.name}
                    </Text>

                    <Badge
                      colorScheme={
                        skill.level === "Proficient"
                          ? "blue"
                          : skill.level === "Learning"
                            ? "purple"
                            : "gray"
                      }
                      variant="subtle"
                      borderRadius="full"
                      fontSize="xs"
                      flexShrink={0}
                    >
                      {skill.level}
                    </Badge>
                  </Flex>

                  <Box bg={skillBg} px={3} py={2} borderRadius="md">
                    <Text fontSize="xs" color={muted} fontWeight="medium">
                      {skill.category}
                    </Text>
                  </Box>
                </Stack>
              </CardBody>
            </MotionCard>
          ))}
        </SimpleGrid>

        {filteredSkills.length === 0 && (
          <Box textAlign="center" py={12} color={muted}>
            <Text>No skills found in this category.</Text>
          </Box>
        )}
      </Box>
    </MotionBox>
  );
};

export default About;
