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
            id="navigation-link-text"
            key={item.name}
            as={RouterLink}
            to={item.path}
            px={3}
            py={2}
            ml={1}
            rounded="md"
            color="white"
            fontSize="sm"
            fontWeight="medium"
            fontFamily="Montserrat"
            _hover={{ backgroundColor: 'gray.600' }}>
            {item.name}
          </Link>
        ))}
      </Flex>
    </Box>
  );
};

export default NavigationLinks;
