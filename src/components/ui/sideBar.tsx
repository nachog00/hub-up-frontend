import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  IconButton,
  VStack,
  Heading,
  Box,
  Link,
  HStack,
  Icon
} from '@chakra-ui/react';
import { HamburgerIcon, AtSignIcon, CalendarIcon } from '@chakra-ui/icons'; 
import Image from "next/image";
import logo from "../../../public/img/logo_transparent.png";
import { useWindowSize } from "@/hooks/useWindowSize";

export default function Sidebar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { isTablet } = useWindowSize();

  return (
    <>
      <IconButton 
        icon={<HamburgerIcon />} 
        onClick={onOpen} 
        aria-label="Open sidebar" 
        variant="ghost"
      />
      <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>
            <HStack spacing={4} alignItems="center">
              <Box boxSize="50px">
                <Image src={logo.src} alt="logo" width={50} height={50} />
              </Box>
              {!isTablet && (
                <Heading as="h1" fontSize={"1.5rem"} className="text-shadow">
                  Hub-Up
                </Heading>
              )}
            </HStack>
          </DrawerHeader>
          <DrawerBody>
            <VStack spacing={4} alignItems="start" mt={4}>
              <Link href="/profile" display="flex" alignItems="center" color="teal.500" fontWeight="bold">
                <Icon as={AtSignIcon} mr={2} />
                Profile
              </Link>
              <Link href="/hosting" display="flex" alignItems="center" color="teal.500" fontWeight="bold">
                <Icon as={AtSignIcon} mr={2} />
                I'm hosting
              </Link>
              <Link href="/attending" display="flex" alignItems="center" color="teal.500" fontWeight="bold">
                <Icon as={CalendarIcon} mr={2} />
                I'm attending
              </Link>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
