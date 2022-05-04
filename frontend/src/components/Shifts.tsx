import {
  Flex,
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
  VStack,
  Text,
} from '@chakra-ui/react';

import '../index.css';
import UserAvatar from './UserAvatar';

const Shifts = () => {
  return (
    <TableContainer w="80vw" mx="auto" mt={16}>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Employee Name</Th>
            <Th justifyContent="start">Sun</Th>
            <Th className="calendar-day">Mon</Th>
            <Th className="calendar-day">Tue</Th>
            <Th className="calendar-day">Wed</Th>
            <Th className="calendar-day">Thu</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>
              <HStack justify="start" align="center" spacing={2}>
                <UserAvatar size="sm" />
                <Text>Lior Degu</Text>
              </HStack>
            </Td>
            <Td className="calendar-hours">-</Td>
            <Td className="calendar-hours">07:30 - 19:30</Td>
            <Td className="calendar-hours">07:30 - 19:30</Td>
            <Td className="calendar-hours">07:30 - 19:30</Td>
            <Td className="calendar-hours">-</Td>
          </Tr>
        </Tbody>
        <Tfoot>
          <Tr></Tr>
        </Tfoot>
      </Table>
    </TableContainer>
  );
};

export default Shifts;
