import { Box, Flex, Link } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

const navigation = [
  { name: 'Dashboard', path: '/' },
  { name: 'Team', path: '/team' },
  { name: 'Calendar', path: '/calendar' },
];

const NavigationLinks = ({ mobile }: { mobile: boolean }) => {
  return (
    <Box as="nav">
      <Flex justify="center" align="center">
        {navigation.map((item) => (
          <Link
            key={item.name}
            as={RouterLink}
            to={item.path}
            px={3}
            py={2}
            rounded="md"
            color="white"
            fontSize="sm"
            fontWeight="semibold"
            _hover={{ backgroundColor: 'gray.600' }}>
            {item.name}
          </Link>
        ))}
      </Flex>
    </Box>
  );
};

export default NavigationLinks;
