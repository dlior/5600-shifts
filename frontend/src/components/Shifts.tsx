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
} from '@chakra-ui/react';
import UserAvatar from './UserAvatar';
import '../style/index.scss';

const weekDays = ['sun', 'mon', 'tue', 'wed', 'thu'];

const Shifts = () => {
  return (
    <TableContainer w="80vw" mx="auto" mt={16}>
      <Table variant="simple" style={{ borderCollapse: 'separate' }}>
        <Thead>
          <Tr>
            <Th pos="sticky" left={0} bgColor="whiteAlpha.900" zIndex={9999}>
              Employee Name
            </Th>
            {weekDays.map((day, idx) => (
              <Th key={idx} textAlign="center">
                {day}
              </Th>
            ))}
          </Tr>
        </Thead>
        <Tbody>
          {[1, 2, 3].map((i, j) => {
            return (
              <Tr key={j}>
                <Td
                  w={0.5}
                  pos="sticky"
                  left={0}
                  bgColor="whiteAlpha.900"
                  zIndex={9999}>
                  <HStack justify="start" align="center" spacing={2}>
                    <UserAvatar size="sm" />
                    <Text fontSize="sm" fontWeight="semibold">
                      Lior Degu
                    </Text>
                  </HStack>
                </Td>
                <Td
                  w={0.5}
                  fontSize="sm"
                  textAlign="center"
                  bgColor="teal.500"
                  color="white"
                  fontWeight="bold"
                  rounded="md">
                  -
                </Td>
                <Td
                  w="0.5"
                  fontSize="sm"
                  textAlign="center"
                  bgColor="blue.500"
                  color="white"
                  fontWeight="bold"
                  rounded="md">
                  07:30 - 19:30
                  <Divider orientation="horizontal" my={1} />
                  08:30 - 12:40
                </Td>
                <Td
                  w={0.5}
                  fontSize="sm"
                  textAlign="center"
                  bgColor="cyan.500"
                  color="white"
                  fontWeight="bold"
                  rounded="md">
                  07:30 - 19:30
                </Td>
                <Td
                  w={0.5}
                  fontSize="sm"
                  textAlign="center"
                  bgColor="purple.500"
                  color="white"
                  fontWeight="bold"
                  rounded="md">
                  07:30 - 19:30
                </Td>
                <Td
                  w={0.5}
                  fontSize="sm"
                  textAlign="center"
                  bgColor="pink.500"
                  color="white"
                  fontWeight="bold"
                  rounded="md">
                  -
                </Td>
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
