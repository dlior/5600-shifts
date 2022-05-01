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
      as={'header'}
      bgColor={colorMode == 'light' ? 'gray.700' : 'gray.900'}
      h={14}
      px={24}
      mx={'auto'}
      justify={'space-between'}
      align={'center'}>
      <HStack spacing={12}>
        <Logo />
        <NavigationLinks mobile={false} />
      </HStack>
      <HStack spacing={6}>
        <UserAvatar />
        <DarkModeToggle
          colorMode={colorMode}
          toggleColorMode={toggleColorMode}
        />
      </HStack>
    </Flex>
  ) : (
    <Flex
      as={'header'}
      bgColor={colorMode == 'light' ? 'gray.700' : 'gray.900'}
      h={14}
      px={6}
      justify={'space-between'}
      align={'center'}>
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
