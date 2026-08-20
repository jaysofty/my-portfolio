import { Card, CardHeader, Heading, CardBody, useColorModeValue } from "@chakra-ui/react";
import { motion } from "framer-motion";

interface Props {
  children: React.ReactNode;
  text: string;
}

const MotionCard = motion(Card);

const ReusableCard = ({ children, text }: Props) => {
  const borderColor = useColorModeValue("gray.200", "whiteAlpha.200");

  return (
    <MotionCard
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      variant="outline"
      borderColor={borderColor}
      borderRadius="xl"
      boxShadow="sm"
      overflow="hidden"
    >
      <CardHeader pb={2}>
        <Heading size="md">{children}</Heading>
      </CardHeader>
      <CardBody pt={0} color="gray.600" _dark={{ color: "gray.400" }}>
        {text}
      </CardBody>
    </MotionCard>
  );
};

export default ReusableCard;