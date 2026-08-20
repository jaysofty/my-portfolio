import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerBody,
  DrawerCloseButton,
} from "@chakra-ui/react";
import AsideList from "./AsideList";

interface MobileSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileSidebar({
  isOpen,
  onClose,
}: MobileSidebarProps) {
  return (
    <Drawer isOpen={isOpen} placement="left" onClose={onClose} size="xs">
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton zIndex="banner" />
        <DrawerBody p={0}>
          <AsideList />
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
}