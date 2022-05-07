import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  Text,
} from '@chakra-ui/react';
import { FaPlus } from 'react-icons/fa';

const RequestModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button
        onClick={onOpen}
        bgColor="#303F9F"
        color="white"
        size="sm"
        fontFamily="Montserrat"
        _hover={{ backgroundColor: '#4338CA' }}
        _active={{ backgroundColor: '#4338CA' }}
        leftIcon={<FaPlus />}>
        New request
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text noOfLines={2}>
              {`"The quick brown fox jumps over the lazy dog" is an
              English-language pangram—a sentence that contains all of the
              letters of the English alphabet. Owing to its existence, Chakra
              was created.`}
            </Text>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default RequestModal;
