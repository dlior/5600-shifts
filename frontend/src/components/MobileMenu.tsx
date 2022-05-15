import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  Input,
  IconButton,
  Flex,
} from '@chakra-ui/react';
import { useRef } from 'react';
import { FaBars } from 'react-icons/fa';
import NavigationLinks from './NavigationLinks';
import Logo from './Logo';

const MobileMenu = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef(null);

  return (
    <>
      <IconButton
        aria-label="menu button"
        ref={btnRef}
        icon={<FaBars />}
        isRound={true}
        onClick={onOpen}
        bgColor="gray.700"
        color="white"
        size="sm">
        Open
      </IconButton>
      <Drawer
        isOpen={isOpen}
        placement="top"
        onClose={onClose}
        finalFocusRef={btnRef}
        size="sm"
        closeOnEsc>
        <DrawerOverlay />
        <DrawerContent>
          <Flex bgColor="#1A202C" w={'100%'} pl={4} py={2.5}>
            <Logo />
            <DrawerCloseButton
              ref={btnRef}
              bgColor="gray.700"
              rounded="full"
              color="white"
              mr={1}
              mt={1}
            />
          </Flex>
          <DrawerHeader borderTop={'5px solid #BE911F'}>
            <NavigationLinks />
          </DrawerHeader>

          <DrawerBody>
            <Input placeholder="Type here..." />
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="blue">Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default MobileMenu;
