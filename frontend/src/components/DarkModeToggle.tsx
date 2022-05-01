import { IconButton } from '@chakra-ui/react';
import { FaMoon, FaSun } from 'react-icons/fa';

type DarkModeProps = {
  colorMode: string;
  toggleColorMode: () => void;
};

const DarkModeToggle = ({ colorMode, toggleColorMode }: DarkModeProps) => {
  return (
    <IconButton
      aria-label="color mode"
      isRound={true}
      size={'md'}
      bgColor={colorMode == 'light' ? 'gray.700' : 'gray.900'}
      color={'white'}
      _hover={{ bgColor: colorMode == 'light' ? 'gray.900' : 'gray.700' }}
      onClick={toggleColorMode}
      icon={colorMode == 'light' ? <FaMoon /> : <FaSun />}></IconButton>
  );
};

export default DarkModeToggle;
