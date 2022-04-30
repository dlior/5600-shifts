import { Flex, HStack, useMediaQuery } from '@chakra-ui/react';
import Logo from './Logo';
import MobileMenu from './MobileMenu';
import NavigationLinks from './NavigationLinks';
import UserAvatar from './UserAvatar';

const Navbar = () => {
  const [isLargerThanMedium] = useMediaQuery('(min-width: 786px)');

  return isLargerThanMedium ? (
    <Flex
      as={'header'}
      bgColor={'gray.800'}
      h={14}
      px={24}
      mx={'auto'}
      justify={'space-between'}
      align={'center'}>
      <HStack spacing={12}>
        <Logo />
        <NavigationLinks mobile={false} />
      </HStack>
      <UserAvatar />
    </Flex>
  ) : (
    <Flex
      as={'header'}
      bgColor={'gray.800'}
      h={14}
      px={6}
      justify={'space-between'}
      align={'center'}>
      <Logo />
      <MobileMenu />
    </Flex>
  );
};

export default Navbar;
