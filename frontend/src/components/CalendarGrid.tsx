import { Container, Divider, SimpleGrid, Text } from '@chakra-ui/react';

const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const days = Array.from(Array(31).keys());

const CalendarGrid = () => {
  return (
    <Container maxW="7xl">
      <Text mt={10}>May 2022</Text>
      <SimpleGrid columns={1}>
        <SimpleGrid columns={7} mt={4}>
          {weekDays.map((day, i) => (
            <Text key={i} fontSize="sm" lineHeight={6} align="center">
              {day}
            </Text>
          ))}
        </SimpleGrid>
        <SimpleGrid columns={7} mt={2}>
          {days.map((day, i) => (
            <Text
              key={i}
              fontWeight="semibold"
              fontSize="sm"
              color="gray.500"
              lineHeight={6}
              align="center">
              {i > 6 && <Divider orientation="horizontal" my={2} />}
              {day + 1}
            </Text>
          ))}
        </SimpleGrid>
      </SimpleGrid>
    </Container>
  );
};

export default CalendarGrid;
