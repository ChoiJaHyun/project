import { Box, Button, Flex, Grid, Heading, Text } from "@chakra-ui/react";
import { FC, useEffect, useState } from "react";
import { Link, useOutletContext } from "react-router-dom";
import { OutletContext } from "../components/Layout";
import SaleNftCard from "../components/SaleNftCard";

const SaleNft: FC = () => {
  const [tokenIds, setTokenIds] = useState<number[]>([]);

  const { signer, saleContract, mintContract } =
    useOutletContext<OutletContext>();

  const getOnSaleTokens = async () => {
    try {
      const response = await saleContract?.getOnSaleTokens();

      const temp = response.map((v: any) => {
        return Number(v);
      });

      setTokenIds(temp);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (!saleContract) return;

    getOnSaleTokens();
  }, [saleContract]);

  return (
    <Box
      height="100vh"
      bgImage="url('/path/to/market-background.jpg')"
      bgSize="cover"
      bgPosition="center"
      position="relative"
      width="100%"
      _before={{
        content: '""',
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        bg: "rgba(0, 0, 0, 0.7)",
        zIndex: 1,
      }}
    >
      <Box
        position="relative"
        zIndex="2"
        textAlign="center"
        color="white"
        padding="4rem"
      >
        <Heading as="h1" fontSize={{ base: "3xl", md: "5xl" }} mb="4">
          MarketPlace
        </Heading>
        <Text fontSize={{ base: "md", md: "lg" }} mb="8">
          독특한 NFT 카드를 발견하여 사고 팔고 해보세요!
        </Text>
        <Link to="/">
          <Button colorScheme="cyan" size="lg" mb="8">
            Go Back
          </Button>
        </Link>
        <Flex
          w="100%"
          justifyContent="center"
          alignItems="center"
          flexDir="column"
          gap={2}
          mt={8}
          mb={20}
        >
          {signer ? (
            <Grid
              templateColumns={[
                "repeat(1, 1fr)",
                "repeat(1, 1fr)",
                "repeat(2, 1fr)",
              ]}
              gap={6}
            >
              {tokenIds.map((v, i) => (
                <SaleNftCard
                  key={i}
                  tokenId={v}
                  mintContract={mintContract}
                  saleContract={saleContract}
                  signer={signer}
                  tokenIds={tokenIds}
                  setTokenIds={setTokenIds}
                />
              ))}
            </Grid>
          ) : (
            <Text>🦊 메타마스크 로그인이 필요합니다!</Text>
          )}
        </Flex>
      </Box>
    </Box>
  );
};

export default SaleNft;
