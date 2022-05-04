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
import { FaBars } from 'react-icons/fa';
import { useRef } from 'react';
import Logo from './Logo';
import NavigationLinks from './NavigationLinks';

const MobileMenu = ({ colorMode }: { colorMode: string }) => {
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
          <Flex bgColor="#1A202C" w={'100%'} px={6} py={3}>
            <Logo />
            <DrawerCloseButton
              bgColor="gray.700"
              rounded="full"
              color="white"
              mr={3}
              mt={1}
            />
          </Flex>
          <DrawerHeader style={{ borderTop: '5px solid #BE911F' }}>
            <NavigationLinks mobile={true} />
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
