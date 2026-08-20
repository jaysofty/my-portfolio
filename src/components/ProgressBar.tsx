import { SimpleGrid, Box } from "@chakra-ui/react";
import Bar from "./Bar";

const ProgressBar = () => {
  const skills = [
    { name: "JavaScript", level: 90 },
    { name: "React", level: 80 },
    { name: "Python", level: 50 },
    { name: "TypeScript", level: 40 },
    { name: "Node.js", level: 50 },
  ];

  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6} w="full" py={4}>
      {skills.map((skill, index) => (
        <Box key={index}>
          <Bar data={skill} />
        </Box>
      ))}
    </SimpleGrid>
  );
};

export default ProgressBar;