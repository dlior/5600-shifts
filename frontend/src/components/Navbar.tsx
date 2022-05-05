import {
  Flex,
  HStack,
  useMediaQuery,
  useColorMode,
  Hide,
  Show,
} from '@chakra-ui/react';
import DarkModeToggle from './DarkModeToggle';
import Logo from './Logo';
import MobileMenu from './MobileMenu';
import NavigationLinks from './NavigationLinks';
import UserAvatar from './UserAvatar';

const Navbar = () => {
  const [isLargerThanMedium] = useMediaQuery('(min-width: 48em)');
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex
      className="noprint"
      zIndex={2}
      as="header"
      pos="sticky"
      top={0}
      bgColor="#1A202C"
      h={14}
      px={isLargerThanMedium ? 24 : 6}
      mx="auto"
      justify="space-between"
      align="center"
      style={{ borderBottom: '5px solid #BE911F' }}>
      <Show above="md">
        <HStack spacing={12}>
          <Logo />
          <NavigationLinks mobile={false} />
        </HStack>
        <HStack spacing={6}>
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
  );
};

export default Navbar;
