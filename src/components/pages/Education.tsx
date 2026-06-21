import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Heading,
  Text,
  Stack,
  Badge,
  useColorModeValue,
} from "@chakra-ui/react";

import { motion } from "framer-motion";
import { fontColors } from "../../theme";
import { routeAnimation, fadeInUp } from "../../animation";


const MotionBox = motion(Box);

const Education = () => {
  const cardBg = useColorModeValue("white", "gray.800");
  const borderColor = useColorModeValue("gray.200", "gray.700");
  const textColor = useColorModeValue("gray.600", "gray.300");


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
      Professional Course
      </Heading>


      <Accordion
        allowToggle
        border="none"
      >

        <AccordionItem
          border="none"
        >

          {({ isExpanded }) => (
            <MotionBox
              variants={fadeInUp}
              bg={cardBg}
              borderWidth="1px"
              borderColor={borderColor}
              borderRadius="xl"
              overflow="hidden"
              boxShadow="md"
              transition="0.3s"
              _hover={{
                boxShadow: "lg",
              }}
            >

              {/* Header */}
              <AccordionButton
                py={5}
                px={6}
                _hover={{
                  bg: "transparent",
                }}
              >

                <Box flex="1" textAlign="left">

                  <Heading
                    size="md"
                    color={fontColors.secondary}
                  >
                    Advanced Diploma In Software Engineering
                  </Heading>


                  <Stack
                    direction={{base:"column", sm:"row"}}
                    mt={2}
                    spacing={3}
                  >

                    <Badge
                      colorScheme="purple"
                    >
                      Software Engineering
                    </Badge>


                    <Text
                      fontSize="sm"
                      color={textColor}
                    >
                      Aptech E-Learning
                    </Text>

                  </Stack>

                </Box>


                <AccordionIcon
                  fontSize="24px"
                  color={fontColors.secondary}
                />

              </AccordionButton>


              {/* Content */}
              <AccordionPanel
                px={6}
                pb={6}
              >

                <Text
                  lineHeight="1.8"
                  color={textColor}
                  fontSize="md"
                >

                  I started my career at Aptech E-Learning.
                  It was a life-changing experience because it exposed me
                  to concepts I never knew existed.

                  <br />
                  <br />

                  I studied Advanced Diploma in Software Engineering,
                  where I discovered my passion for design and web development.
                  This experience accelerated my journey as a Frontend Developer
                  and helped me develop stronger problem-solving and logical
                  thinking skills.

                </Text>


              </AccordionPanel>

            </MotionBox>
          )}

        </AccordionItem>

      </Accordion>


    </MotionBox>
  );
};


export default Education;