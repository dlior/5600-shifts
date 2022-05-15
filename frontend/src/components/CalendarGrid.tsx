import {
  Box,
  Container,
  Divider,
  Flex,
  IconButton,
  SimpleGrid,
  Text,
  Grid,
  GridItem,
  Center,
  Stack,
  Show,
  Hide,
} from '@chakra-ui/react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import {
  weekDays,
  monthDays,
  currentDay,
  currentMonth,
  currentYear,
} from '../utils';

const CalendarGrid = () => {
  return (
    <Container maxW="7xl">
      <Grid
        templateColumns={{ sm: '1fr', md: 'repeat(2, 1fr)' }}
        gap={6}
        mt={10}>
        <GridItem>
          <Flex justify="space-between" align="center">
            <Box>
              <Text fontSize="lg" fontWeight="bold" casing="capitalize">
                May 2022
              </Text>
            </Box>
            <Box>
              <IconButton
                aria-label="chevron-left"
                bgColor="transparent"
                isRound
                size="sm"
                mr={2}
                icon={<FaChevronLeft />}
              />
              <IconButton
                aria-label="chevron-right"
                bgColor="transparent"
                isRound
                size="sm"
                icon={<FaChevronRight />}
              />
            </Box>
          </Flex>
          <SimpleGrid columns={7} mt={4}>
            {weekDays.map((weekDay) => (
              <Text
                key={weekDay}
                mb={2}
                fontSize="sm"
                lineHeight={6}
                align="center"
                casing="capitalize">
                {weekDay}
              </Text>
            ))}
            {monthDays.map((day) => {
              return (
                <Box key={day}>
                  {day > 6 && <Divider orientation="horizontal" my={2} />}
                  <Text
                    as="time"
                    display="block"
                    dateTime={
                      currentYear +
                      '-' +
                      ('0' + currentMonth).slice(-2) +
                      '-' +
                      ('0' + (day + 1)).slice(-2)
                    }
                    py={1}
                    w={8}
                    m="auto"
                    fontWeight="semibold"
                    fontSize="sm"
                    lineHeight={6}
                    color={day + 1 == currentDay ? 'white' : 'gray.500'}
                    rounded={day + 1 == currentDay ? 'full' : ''}
                    bgColor={day + 1 == currentDay ? 'black' : ''}
                    align="center">
                    {day + 1}
                  </Text>
                </Box>
              );
            })}
          </SimpleGrid>
        </GridItem>
        <GridItem mt={1}>
          <Show above="md">
            <Box
              as="section"
              borderLeft={'0.1px solid #718096'}
              h="100%"
              ml={1}>
              <Box>
                <Text ml={6}>Schedule for current month</Text>
              </Box>
            </Box>
          </Show>
          <Hide above="md">
            <Box>
              <Text>Schedule for current month</Text>
            </Box>
          </Hide>
        </GridItem>
      </Grid>
    </Container>
  );
};

export default CalendarGrid;
