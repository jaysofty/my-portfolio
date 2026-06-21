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
  link?: string;
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
      <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={8}>
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
          >
            {/* Image */}
            <Box overflow="hidden">
              <Image
                src={project.image_path}
                alt={project.name}
                w="100%"
                h="180px"
                objectFit="cover"
                transition="0.3s ease"
                _hover={{ transform: "scale(1.05)" }}
              />
            </Box>

            {/* Content */}
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

            {/* Footer */}
            {project.link && (
              <CardFooter pt={0}>
                <Link
                  href={project.link}
                  isExternal
                  fontSize="sm"
                  fontWeight="medium"
                  color="purple.400"
                >
                  View Project →
                </Link>
              </CardFooter>
            )}
          </MotionCard>
        ))}
      </SimpleGrid>
    </MotionBox>
  );
};

export default Projects;