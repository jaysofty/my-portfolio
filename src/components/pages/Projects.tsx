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
  const cardBg = useColorModeValue("white", "gray.900");
  const borderColor = useColorModeValue("gray.200", "whiteAlpha.200");
  const textMuted = useColorModeValue("gray.600", "gray.400");

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
        as="h1"
        size="xl"
        fontWeight="extrabold"
        color={fontColors.secondary}
        mb={8}
      >
        Projects
      </Heading>

      {/* Grid */}
      <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={8}>
        {projects.map((project: Project) => (
          <MotionCard
            key={project.id}
            variants={fadeInUp}
            whileHover={{ y: -4 }}
            transition={{ duration: 0.2 }}
            bg={cardBg}
            variant="outline"
            borderColor={borderColor}
            borderRadius="xl"
            overflow="hidden"
            boxShadow="sm"
            display="flex"
            flexDirection={{ base: "column", md: "row" }}
          >
            {/* Image Container */}
            <Box w={{ base: "100%", md: "40%" }} overflow="hidden" position="relative">
              <Image
                src={project.image_path}
                alt={project.name}
                w="100%"
                h={{ base: "200px", md: "100%" }}
                objectFit="cover"
                transition="transform 0.3s ease"
                _hover={{ transform: "scale(1.05)" }}
              />
            </Box>

            {/* Content Container */}
            <Box flex="1" display="flex" flexDirection="column" justifyContent="space-between">
              <CardBody pb={2}>
                <Stack spacing={3}>
                  <Heading size="md" color={fontColors.secondary}>
                    {project.name}
                  </Heading>
                  <Text fontSize="sm" color={textMuted} noOfLines={3}>
                    {project.description}
                  </Text>

                  {/* Tech stack tags */}
                  {project.tech?.length && (
                    <Stack direction="row" spacing={1.5} wrap="wrap" pt={1}>
                      {project.tech.map((t) => (
                        <Badge key={t} colorScheme="blue" variant="subtle" fontSize="0.7em" borderRadius="full" px={2.5} py={0.5}>
                          {t}
                        </Badge>
                      ))}
                    </Stack>
                  )}
                </Stack>
              </CardBody>

              <CardFooter pt={0} pb={4}>
                <Stack direction="row" spacing={4}>
                  {project.live_url && (
                    <Link
                      href={project.live_url}
                      isExternal
                      color="blue.500"
                      fontSize="sm"
                      fontWeight="semibold"
                      _hover={{ textDecoration: "underline" }}
                    >
                      Live Demo &rarr;
                    </Link>
                  )}
                  {project.github_url && (
                    <Link
                      href={project.github_url}
                      isExternal
                      color="gray.500"
                      fontSize="sm"
                      fontWeight="semibold"
                      _hover={{ textDecoration: "underline" }}
                    >
                      GitHub &rarr;
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