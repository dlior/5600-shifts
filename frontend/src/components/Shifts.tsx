import { Grid, GridItem, Text } from '@chakra-ui/react';

const Shifts = () => {
  return (
    <Grid templateColumns="repeat(5, 1fr)" gap={0.5} mt={10} w="80vw" mx="auto">
      <GridItem
        w="100%"
        h="10"
        bg="teal.500"
        style={{ borderRadius: '5px 0 0 5px' }}
      />
      <GridItem w="100%" h="10" bg="teal.500" justifySelf="center">
        <Text>Sun</Text>
      </GridItem>
      <GridItem w="100%" h="10" bg="teal.500" />
      <GridItem w="100%" h="10" bg="teal.500" />
      <GridItem
        w="100%"
        h="10"
        bg="teal.500"
        style={{ borderRadius: '0 5px 5px 0' }}
      />
    </Grid>
  );
};

export default Shifts;
