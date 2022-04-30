import { Box, Flex, Link } from '@chakra-ui/react';

const navigation = [
  { name: 'Dashboard', href: '#' },
  { name: 'Team', href: '#' },
  { name: 'Calendar', href: '#' },
];

const NavigationLinks = ({ mobile }: { mobile: boolean }) => {
  return (
    <Box as={'nav'}>
      <Flex justify={'center'} align={'center'}>
        {navigation.map((item) => (
          <Link
            key={item.name}
            px={3}
            py={2}
            rounded={'md'}
            color={'gray.200'}
            fontSize={'sm'}
            fontWeight={'semibold'}
            style={{
              textDecoration: 'none',
            }}
            _hover={{ backgroundColor: 'gray.700' }}>
            {item.name}
          </Link>
        ))}
      </Flex>
    </Box>
  );
};

export default NavigationLinks;
