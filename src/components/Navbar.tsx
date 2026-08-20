import { HStack, useColorModeValue } from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch";

const Navbar: React.FC = () => {
  const bg = useColorModeValue("white", "gray.900");
  const borderColor = useColorModeValue("gray.200", "whiteAlpha.200");

  return (
    <HStack
      px={6}
      h="60px"
      bg={bg}
      borderBottom="1px solid"
      borderColor={borderColor}
      justifyContent="flex-end"
      w="full"
    >
      <ColorModeSwitch />
    </HStack>
  );
};

export default Navbar;