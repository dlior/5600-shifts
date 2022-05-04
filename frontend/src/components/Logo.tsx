import { Flex, Hide, Image, Show, Text } from '@chakra-ui/react';
import logo from '../assets/logo.png';

const Logo = () => {
  return (
    <Flex justify="center" align="center">
      <Show above="md">
        <Image src={logo} alt="logo" w={8} h={8} mr={2} />
        <Text
          color="white"
          fontWeight="semibold"
          fontSize="lg"
          fontFamily="Montserrat"
          casing="uppercase">
          5600 shifts
        </Text>
      </Show>
      <Hide above="md">
        <Image src={logo} alt="logo" w={8} h={8} mr={2} />
      </Hide>
    </Flex>
  );
};

export default Logo;
