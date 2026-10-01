import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  Image,
  Text,
  Heading,
  SimpleGrid,
  Stack,
  useColorModeValue,
  Flex,
  Badge,
  Divider,
} from "@chakra-ui/react";

import { motion } from "framer-motion";
import { about } from "../../data";
import { fadeInUp, routeAnimation } from "../../animation";
import { fontColors } from "../../theme";

const MotionBox = motion(Box);
const MotionCard = motion(Card);

const Services = () => {
  const cardBg = useColorModeValue("white", "gray.900");
  const borderColor = useColorModeValue("gray.200", "whiteAlpha.200");
  const mutedText = useColorModeValue("gray.600", "gray.400");
  const subtleBg = useColorModeValue("gray.50", "whiteAlpha.100");

  return (
    <MotionBox
      variants={routeAnimation}
      initial="initial"
      animate="animate"
      exit="exit"
      py={{ base: 4, md: 6 }}
    >
      {/* Header */}
      <Box mb={10}>
        <Badge colorScheme="blue" borderRadius="full" px={3} py={1} mb={3}>
          What I Do
        </Badge>

        <Heading
          color={fontColors.secondary}
          fontWeight="extrabold"
          as="h1"
          size="xl"
          mb={3}
        >
          Services
        </Heading>

        <Text color={mutedText} fontSize="md" lineHeight="1.8" maxW="700px">
          I build reliable digital products across frontend development, backend
          engineering, API development, databases, and cloud infrastructure. My
          focus is on creating maintainable solutions that solve real business
          and user problems.
        </Text>
      </Box>

      {/* Services Grid */}
      <SimpleGrid
        columns={{
          base: 1,
          md: 2,
          lg: 3,
        }}
        spacing={{ base: 5, md: 6 }}
        alignItems="stretch"
      >
        {about.map((service, index) => (
          <MotionCard
            key={service.id}
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
            boxShadow="sm"
            overflow="hidden"
            height="100%"
            _hover={{
              borderColor: "blue.400",
              boxShadow: "lg",
            }}
          >
            <CardBody p={{ base: 5, md: 6 }}>
              <Stack spacing={5}>
                {/* Service Icon */}
                <Flex
                  align="center"
                  justify="center"
                  boxSize={12}
                  borderRadius="xl"
                  bg={subtleBg}
                  color="blue.500"
                  flexShrink={0}
                >
                  <Box as={service.Icon} boxSize={6} aria-hidden="true" />
                </Flex>

                {/* Service Title */}
                <Box>
                  <Heading
                    as="h2"
                    size="md"
                    color={fontColors.secondary}
                    mb={3}
                    lineHeight="1.4"
                  >
                    {service.title}
                  </Heading>

                  <Text fontSize="sm" color={mutedText} lineHeight="1.8">
                    {service.about}
                  </Text>
                </Box>
              </Stack>
            </CardBody>

            <CardFooter pt={0} px={{ base: 5, md: 6 }} pb={6}>
              <Badge
                colorScheme="blue"
                variant="subtle"
                borderRadius="full"
                px={3}
                py={1}
                fontSize="xs"
              >
                Professional Service
              </Badge>
            </CardFooter>
          </MotionCard>
        ))}
      </SimpleGrid>

      {/* CTA */}
      <MotionCard
        variants={fadeInUp}
        initial="initial"
        animate="animate"
        mt={{ base: 10, md: 12 }}
        overflow="hidden"
        bg={cardBg}
        borderWidth="1px"
        borderColor={borderColor}
        borderRadius="2xl"
        boxShadow="sm"
        _hover={{
          boxShadow: "lg",
        }}
      >
        <Flex
          direction={{
            base: "column",
            md: "row",
          }}
          align="stretch"
        >
          {/* CTA Image */}
          <Box
            width={{
              base: "100%",
              md: "36%",
            }}
            minH={{
              base: "200px",
              md: "280px",
            }}
            position="relative"
            overflow="hidden"
          >
            <Image
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=80"
              alt="Team collaborating on a software project"
              width="100%"
              height="100%"
              objectFit="cover"
              loading="lazy"
              fallbackSrc="https://placehold.co/1000x600/1e293b/ffffff?text=Let's+Work+Together"
            />
          </Box>

          {/* CTA Content */}
          <Flex
            flex="1"
            direction="column"
            justify="center"
            p={{ base: 6, md: 8 }}
          >
            <Badge
              colorScheme="blue"
              alignSelf="flex-start"
              borderRadius="full"
              px={3}
              py={1}
              mb={4}
            >
              Let's Work Together
            </Badge>

            <Heading
              as="h2"
              size={{ base: "md", md: "lg" }}
              color={fontColors.secondary}
              mb={3}
              lineHeight="1.4"
            >
              Have a project in mind?
            </Heading>

            <Text
              fontSize="sm"
              color={mutedText}
              lineHeight="1.8"
              maxW="600px"
              mb={6}
            >
              I'm available for freelance projects, contract opportunities, and
              software engineering roles. If you have a product, application, or
              technical challenge you'd like to discuss, let's connect.
            </Text>

            <Divider borderColor={borderColor} mb={6} />

            <Button
              as="a"
              href="https://wa.link/zqy9yz"
              target="_blank"
              rel="noopener noreferrer"
              colorScheme="blue"
              size="md"
              borderRadius="lg"
              alignSelf="flex-start"
              px={6}
              _hover={{
                transform: "translateY(-1px)",
                boxShadow: "md",
              }}
              transition="all 0.2s ease"
            >
              Let's Talk
            </Button>
          </Flex>
        </Flex>
      </MotionCard>
    </MotionBox>
  );
};

export default Services;
