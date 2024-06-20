import React from "react";
import { Box, Flex, Heading, Text, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Battle: React.FC = () => {
  return (
    <Box
      bg="gray.900"
      minH="100vh"
      bgImage="url('/path/to/battle-background.jpg')"
      bgSize="cover"
      bgPosition="center"
      color="white"
      textAlign="center"
      py="16"
    >
      <Flex direction="column" align="center" justify="center" minH="100vh">
        <Heading as="h1" size="2xl" mb="4" textShadow="0 0 12px cyan">
          Battle Arena
        </Heading>
        <Text fontSize="xl" mb="8" color="cyan.400">
          짜릿한 전투에 참여하고 당신의 실력을 증명하세요!
        </Text>
        <Button
          as={Link}
          to="/play"
          bg="cyan.400"
          color="black"
          size="lg"
          _hover={{ bg: "cyan.500" }}
          _active={{ bg: "cyan.600" }}
        >
          Start Battle
        </Button>
      </Flex>
    </Box>
  );
};

export default Battle;
