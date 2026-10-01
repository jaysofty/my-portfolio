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
  Flex,
  HStack,
  Divider,
  Button,
  IconButton,
  Select,
  useColorModeValue,
} from "@chakra-ui/react";

import { motion } from "framer-motion";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { useEffect, useMemo, useState } from "react";

import { routeAnimation, fadeInUp } from "../../animation";
import { fontColors } from "../../theme";
import { projects } from "../../data";

type Project = {
  id: string | number;
  name: string;
  description: string;
  image_path?: string;
  category?: string;
  live_url?: string;
  github_url?: string;
  tech?: string[];
};

const MotionBox = motion(Box);
const MotionCard = motion(Card);

const DEFAULT_PROJECTS_PER_PAGE = 6;

const Projects = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [projectsPerPage, setProjectsPerPage] = useState(
    DEFAULT_PROJECTS_PER_PAGE,
  );

  const cardBg = useColorModeValue("white", "gray.900");
  const borderColor = useColorModeValue("gray.200", "whiteAlpha.200");
  const textMuted = useColorModeValue("gray.600", "gray.400");
  const imageBg = useColorModeValue("gray.100", "gray.800");
  const tagBg = useColorModeValue("gray.50", "whiteAlpha.100");
  const dividerColor = useColorModeValue("gray.200", "whiteAlpha.200");
  const paginationBg = useColorModeValue("gray.50", "whiteAlpha.100");

  const projectList = projects as Project[];

  /*
   * Calculate pagination information.
   */
  const totalProjects = projectList.length;

  const totalPages = Math.max(1, Math.ceil(totalProjects / projectsPerPage));

  /*
   * Keep currentPage valid if the number of projects changes.
   */
  useEffect(() => {
    setCurrentPage((page) => Math.min(page, totalPages));
  }, [totalPages]);

  /*
   * Reset to page 1 when the user changes the number
   * of projects displayed per page.
   */
  const handleProjectsPerPageChange = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    setProjectsPerPage(Number(event.target.value));
    setCurrentPage(1);
  };

  /*
   * Calculate which projects should be displayed.
   */
  const paginatedProjects = useMemo(() => {
    const startIndex = (currentPage - 1) * projectsPerPage;
    const endIndex = startIndex + projectsPerPage;

    return projectList.slice(startIndex, endIndex);
  }, [currentPage, projectsPerPage, projectList]);

  /*
   * Calculate project range shown on the current page.
   */
  const startProject =
    totalProjects === 0 ? 0 : (currentPage - 1) * projectsPerPage + 1;

  const endProject = Math.min(currentPage * projectsPerPage, totalProjects);

  /*
   * Generate pagination numbers.
   *
   * Example:
   * 1 2 3 4 5
   *
   * For larger collections this can later be replaced with
   * a condensed version such as:
   * 1 ... 4 5 6 ... 20
   */
  const pageNumbers = Array.from(
    { length: totalPages },
    (_, index) => index + 1,
  );

  return (
    <MotionBox
      variants={routeAnimation}
      initial="initial"
      animate="animate"
      exit="exit"
      py={{ base: 4, md: 6 }}
    >
      {/* Header */}
      <Flex
        direction={{ base: "column", md: "row" }}
        justify="space-between"
        align={{ base: "flex-start", md: "flex-end" }}
        gap={4}
        mb={10}
      >
        <Box>
          <Badge colorScheme="blue" borderRadius="full" px={3} py={1} mb={3}>
            Selected Work
          </Badge>

          <Heading
            as="h1"
            size="xl"
            fontWeight="extrabold"
            color={fontColors.secondary}
            mb={3}
          >
            Projects
          </Heading>

          <Text color={textMuted} fontSize="md" lineHeight="1.8" maxW="650px">
            A collection of applications and engineering projects demonstrating
            my experience in frontend development, backend engineering, APIs,
            databases, AI integration, and cloud infrastructure.
          </Text>
        </Box>

        <Badge
          colorScheme="blue"
          variant="subtle"
          borderRadius="full"
          px={4}
          py={2}
          fontSize="sm"
        >
          {totalProjects} {totalProjects === 1 ? "Project" : "Projects"}
        </Badge>
      </Flex>

      <Divider borderColor={dividerColor} mb={8} />

      {/* Projects Grid */}
      {projectList.length > 0 ? (
        <>
          <SimpleGrid
            columns={{
              base: 1,
              md: 2,
            }}
            spacing={{ base: 5, md: 6 }}
            alignItems="stretch"
          >
            {paginatedProjects.map((project, index) => (
              <MotionCard
                key={project.id}
                variants={fadeInUp}
                initial="initial"
                animate="animate"
                whileHover={{ y: -5 }}
                transition={{
                  duration: 0.25,
                  delay: Math.min(index * 0.06, 0.3),
                }}
                bg={cardBg}
                borderWidth="1px"
                borderColor={borderColor}
                borderRadius="2xl"
                overflow="hidden"
                boxShadow="sm"
                display="flex"
                flexDirection="column"
                height="100%"
                _hover={{
                  boxShadow: "lg",
                  borderColor: "blue.400",
                }}
              >
                {/* Project Image */}
                <Box
                  role="group"
                  position="relative"
                  overflow="hidden"
                  bg={imageBg}
                  aspectRatio={16 / 9}
                >
                  {project.image_path ? (
                    <Image
                      src={project.image_path}
                      alt={`${project.name} project preview`}
                      width="100%"
                      height="100%"
                      objectFit="cover"
                      loading="lazy"
                      fallbackSrc="https://placehold.co/800x450/1e293b/ffffff?text=Project+Preview"
                      transition="transform 0.4s ease"
                      _groupHover={{
                        transform: "scale(1.04)",
                      }}
                    />
                  ) : (
                    <Flex
                      width="100%"
                      height="100%"
                      align="center"
                      justify="center"
                      color={textMuted}
                    >
                      <Text fontSize="sm">Project Preview</Text>
                    </Flex>
                  )}

                  {project.category && (
                    <Badge
                      position="absolute"
                      top={4}
                      left={4}
                      colorScheme="blue"
                      bg="blue.600"
                      color="white"
                      borderRadius="full"
                      px={3}
                      py={1}
                      boxShadow="md"
                    >
                      {project.category}
                    </Badge>
                  )}
                </Box>

                {/* Project Content */}
                <CardBody p={{ base: 5, md: 6 }} flex="1">
                  <Stack spacing={4}>
                    <Box>
                      <Heading
                        as="h2"
                        size="md"
                        color={fontColors.secondary}
                        mb={3}
                        lineHeight="1.4"
                      >
                        {project.name}
                      </Heading>

                      <Text fontSize="sm" color={textMuted} lineHeight="1.8">
                        {project.description}
                      </Text>
                    </Box>

                    {/* Technology Stack */}
                    {project.tech && project.tech.length > 0 && (
                      <Box>
                        <Text
                          fontSize="xs"
                          fontWeight="bold"
                          color={textMuted}
                          textTransform="uppercase"
                          letterSpacing="wider"
                          mb={3}
                        >
                          Technologies
                        </Text>

                        <Flex wrap="wrap" gap={2}>
                          {project.tech.map((technology) => (
                            <Badge
                              key={technology}
                              colorScheme="blue"
                              variant="subtle"
                              borderRadius="md"
                              px={2.5}
                              py={1.5}
                              fontSize="xs"
                              fontWeight="medium"
                              bg={tagBg}
                            >
                              {technology}
                            </Badge>
                          ))}
                        </Flex>
                      </Box>
                    )}
                  </Stack>
                </CardBody>

                {/* Project Actions */}
                <CardFooter px={{ base: 5, md: 6 }} pt={0} pb={5}>
                  <Flex
                    width="100%"
                    align="center"
                    justify="space-between"
                    gap={3}
                    flexWrap="wrap"
                  >
                    <HStack spacing={4}>
                      {project.live_url && (
                        <Link
                          href={project.live_url}
                          isExternal
                          rel="noopener noreferrer"
                          color="blue.500"
                          fontSize="sm"
                          fontWeight="semibold"
                          aria-label={`View live demo of ${project.name}`}
                          _hover={{
                            color: "blue.400",
                            textDecoration: "underline",
                          }}
                          _focusVisible={{
                            outline: "2px solid",
                            outlineColor: "blue.400",
                            outlineOffset: "3px",
                          }}
                        >
                          Live Demo
                          <Box as="span" ml={1}>
                            ↗
                          </Box>
                        </Link>
                      )}

                      {project.github_url && (
                        <Link
                          href={project.github_url}
                          isExternal
                          rel="noopener noreferrer"
                          color={textMuted}
                          fontSize="sm"
                          fontWeight="semibold"
                          aria-label={`View source code for ${project.name}`}
                          _hover={{
                            color: fontColors.secondary,
                            textDecoration: "underline",
                          }}
                          _focusVisible={{
                            outline: "2px solid",
                            outlineColor: "blue.400",
                            outlineOffset: "3px",
                          }}
                        >
                          Source Code
                          <Box as="span" ml={1}>
                            ↗
                          </Box>
                        </Link>
                      )}
                    </HStack>
                  </Flex>
                </CardFooter>
              </MotionCard>
            ))}
          </SimpleGrid>

          {/* Pagination */}
          {totalPages > 1 && (
            <Box mt={10}>
              <Flex
                direction={{ base: "column", md: "row" }}
                justify="space-between"
                align={{ base: "stretch", md: "center" }}
                gap={5}
                p={4}
                bg={paginationBg}
                borderWidth="1px"
                borderColor={borderColor}
                borderRadius="xl"
              >
                {/* Results information */}
                <Text
                  fontSize="sm"
                  color={textMuted}
                  textAlign={{ base: "center", md: "left" }}
                >
                  Showing{" "}
                  <Text
                    as="span"
                    fontWeight="bold"
                    color={fontColors.secondary}
                  >
                    {startProject}–{endProject}
                  </Text>{" "}
                  of{" "}
                  <Text
                    as="span"
                    fontWeight="bold"
                    color={fontColors.secondary}
                  >
                    {totalProjects}
                  </Text>{" "}
                  projects
                </Text>

                {/* Pagination controls */}
                <HStack
                  spacing={1}
                  justify={{ base: "center", md: "flex-end" }}
                >
                  <IconButton
                    aria-label="Previous page"
                    icon={<ChevronLeftIcon boxSize={5} />}
                    size="sm"
                    variant="ghost"
                    isDisabled={currentPage === 1}
                    onClick={() =>
                      setCurrentPage((page) => Math.max(1, page - 1))
                    }
                    _focusVisible={{
                      outline: "2px solid",
                      outlineColor: "blue.400",
                      outlineOffset: "2px",
                    }}
                  />

                  {pageNumbers.map((page) => (
                    <Button
                      key={page}
                      size="sm"
                      minW="36px"
                      variant={currentPage === page ? "solid" : "ghost"}
                      colorScheme={currentPage === page ? "blue" : undefined}
                      onClick={() => setCurrentPage(page)}
                      aria-label={`Go to page ${page}`}
                      aria-current={currentPage === page ? "page" : undefined}
                      _focusVisible={{
                        outline: "2px solid",
                        outlineColor: "blue.400",
                        outlineOffset: "2px",
                      }}
                    >
                      {page}
                    </Button>
                  ))}

                  <IconButton
                    aria-label="Next page"
                    icon={<ChevronRightIcon boxSize={5} />}
                    size="sm"
                    variant="ghost"
                    isDisabled={currentPage === totalPages}
                    onClick={() =>
                      setCurrentPage((page) => Math.min(totalPages, page + 1))
                    }
                    _focusVisible={{
                      outline: "2px solid",
                      outlineColor: "blue.400",
                      outlineOffset: "2px",
                    }}
                  />
                </HStack>

                {/* Projects per page */}
                <Flex
                  align="center"
                  gap={2}
                  justify={{ base: "center", md: "flex-end" }}
                >
                  <Text fontSize="sm" color={textMuted} whiteSpace="nowrap">
                    Show
                  </Text>

                  <Select
                    value={projectsPerPage}
                    onChange={handleProjectsPerPageChange}
                    size="sm"
                    width="80px"
                    aria-label="Projects per page"
                  >
                    <option value={4}>4</option>
                    <option value={6}>6</option>
                    <option value={8}>8</option>
                    <option value={12}>12</option>
                  </Select>
                </Flex>
              </Flex>
            </Box>
          )}
        </>
      ) : (
        /* Empty State */
        <Box
          textAlign="center"
          py={16}
          px={6}
          bg={cardBg}
          borderWidth="1px"
          borderColor={borderColor}
          borderRadius="2xl"
        >
          <Heading size="md" color={fontColors.secondary} mb={3}>
            Projects Coming Soon
          </Heading>

          <Text color={textMuted} fontSize="sm">
            My projects will be displayed here shortly.
          </Text>
        </Box>
      )}
    </MotionBox>
  );
};

export default Projects;
