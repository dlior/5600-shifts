import {
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';

import '../index.css';

const Shifts = () => {
  return (
    <TableContainer w="80vw" mx="auto" mt={16}>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Employee Name</Th>
            <Th className="calendar-day">Sun</Th>
            <Th className="calendar-day">Mon</Th>
            <Th className="calendar-day">Tue</Th>
            <Th className="calendar-day">Wed</Th>
            <Th className="calendar-day">Thu</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>Lior Degu</Td>
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
