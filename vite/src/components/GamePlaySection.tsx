import React from "react";
import { Box, Heading, Text, Button, Flex } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const GamePlaySection: React.FC = () => {
  const navigate = useNavigate();

  const handleLearnMoreClick = () => {
    navigate("/battle");
  };

  return (
    <Box bg="gray.700" py="16" id="gameplay" width="100%">
      <Heading
        as="h2"
        textAlign="center"
        color="cyan.400"
        mb="8"
        textShadow="0 0 8px cyan"
      >
        Gameplay
      </Heading>
      <Text color="gray.300" textAlign="center" mb="8">
        최고의 NFT 경험에서 포켓몬 카드를 거래하고 배틀하는 방법을 배워보세요.
      </Text>
      <Flex justify="center">
        <Button
          bg="gray.600"
          color="cyan.400"
          size="lg"
          _hover={{ bg: "gray.500" }}
          _active={{ bg: "gray.400" }}
          onClick={handleLearnMoreClick}
        >
          Learn More
        </Button>
      </Flex>
    </Box>
  );
};

export default GamePlaySection;
