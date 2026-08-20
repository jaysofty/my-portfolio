import { motion } from "framer-motion";
import { Progress, Box, Text, HStack } from "@chakra-ui/react";
import { ISkill } from "./types";

const MotionBox = motion(Box);

const Bar: React.FC<{ data: ISkill }> = ({ data: { level, name } }) => {
  return (
    <Box w="full" py={2}>
      <HStack justify="space-between" mb={1}>
        <Text fontWeight="semibold" fontSize="sm">{name}</Text>
        <Text fontSize="xs" color="gray.500">{level}%</Text>
      </HStack>
      <MotionBox
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <Progress hasStripe value={level} colorScheme="blue" borderRadius="full" size="sm" />
      </MotionBox>
    </Box>
  );
};

export default Bar;