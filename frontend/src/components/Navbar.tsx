import {
  Flex,
  HStack,
  useColorMode,
  Hide,
  Show,
  Container,
  Box,
} from '@chakra-ui/react';
import DarkModeToggle from './DarkModeToggle';
import Logo from './Logo';
import MobileMenu from './MobileMenu';
import NavigationLinks from './NavigationLinks';
import RequestModal from './RequestModal';
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
              <RequestModal />
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
