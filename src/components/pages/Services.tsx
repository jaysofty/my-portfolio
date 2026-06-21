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
} from "@chakra-ui/react";
import ReusableCard from "../ReusableCard";
import { about } from "../../data";
import { fadeInUp, routeAnimation } from "../../animation";
import { motion } from "framer-motion";
import { fontColors } from "../../theme";
const Services = () => {
  return (
    <>
      <motion.div
        variants={routeAnimation}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <Heading
          color={fontColors.secondary}
          fontWeight={"extrabold"}
          as="h1"
          marginBottom={2}
        >
          Services
        </Heading>
        <SimpleGrid
          //   columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
          spacing={6}
          marginTop={7}
        >
          {about.map((data) => (
            <motion.div variants={fadeInUp}>
              <Box key={data.id}>
                <ReusableCard text={data.title}>
                  <Heading>
                    <List>
                      <ListIcon as={data.Icon} />
                    </List>
                  </Heading>
                  <Text fontSize="1xl" whiteSpace="normal">
                    {data.about}
                  </Text>
                </ReusableCard>
              </Box>
            </motion.div>
          ))}
        </SimpleGrid>
        <Card
          marginTop={4}
          direction={{ base: "column", sm: "row" }}
          overflow="hidden"
          variant="outline"
        >
          <Image
            objectFit="cover"
            maxW={{ base: "100%", sm: "200px" }}
            src="https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
            alt="Caffe Latte"
          />

          <Stack>
            <CardBody>
              <Text py="2">
                I will be delighted to work with you if you'll have me :)
              </Text>
            </CardBody>

            <CardFooter>
              <Button
                as={Link}
                href="https://wa.link/zqy9yz"
                variant="solid"
                colorScheme="blue"
                target="_target"
              >
                Hire Me
              </Button>
            </CardFooter>
          </Stack>
        </Card>
      </motion.div>
    </>
  );
};

export default Services;
