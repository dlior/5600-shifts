import {
  HStack,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Tr,
  Text,
  Divider,
  useColorMode,
  Box,
} from '@chakra-ui/react';
import UserAvatar from './UserAvatar';
import '../style/index.scss';

const weekDays = ['sun', 'mon', 'tue', 'wed', 'thu'];
const weekDaysColors = [
  'teal.500',
  'blue.500',
  'cyan.500',
  'purple.500',
  'pink.500',
];

import data from '../assets/mock_data/mock_data.json';

const Shifts = () => {
  const { colorMode } = useColorMode();

  return (
    <TableContainer w={['95vw', '80vw']} mx="auto" mt={16}>
      <Table variant="simple" style={{ borderCollapse: 'separate' }}>
        <Thead>
          <Tr>
            <Th
              pos="sticky"
              left={0}
              bgColor={colorMode == 'light' ? 'white' : '#1A202C'}
              zIndex={1}>
              Employee Name
            </Th>
            {weekDays.map((day) => {
              return (
                <Th key={day} textAlign="center">
                  {day}
                </Th>
              );
            })}
          </Tr>
        </Thead>
        <Tbody>
          {data.scheduledShifts.map((shift) => {
            return (
              <Tr key={shift.employeeName}>
                <Td
                  w={0.1}
                  pos="sticky"
                  left={0}
                  bgColor={colorMode == 'light' ? 'white' : '#1A202C'}
                  zIndex={1}>
                  <HStack justify="start" align="center" spacing={2}>
                    <UserAvatar size="sm" />
                    <Text fontSize="sm" fontWeight="medium">
                      {shift.employeeName}
                    </Text>
                  </HStack>
                </Td>
                {shift.employeeShifts.map((item, i) => {
                  return (
                    <Td
                      key={i}
                      w={0.5}
                      p={2}
                      fontSize="sm"
                      textAlign="center"
                      bgColor={weekDaysColors[i]}
                      color="white"
                      fontWeight="bold"
                      rounded="md">
                      {item.length == 0
                        ? '-'
                        : item.length == 1
                        ? item
                        : item.map((split, i, arr) => {
                            return (
                              <Box key={i + shift.employeeName}>
                                <Text>{split}</Text>
                                {i < arr.length - 1 && (
                                  <Divider
                                    key={i}
                                    orientation="horizontal"
                                    my={1}
                                  />
                                )}
                              </Box>
                            );
                          })}
                    </Td>
                  );
                })}
              </Tr>
            );
          })}
        </Tbody>
        <Tfoot>
          <Tr></Tr>
        </Tfoot>
      </Table>
    </TableContainer>
  );
};

export default Shifts;
