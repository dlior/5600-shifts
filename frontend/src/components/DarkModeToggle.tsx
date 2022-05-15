import { IconButton } from '@chakra-ui/react';
import { BsMoonStarsFill, BsSunFill } from 'react-icons/bs';

type DarkModeProps = {
  colorMode: string;
  toggleColorMode: () => void;
};

const DarkModeToggle = ({ colorMode, toggleColorMode }: DarkModeProps) => {
  return (
    <IconButton
      aria-label="color mode"
      isRound={true}
      size="sm"
      bgColor="gray.700"
      _hover={{ bgColor: 'gray.900' }}
      color="white"
      onClick={toggleColorMode}
      icon={
        colorMode == 'light' ? <BsMoonStarsFill /> : <BsSunFill />
      }></IconButton>
  );
};

export default DarkModeToggle;
