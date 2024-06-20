import { Box, Heading, Text, Button, Flex } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
const MarketSection = () => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/sale");
  };
  return (
    <Box bg="gray.800" py="16" id="market" width="100%">
      <Heading
        as="h2"
        textAlign="center"
        color="cyan.400"
        mb="8"
        textShadow="0 0 8px cyan"
      >
        Market
      </Heading>
      <Text color="gray.300" textAlign="center" mb="8">
        포켓몬 카드 마켓에 오신 것을 환영합니다! 여기서 당신의 NFT를 사고, 팔고,
        교환할 수 있습니다.
      </Text>
      <Flex justify="center">
        <Button
          bg="cyan.400"
          color="black"
          size="lg"
          _hover={{ bg: "cyan.500" }}
          _active={{ bg: "cyan.600" }}
          onClick={handleNavigate}
        >
          Visit Market
        </Button>
      </Flex>
    </Box>
  );
};
export default MarketSection;
