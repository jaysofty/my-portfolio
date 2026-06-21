import { HStack } from "@chakra-ui/react";

import ColorModeSwitch from "./ColorModeSwitch";
import { fontColors } from "../theme";

const Navbar: React.FC = () => {
  return (
    <HStack
      padding="10px"
      justifyContent={"flex-end"}
      color={fontColors.secondary}
    >
      <ColorModeSwitch />
    </HStack>
  );
};

export default Navbar;
