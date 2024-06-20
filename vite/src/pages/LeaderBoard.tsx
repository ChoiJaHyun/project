import React from "react";
import { Box, Flex, Heading, Text, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const LeaderBoard: React.FC = () => {
  return (
    <Box
      bg="gray.900"
      minH="100vh"
      bgImage="url('/path/to/leaderboard-background.jpg')"
      bgSize="cover"
      bgPosition="center"
      color="white"
      textAlign="center"
      py="16"
    >
      <Flex direction="column" align="center" justify="center" minH="100vh">
        <Heading as="h1" size="2xl" mb="4" textShadow="0 0 12px cyan">
          LeaderBoard
        </Heading>
        <Text fontSize="xl" mb="8" color="cyan.400">
          최고의 플레이어들 사이에서 당신의 순위를 확인하세요!
        </Text>
        <Button
          as={Link}
          to="/"
          bg="cyan.400"
          color="black"
          size="lg"
          _hover={{ bg: "cyan.500" }}
          _active={{ bg: "cyan.600" }}
        >
          홈으로 돌아가기
        </Button>
      </Flex>
    </Box>
  );
};

export default LeaderBoard;
