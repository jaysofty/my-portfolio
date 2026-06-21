import { Grid, GridItem, IconButton } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { useDisclosure } from "@chakra-ui/react";

import Navbar from "./components/Navbar";
import Routing from "./routes";
import AsideList from "./components/AsideList";
import MobileSidebar from "./components/MobileSidebar";

function App() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Grid
        templateAreas={{
          base: `"header" "main"`,
          md: `"header header" "nav main"`,
        }}
        gridTemplateRows="60px 1fr"
        gridTemplateColumns={{ base: "1fr", md: "250px 1fr" }}
        minH="100vh"
      >
        {/* HEADER */}
        <GridItem area="header">
          <Navbar />

          {/* MOBILE MENU BUTTON */}
          <IconButton
            aria-label="menu"
            icon={<HamburgerIcon />}
            display={{ base: "block", md: "none" }}
            position="absolute"
            top="15px"
            left="15px"
            onClick={onOpen}
          />
        </GridItem>

        {/* DESKTOP SIDEBAR */}
        <GridItem area="nav" display={{ base: "none", md: "block" }}>
          <AsideList />
        </GridItem>

        {/* MAIN CONTENT */}
        <GridItem area="main" p={4}>
          <Routing />
        </GridItem>
      </Grid>

      {/* 👇 MOBILE SIDEBAR GOES HERE (OUTSIDE GRID) */}
      <MobileSidebar isOpen={isOpen} onClose={onClose} />
    </>
  );
}

export default App;