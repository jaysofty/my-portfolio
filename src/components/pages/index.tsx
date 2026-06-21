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
} from "@chakra-ui/react";

import { motion } from "framer-motion";
import ExpandableText from "../ExpandableText";
import { fontColors } from "../../theme";
import { fadeInUp, routeAnimation } from "../../animation";


const MotionCard = motion(Card);


const skills = [
  {
    name: "JavaScript",
    level: 80,
    category: "Frontend",
  },
  {
    name: "React",
    level: 90,
    category: "Frontend",
  },
  {
    name: "Next.js",
    level: 85,
    category: "Frontend",
  },
  {
    name: "TypeScript",
    level: 75,
    category: "Frontend",
  },
  {
    name: "Redux.js",
    level: 80,
    category: "Frontend",
  },
  {
    name: "Vite",
    level: 85,
    category: "Frontend Tooling",
  },


  {
    name: "HTML",
    level: 95,
    category: "Frontend",
  },
  {
    name: "CSS",
    level: 85,
    category: "Frontend",
  },


  {
    name: "Cloud / DevOps",
    level: 70,
    category: "Cloud",
  },

  {
    name: "Python",
    level: 65,
    category: "Programming",
  },

  {
    name: "Blockchain",
    level: 60,
    category: "Emerging Tech",
  },


  {
    name: "Web Graphics",
    level: 80,
    category: "Design",
  },

  {
    name: "Desktop Publishing",
    level: 85,
    category: "Design",
  },

  {
    name: "Git",
    level: 85,
    category: "Tools",
  },

  {
    name: "Postman",
    level: 80,
    category: "Tools",
  },
  {
    name: "Graphics Design",
    level: 89,
    category: "Tools",
  },
];



const About = () => {

  const cardBg = useColorModeValue(
    "white",
    "gray.800"
  );

  const muted = useColorModeValue(
    "gray.600",
    "gray.300"
  );


  return (

    <Box
      as={motion.div}
      variants={routeAnimation}
      initial="initial"
      animate="animate"
      exit="exit"
      py={6}
    >


      {/* About */}
      <Heading
        color={fontColors.secondary}
        size="xl"
        fontWeight="extrabold"
        mb={5}
      >
        About Me
      </Heading>



      <ExpandableText color={muted}>

        I’m a web developer who enjoys creating modern,
        responsive and user-focused digital experiences.

        I spend my time exploring technologies like React,
        JavaScript, TypeScript and cloud technologies.

        I enjoy solving problems, improving user experiences
        and continuously learning new tools that help me build
        better products.

      </ExpandableText>



      {/* Skills */}

      <Heading
        color={fontColors.secondary}
        size="lg"
        mt={12}
        mb={6}
      >
        Skills
      </Heading>



      <SimpleGrid
        columns={{
          base:1,
          sm:2,
          lg:3
        }}
        spacing={6}
      >


        {skills.map((skill)=> (

          <MotionCard

            key={skill.name}

            variants={fadeInUp}

            whileHover={{
              y:-5,
              transition:{
                duration:0.2
              }
            }}

            bg={cardBg}

            borderRadius="xl"

            boxShadow="md"

            overflow="hidden"

          >


            <CardBody>


              <Stack spacing={4}>


                <Box>


                  <Text
                    fontWeight="bold"
                    color={fontColors.secondary}
                  >

                    {skill.name}

                  </Text>


                  <Badge
                    mt={2}
                    colorScheme="purple"
                  >

                    {skill.category}

                  </Badge>


                </Box>



                <Progress

                  value={skill.level}

                  size="sm"

                  borderRadius="full"

                  hasStripe

                  isAnimated

                  colorScheme="purple"

                />


                <Text
                  fontSize="sm"
                  color={muted}
                >

                  {skill.level}% proficiency

                </Text>


              </Stack>


            </CardBody>


          </MotionCard>

        ))}



      </SimpleGrid>


    </Box>

  );
};



export default About;