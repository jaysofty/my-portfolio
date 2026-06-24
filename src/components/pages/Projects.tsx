import {
  Box,
  Heading,
  SimpleGrid,
  Text,
  Image,
  Card,
  CardBody,
  CardFooter,
  Stack,
  Badge,
  Link,
  useColorModeValue,
} from "@chakra-ui/react";

import { motion } from "framer-motion";
import { routeAnimation, fadeInUp } from "../../animation";
import { fontColors } from "../../theme";
import { projects } from "../../data";

type Project = {
  id: string | number;
  name: string;
  description: string;
  image_path: string;
  category?: string;
  live_url?: string;
  github_url?: string;
  tech?: string[];
};

const MotionBox = motion(Box);
const MotionCard = motion(Card);

const Projects = () => {
  const cardBg = useColorModeValue("white", "gray.800");
  const textMuted = useColorModeValue("gray.600", "gray.400");

  return (
    <MotionBox
      variants={routeAnimation}
      initial="initial"
      animate="animate"
      exit="exit"
      px={{ base: 4, md: 12 }}
      py={8}
    >
      {/* Header */}
      <Heading
        as="h1"
        size="xl"
        fontWeight="extrabold"
        color={fontColors.secondary}
        mb={8}
      >
        Projects
      </Heading>

      {/* Grid */}
      <SimpleGrid columns={{ base: 1, lg: 2 }} // 1 column on mobile, 2 columns on large screens
  spacing={8}>
        {projects.map((project: Project) => (
          <MotionCard
            key={project.id}
            variants={fadeInUp}
            whileHover={{ y: -6, transition: { duration: 0.2 } }}
            bg={cardBg}
            borderRadius="xl"
            overflow="hidden"
            borderWidth="1px"
            boxShadow="md"
            // 1. Change to flex-row to put image and content side-by-side
            display="flex"
            flexDirection={{ base: "column", md: "row" }} // Stack on mobile, row on tablet+
          >
            {/* Image: Fixed width on desktop, full width on mobile */}
            <Box w={{ base: "100%", md: "35%" }} overflow="hidden" aspectRatio={{ base: 16/9, md: "auto" }}>
              <Image
                src={project.image_path}
                alt={project.name}
                w="100%"
                h={{ base: "200px", md: "100%" }} // Taller on mobile, full height on desktop
                objectFit="cover"
                transition="0.3s ease"
                _hover={{ transform: "scale(1.05)" }}
              />
            </Box>

            {/* Content: Flex-grow to fill the remaining space */}
            <Box flex="1" display="flex" flexDirection="column">
              <CardBody>
                <Stack spacing={3}>
                  <Heading size="md">{project.name}</Heading>
                  <Text fontSize="sm" color={textMuted} noOfLines={3}>
                    {project.description}
                  </Text>

                  {/* Tech stack */}
                  {project.tech?.length && (
                    <Stack direction="row" spacing={2} wrap="wrap">
                      {project.tech.map((t) => (
                        <Badge key={t} colorScheme="purple" fontSize="0.7em">
                          {t}
                        </Badge>
                      ))}
                    </Stack>
                  )}
                </Stack>
              </CardBody>

              <CardFooter pt={0}>
                <Stack direction="row" spacing={4}>
                  {project.live_url && (
                    <Link
                      href={project.live_url}
                      isExternal
                      color="purple.400"
                      fontSize="sm"
                    >
                      Live Demo →
                    </Link>
                  )}
                  {project.github_url && (
                    <Link
                      href={project.github_url}
                      isExternal
                      color="gray.500"
                      fontSize="sm"
                    >
                      GitHub →
                    </Link>
                  )}
                </Stack>
              </CardFooter>
            </Box>
          </MotionCard>
        ))}
      </SimpleGrid>
    </MotionBox>
  );
};

export default Projects;
