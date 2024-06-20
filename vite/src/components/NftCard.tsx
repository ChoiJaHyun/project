import { useState, useEffect } from "react";
import {
  Box,
  Button,
  Flex,
  GridItem,
  Image,
  Input,
  InputGroup,
  InputRightAddon,
  Text,
} from "@chakra-ui/react";
import { Contract, formatEther, parseEther } from "ethers";
import { FC } from "react";
import styled from "@emotion/styled";

interface NftCardProps {
  nftMetadata: NftMetadata;
  tokenId: number;
  saleContract: Contract | null;
  isApprovedForAll: boolean;
}

const FlippableBox = styled(Box)`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  transition: transform 0.6s;
`;

const NftCard: FC<NftCardProps> = ({
  nftMetadata,
  tokenId,
  saleContract,
  isApprovedForAll,
}) => {
  const [currentPrice, setCurrentPrice] = useState<bigint>();
  const [salePrice, setSalePrice] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isFlipped, setIsFlipped] = useState<boolean>(false);

  const getTokenPrice = async () => {
    try {
      const response = await saleContract?.getTokenPrice(tokenId);
      setCurrentPrice(response);
    } catch (error) {
      console.error(error);
    }
  };

  const onClickSetForSaleNft = async () => {
    try {
      if (!salePrice || isNaN(Number(salePrice))) return;

      setIsLoading(true);

      const response = await saleContract?.setForSaleNft(
        tokenId,
        parseEther(salePrice)
      );

      await response.wait();

      setCurrentPrice(parseEther(salePrice));
      setIsLoading(false);
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (!saleContract || !tokenId) return;

    getTokenPrice();
  }, [saleContract, tokenId]);

  return (
    <GridItem display="flex" flexDir="column" alignItems="center">
      <Box
        position="relative"
        width="150px"
        height="225px"
        style={{ perspective: "1000px" }}
        onClick={() => setIsFlipped(!isFlipped)}
        cursor="pointer"
      >
        <FlippableBox
          transform={isFlipped ? "rotateY(180deg)" : "rotateY(0deg)"}
        >
          {!isFlipped && (
            <Image
              src={nftMetadata.image}
              alt={nftMetadata.name}
              boxSize="100%"
              objectFit="cover"
            />
          )}
        </FlippableBox>
        <FlippableBox
          transform={isFlipped ? "rotateY(0deg)" : "rotateY(180deg)"}
        >
          {isFlipped && (
            <Image
              src="/images/pokeball.png"
              alt="pokeball"
              boxSize="100%"
              objectFit="cover"
            />
          )}
        </FlippableBox>
      </Box>
      {!isFlipped && (
        <>
          <Text mt={4} fontSize={24} fontWeight="semibold">
            {nftMetadata.name}
          </Text>
          <Flex flexWrap="wrap" mt={4} gap={2}>
            {nftMetadata.attributes?.map((w, j) => (
              <Box key={j} border="2px solid olive" p={1}>
                <Text borderBottom="2px solid olive">{w.trait_type}</Text>
                <Text>{w.value}</Text>
              </Box>
            ))}
          </Flex>
          <Flex mt={4}>
            {currentPrice ? (
              <Text>{formatEther(currentPrice)} ETH</Text>
            ) : isApprovedForAll ? (
              <>
                <InputGroup>
                  <Input
                    value={salePrice}
                    onChange={(e) => setSalePrice(e.target.value)}
                    textAlign="right"
                    isDisabled={isLoading}
                  />
                  <InputRightAddon>ETH</InputRightAddon>
                </InputGroup>
                <Button
                  ml={2}
                  onClick={onClickSetForSaleNft}
                  isDisabled={isLoading}
                  isLoading={isLoading}
                  loadingText="로딩중"
                >
                  등록
                </Button>
              </>
            ) : (
              ""
            )}
          </Flex>
        </>
      )}
    </GridItem>
  );
};

export default NftCard;
