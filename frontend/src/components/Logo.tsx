import { Flex, Hide, HStack, Image, Show, Text, Link } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import logo from '../assets/logo.png';

const Logo = () => {
  return (
    <Flex justify="center" align="center">
      <Show above="md">
        <HStack>
          <Link as={RouterLink} to="/">
            <Image src={logo} alt="logo" w={8} h={8} />
          </Link>
          <Text
            id="logo-text"
            color="white"
            fontWeight="semibold"
            fontSize="lg"
            casing="uppercase">
            5600 shifts
          </Text>
        </HStack>
      </Show>
      <Hide above="md">
        <Link as={RouterLink} to="/">
          <Image src={logo} alt="logo" w={8} h={8} />
        </Link>
      </Hide>
    </Flex>
  );
};

export default Logo;
