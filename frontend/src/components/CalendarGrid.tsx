import { Box, Container, Divider, SimpleGrid, Text } from '@chakra-ui/react';
import {
  weekDays,
  days,
  currentDay,
  currentMonth,
  currentYear,
} from '../utils';

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
          {days.map((day, i) => {
            return (
              <Box key={i}>
                {i > 6 && <Divider orientation="horizontal" my={2} />}
                <Text
                  as="time"
                  display="block"
                  dateTime={
                    currentYear +
                    '-' +
                    ('0' + currentMonth).slice(-2) +
                    '-' +
                    ('0' + currentDay).slice(-2)
                  }
                  px={2}
                  py={2}
                  w={10}
                  m="auto"
                  fontWeight="semibold"
                  fontSize="sm"
                  lineHeight={6}
                  color={day + 1 == currentDay ? 'white' : 'gray.500'}
                  rounded={day + 1 == currentDay ? 'full' : ''}
                  bgColor={day + 1 == currentDay ? 'purple.800' : ''}
                  align="center">
                  {day + 1}
                </Text>
              </Box>
            );
          })}
        </SimpleGrid>
      </SimpleGrid>
    </Container>
  );
};

export default CalendarGrid;
