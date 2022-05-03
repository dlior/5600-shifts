import { Flex, HStack, useMediaQuery, useColorMode } from '@chakra-ui/react';
import DarkModeToggle from './DarkModeToggle';
import Logo from './Logo';
import MobileMenu from './MobileMenu';
import NavigationLinks from './NavigationLinks';
import UserAvatar from './UserAvatar';

const Navbar = () => {
  const [isLargerThanMedium] = useMediaQuery('(min-width: 786px)');
  const { colorMode, toggleColorMode } = useColorMode();

  return isLargerThanMedium ? (
    <Flex
      as="header"
      bgColor="#1A202C"
      h={14}
      px={24}
      mx="auto"
      justify="space-between"
      align="center"
      style={{ borderBottom: '5px solid #BE911F' }}>
      <HStack spacing={12}>
        <Logo />
        <NavigationLinks mobile={false} />
      </HStack>
      <HStack spacing={6}>
        <DarkModeToggle
          colorMode={colorMode}
          toggleColorMode={toggleColorMode}
        />
        <UserAvatar />
      </HStack>
    </Flex>
  ) : (
    <Flex
      as="header"
      bgColor="#1A202C"
      h={14}
      px={6}
      justify="space-between"
      align="center"
      style={{ borderBottom: '5px solid #BE911F' }}>
      <Logo />
      <HStack>
        <DarkModeToggle
          colorMode={colorMode}
          toggleColorMode={toggleColorMode}
        />
        <MobileMenu colorMode={colorMode} />
      </HStack>
    </Flex>
  );
};

export default Navbar;
