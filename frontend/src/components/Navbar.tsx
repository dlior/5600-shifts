import {
  Flex,
  HStack,
  useColorMode,
  Hide,
  Show,
  Container,
  Box,
  Button,
} from '@chakra-ui/react';
import { FaPlus } from 'react-icons/fa';
import DarkModeToggle from './DarkModeToggle';
import Logo from './Logo';
import MobileMenu from './MobileMenu';
import NavigationLinks from './NavigationLinks';
import UserAvatar from './UserAvatar';

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box
      className="noprint"
      zIndex={2}
      as="header"
      pos="sticky"
      top={0}
      bgColor="#1A202C"
      h={14}
      display="flex"
      alignItems="center"
      borderBottom={'5px solid #BE911F'}>
      <Container maxW="7xl">
        <Flex justify="space-between" align="stretch">
          <Show above="md">
            <HStack spacing={7}>
              <Logo />
              <NavigationLinks mobile={false} />
            </HStack>
            <HStack spacing={6}>
              {/* <Button
                bgColor="#303F9F"
                color="white"
                size="sm"
                fontFamily="Montserrat"
                _hover={{ backgroundColor: '#4338CA' }}
                _active={{ backgroundColor: '#4338CA' }}
                leftIcon={<FaPlus />}>
                New request
              </Button> */}
              <DarkModeToggle
                colorMode={colorMode}
                toggleColorMode={toggleColorMode}
              />
              <UserAvatar size="sm" />
            </HStack>
          </Show>
          <Hide above="md">
            <Logo />
            <HStack>
              <DarkModeToggle
                colorMode={colorMode}
                toggleColorMode={toggleColorMode}
              />
              <MobileMenu colorMode={colorMode} />
            </HStack>
          </Hide>
        </Flex>
      </Container>
    </Box>
  );
};

export default Navbar;
