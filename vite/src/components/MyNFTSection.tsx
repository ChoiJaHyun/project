import React from "react";
import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const MyNFTSection: React.FC = () => {
  return (
    <Box bg="gray.800" py="16" id="my-nft" width="100%">
      <Heading
        as="h2"
        textAlign="center"
        color="cyan.400"
        mb="8"
        textShadow="0 0 8px cyan"
      >
        My NFT
      </Heading>
      <Text color="gray.300" textAlign="center" mb="8">
        내가 소유하고 있는 NFT 카드들을 확인하세요!
      </Text>
      <Flex justify="center">
        <Button
          as={Link}
          to="/myplace"
          bg="gray.600"
          color="cyan.400"
          size="lg"
          _hover={{ bg: "gray.500" }}
          _active={{ bg: "gray.400" }}
        >
          MyPlace
        </Button>
      </Flex>
    </Box>
  );
};

export default MyNFTSection;
