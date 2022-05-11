import { Avatar, Flex, Wrap, WrapItem } from '@chakra-ui/react';

const UserAvatar = () => {
  return (
    <Flex align="center">
      <Wrap>
        <WrapItem>
          <Avatar
            name="Dan Abrahmov"
            src="https://bit.ly/dan-abramov"
            size="sm"
          />
        </WrapItem>
      </Wrap>
    </Flex>
  );
};

export default UserAvatar;
