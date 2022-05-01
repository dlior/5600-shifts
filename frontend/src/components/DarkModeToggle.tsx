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
      size="md"
      bgColor="gray.700"
      _hover={{ bgColor: 'gray.900' }}
      color="white"
      onClick={toggleColorMode}
      icon={colorMode == 'light' ? <FaMoon /> : <FaSun />}></IconButton>
  );
};

export default DarkModeToggle;
