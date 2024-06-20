import React from "react";
import { Box, Flex, Heading, Text, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const LeaderboardSection: React.FC = () => {
  return (
    <Box bg="gray.900" py="16" id="leaderboard" width="100%">
      <Heading
        as="h2"
        textAlign="center"
        color="cyan.400"
        mb="8"
        textShadow="0 0 8px cyan"
      >
        LeaderBoard
      </Heading>
      <Text color="gray.300" textAlign="center" mb="8">
        최고의 플레이어들 사이에서 당신의 순위를 확인하고 독점 보상을 위해
        경쟁하세요.
      </Text>
      <Flex justify="center">
        <Button
          as={Link}
          to="/leaderboard"
          bg="cyan.400"
          color="black"
          size="lg"
          _hover={{ bg: "cyan.500" }}
          _active={{ bg: "cyan.600" }}
        >
          View Leaderboard
        </Button>
      </Flex>
    </Box>
  );
};

export default LeaderboardSection;
