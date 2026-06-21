import { motion } from "framer-motion";
import { Progress, SimpleGrid } from "@chakra-ui/react";
import { ISkill } from "./types";

const Bar: React.FC<{ data: ISkill }> = ({ data: { level, name } }) => {
  const variants = {
    initial: {
      width: 0,
    },
    animate: {
      width: level,
      transition: {
        duration: 0.4,
        type: "spring",
        damping: 10,
        stiffness: 100,
      },
    },
  };
  return (
    <SimpleGrid columns={3} spacing={10} padding="10px">
      <motion.div
        className="flex items-center px-4 py-1 rounded-full bg-gradient-to-r from-green to-blue-600"
        style={{ width: level }}
        initial="initial"
        animate="animate"
        variants={variants}
      >
        <Progress hasStripe value={level} />
        {name}
      </motion.div>
    </SimpleGrid>
  );
};

export default Bar;
