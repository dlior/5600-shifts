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
        alignItems="center">
        <GridItem>
          <Flex mt={10} justify="space-between" align="center">
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
            {/* </SimpleGrid>
        <SimpleGrid columns={7} mt={2}> */}
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
        <GridItem textAlign="center">
          <Box bg="tomato">
            <Text>Lior Degu</Text>
            <Center>
              <Divider
                orientation="vertical"
                size="2xl"
                colorScheme="pink"
                w={5}
              />
            </Center>
          </Box>
        </GridItem>
      </Grid>
    </Container>
  );
};

export default CalendarGrid;
