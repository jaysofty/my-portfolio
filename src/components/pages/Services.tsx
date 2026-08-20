import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  Image,
  Text,
  Heading,
  List,
  ListIcon,
  SimpleGrid,
  Stack,
  Link,
  useColorModeValue,
} from "@chakra-ui/react";
import ReusableCard from "../ReusableCard";
import { about } from "../../data";
import { fadeInUp, routeAnimation } from "../../animation";
import { motion } from "framer-motion";
import { fontColors } from "../../theme";

const MotionDiv = motion.div;

const Services = () => {
  const cardBg = useColorModeValue("white", "gray.900");
  const borderColor = useColorModeValue("gray.200", "whiteAlpha.200");

  return (
    <MotionDiv
      variants={routeAnimation}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <Heading
        color={fontColors.secondary}
        fontWeight="extrabold"
        as="h1"
        size="xl"
        marginBottom={6}
      >
        Services
      </Heading>

      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 3 }}
        spacing={6}
      >
        {about.map((data) => (
          <MotionDiv key={data.id} variants={fadeInUp}>
            <Box h="full">
              <ReusableCard text={data.about}>
                <Heading size="md" mb={2}>
                  <List>
                    <ListIcon as={data.Icon} boxSize={6} color="blue.500" />
                  </List>
                </Heading>
                <Text fontSize="md" whiteSpace="normal">
                  {data.title}
                </Text>
              </ReusableCard>
            </Box>
          </MotionDiv>
        ))}
      </SimpleGrid>

      {/* Hire Me Banner Card */}
      <Card
        as={motion.div}
        variants={fadeInUp}
        marginTop={8}
        direction={{ base: "column", sm: "row" }}
        overflow="hidden"
        variant="outline"
        bg={cardBg}
        borderColor={borderColor}
        borderRadius="xl"
        boxShadow="sm"
      >
        <Image
          objectFit="cover"
          maxW={{ base: "100%", sm: "240px" }}
          h={{ base: "180px", sm: "auto" }}
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=60"
          alt="Collaboration Workspace"
        />

        <Stack justify="center" p={2} flex="1">
          <CardBody>
            <Heading size="md" mb={2} color={fontColors.secondary}>
              Let's build something amazing together
            </Heading>
            <Text fontSize="sm" color="gray.500">
              I will be delighted to work with you if you'll have me :) Feel free to reach out for contract work or permanent positions.
            </Text>
          </CardBody>

          <CardFooter pt={0}>
            <Button
              as={Link}
              href="https://wa.link/zqy9yz"
              variant="solid"
              colorScheme="blue"
              size="md"
              borderRadius="md"
              isExternal
            >
              Hire Me
            </Button>
          </CardFooter>
        </Stack>
      </Card>
    </MotionDiv>
  );
};

export default Services;