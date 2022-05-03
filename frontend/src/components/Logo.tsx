import { Flex, Image, Text, useMediaQuery } from '@chakra-ui/react';
import logo from '../assets/logo.png';

const Logo = () => {
  const [isLargerThanMedium] = useMediaQuery('(min-width: 786px)');

  return isLargerThanMedium ? (
    <Flex>
      <Flex justify="center" align="center">
        <Image src={logo} alt="logo" w={8} h={8} mr={2} />
        <Text
          color="white"
          fontWeight="semibold"
          fontSize="lg"
          fontFamily="Montserrat"
          casing="uppercase">
          5600 shifts
        </Text>
      </Flex>
    </Flex>
  ) : (
    <Image src={logo} alt="logo" w={8} h={8} mr={2} />
  );
};

export default Logo;
