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
  Box,
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
        bgColor={colorMode == 'light' ? 'gray.700' : 'gray.900'}
        color={'white'}
        size={'md'}>
        Open
      </IconButton>
      <Drawer
        isOpen={isOpen}
        placement={'top'}
        onClose={onClose}
        finalFocusRef={btnRef}
        size={'xs'}
        closeOnEsc>
        <DrawerOverlay />
        <DrawerContent bgColor={'white'} px={3} py={1}>
          <Box px={3} py={2}>
            <Logo />
          </Box>
          <DrawerCloseButton
            bgColor={'gray.800'}
            color={'white'}
            _hover={{ bgColor: 'gray.700' }}
            size={'md'}
            p={5}
            mr={3}
            style={{ borderRadius: '100%' }}
          />
          {/* <DrawerHeader>Create your account</DrawerHeader> */}
          <DrawerHeader>
            <NavigationLinks mobile={true} />
          </DrawerHeader>

          <DrawerBody>
            <Input placeholder="Type here..." />
          </DrawerBody>

          <DrawerFooter>
            <Button variant={'outline'} mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme={'blue'}>Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default MobileMenu;
