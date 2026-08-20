import { Grid, GridItem, IconButton, Box, useColorModeValue } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { useDisclosure } from "@chakra-ui/react";

import Navbar from "./components/Navbar";
import Routing from "./routes";
import AsideList from "./components/AsideList";
import MobileSidebar from "./components/MobileSidebar";

function App() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const mainBg = useColorModeValue("gray.50", "gray.950");

  return (
    <Box minH="100vh" bg={mainBg}>
      <Grid
        templateAreas={{
          base: `"header" "main"`,
          md: `"header header" "nav main"`,
        }}
        gridTemplateRows="60px 1fr"
        gridTemplateColumns={{ base: "1fr", md: "280px 1fr" }}
        minH="100vh"
      >
        {/* HEADER */}
        <GridItem area="header" position="sticky" top="0" zIndex="sticky">
          <Navbar />

          {/* MOBILE MENU BUTTON */}
          <IconButton
            aria-label="Open menu"
            icon={<HamburgerIcon />}
            display={{ base: "flex", md: "none" }}
            position="absolute"
            top="12px"
            left="16px"
            variant="ghost"
            onClick={onOpen}
          />
        </GridItem>

        {/* DESKTOP SIDEBAR */}
        <GridItem area="nav" display={{ base: "none", md: "block" }} position="sticky" top="60px" h="calc(100vh - 60px)">
          <AsideList />
        </GridItem>

        {/* MAIN CONTENT */}
        <GridItem area="main" p={{ base: 4, md: 8 }}>
          <Routing />
        </GridItem>
      </Grid>

      {/* MOBILE DRAWER SIDEBAR */}
      <MobileSidebar isOpen={isOpen} onClose={onClose} />
    </Box>
  );
}

export default App;