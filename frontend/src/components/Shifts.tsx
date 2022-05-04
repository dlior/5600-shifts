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
import UserAvatar from './UserAvatar';
import '../style/index.scss';

const Shifts = () => {
  return (
    <TableContainer w="80vw" mx="auto" mt={16}>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Employee Name</Th>
            <Th textAlign="center">Sun</Th>
            <Th textAlign="center">Mon</Th>
            <Th textAlign="center">Tue</Th>
            <Th textAlign="center">Wed</Th>
            <Th textAlign="center">Thu</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>
              <HStack justify="start" align="center" spacing={2}>
                <UserAvatar size="sm" />
                <Text fontSize="sm">Lior Degu</Text>
              </HStack>
            </Td>
            <Td fontSize="sm" textAlign="center">
              -
            </Td>
            <Td fontSize="sm" textAlign="center">
              07:30 - 19:30, 08:30 - 12:40
            </Td>
            <Td fontSize="sm" textAlign="center">
              07:30 - 19:30
            </Td>
            <Td fontSize="sm" textAlign="center">
              07:30 - 19:30
            </Td>
            <Td fontSize="sm" textAlign="center">
              -
            </Td>
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
