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

const Shifts = () => {
  return (
    <TableContainer w="80vw" mx="auto" mt={16}>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Employee Name</Th>
            <Th>Sun</Th>
            <Th>Mon</Th>
            <Th>Tue</Th>
            <Th>Wed</Th>
            <Th>Thu</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>Lior Degu</Td>
            <Td>-</Td>
            <Td>07:30 - 19:30</Td>
            <Td>07:30 - 19:30</Td>
            <Td>07:30 - 19:30</Td>
            <Td>-</Td>
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
