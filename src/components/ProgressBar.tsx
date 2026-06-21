import { Progress, SimpleGrid, Box } from "@chakra-ui/react";

const ProgressBar = () => {
  const skill = [
    {
      name: "JavaScript",
      level: 90,
      //Icon: BsCircleFill,
    },
    {
      name: "React",
      level: 80,
      //  Icon: BsCircleFill,
    },
    // {
    //   name: "React Native",
    //   level: "80%",
    //   Icon: BsCircleFill,
    // },
    // {
    //   name: "Dart",
    //   level: "65%",
    //   Icon: BsCircleFill,
    // },
    {
      name: "Python",
      level: 50,
      // Icon: BsCircleFill,
    },
    {
      name: "TypeScript",
      level: 40,
      // Icon: BsCircleFill,
    },
    {
      name: "Nodejs",
      level: 50,
      //Icon: BsCircleFill,
    },
  ];
  return (
    <>
      {skill.map((ski) => {
        <SimpleGrid columns={3} spacing={10} padding="10px">
          <Box>
            {ski.name}: <Progress hasStripe value={ski.level} />
          </Box>
        </SimpleGrid>;
      })}
      ;
    </>
  );
};

export default ProgressBar;
