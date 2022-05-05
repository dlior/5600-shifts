import { Flex, Hide, HStack, Image, Show, Text } from '@chakra-ui/react';
import logo from '../assets/logo.png';

const Logo = () => {
  return (
    <Flex justify="center" align="center">
      <Show above="md">
        <HStack spacing={2}>
          <Image src={logo} alt="logo" w={8} h={8} />
          <Text
            color="white"
            fontWeight="semibold"
            fontSize="lg"
            fontFamily="Montserrat"
            casing="uppercase">
            5600 shifts
          </Text>
        </HStack>
      </Show>
      <Hide above="md">
        <Image src={logo} alt="logo" w={8} h={8} />
      </Hide>
    </Flex>
  );
};

export default Logo;
