import { useState, useEffect } from "react";
import {
  Box,
  Flex,
  GridItem,
  Grid,
  Heading,
  Text,
  Button,
  keyframes,
  Image,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import VideoModal from "./VideoModal";
import blackImage from "/images/black.jpg";
import blueImage from "/images/blue.jpg";
import brownImage from "/images/brown.jpg";
import pearlImage from "/images/pearl.jpg";
import pinkImage from "/images/pink.jpg";
import redImage from "/images/red.jpg";
import whiteImage from "/images/white.jpg";
import card1 from "/images/card1.png";
import card2 from "/images/card2.png";
import card3 from "/images/card3.png";
import card4 from "/images/card4.png";
import card5 from "/images/card5.png";
import card6 from "/images/card6.png";
import card7 from "/images/card7.png";
import card8 from "/images/card8.png";
import card9 from "/images/card9.png";
import card10 from "/images/card10.png";
import card11 from "/images/card11.png";
import card12 from "/images/card12.png";
import card13 from "/images/card13.png";
import card14 from "/images/card14.png";
import card15 from "/images/card15.png";
import card16 from "/images/card16.png";
import card17 from "/images/card17.png";
import card18 from "/images/card18.png";
import card19 from "/images/card19.png";
import card20 from "/images/card20.png";
import card21 from "/images/card21.png";
import card22 from "/images/card22.png";
import card23 from "/images/card23.png";
import card24 from "/images/card24.png";
import card25 from "/images/card25.png";
import card26 from "/images/card26.png";
import card27 from "/images/card27.png";
import card28 from "/images/card28.png";
import card29 from "/images/card29.png";
import card30 from "/images/card30.png";
import card31 from "/images/card31.png";
import card32 from "/images/card32.png";
import card33 from "/images/card33.png";
import card34 from "/images/card34.png";
import card35 from "/images/card35.png";
import card36 from "/images/card36.png";
import card37 from "/images/card37.png";
import card38 from "/images/card38.png";
import card39 from "/images/card39.png";
import card40 from "/images/card40.png";
import card41 from "/images/card41.png";
import card42 from "/images/card42.png";
import card43 from "/images/card43.png";
import card44 from "/images/card44.png";
import card45 from "/images/card45.png";
import card46 from "/images/card46.png";
import card47 from "/images/card47.png";
import card48 from "/images/card48.png";

const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-10px);
  }
  60% {
    transform: translateY(-5px);
  }
`;

const images = [
  blackImage,
  blueImage,
  brownImage,
  pearlImage,
  pinkImage,
  redImage,
  whiteImage,
];
const cards = [
  card1,
  card2,
  card3,
  card4,
  card5,
  card6,
  card7,
  card8,
  card9,
  card10,
  card11,
  card12,
  card13,
  card14,
  card15,
  card16,
  card17,
  card18,
  card19,
  card20,
  card21,
  card22,
  card23,
  card24,
  card25,
  card26,
  card27,
  card28,
  card29,
  card30,
  card31,
  card32,
  card33,
  card34,
  card35,
  card36,
  card37,
  card38,
  card39,
  card40,
  card41,
  card42,
  card43,
  card44,
  card45,
  card46,
  card47,
  card48,
];

const MainSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [displayedCards, setDisplayedCards] = useState<number[]>([]);

  const handleLearnMoreClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      const indices = Array.from({ length: 48 }, (_, i) => i);
      setDisplayedCards(indices.sort(() => 0.5 - Math.random()).slice(0, 9));
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <Grid
      height="100vh"
      templateColumns="repeat(3, 1fr)"
      bgImage={`url('${images[currentImageIndex]}')`}
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
        bg: "rgba(0, 0, 0, 0.5)",
        zIndex: 1,
      }}
    >
      <GridItem colSpan={2} position="relative" zIndex="2">
        <Flex
          direction="column"
          align="center"
          justify="center"
          height="100%"
          textAlign="center"
          width="100%"
        >
          <Heading
            as="h1"
            fontSize={{ base: "4xl", md: "6xl" }}
            color="white"
            textShadow="0 0 12px cyan"
          >
            CyberPokemon에 오신 것을 환영합니다
          </Heading>
          <Text fontSize="xl" color="cyan.400" mt="4">
            최고의 NFT 트레이딩 및 배틀 게임
          </Text>
          <Flex mt="8">
            <Button
              as={Link}
              to="/mint"
              bg="cyan.400"
              color="black"
              size="lg"
              _hover={{ bg: "cyan.500" }}
              _active={{ bg: "cyan.600" }}
              mr="4"
            >
              Start Minting
            </Button>
            <Button
              bg="gray.700"
              color="cyan.400"
              size="lg"
              _hover={{ bg: "gray.600" }}
              _active={{ bg: "gray.500" }}
              onClick={handleLearnMoreClick}
            >
              Learn More
            </Button>
          </Flex>
        </Flex>
      </GridItem>
      <GridItem colSpan={1} position="relative" zIndex="2">
        <Flex
          direction="column"
          align="center"
          justify="center"
          height="100%"
          gap={4}
        >
          <Box
            display="grid"
            gridTemplateColumns="repeat(3, 1fr)"
            gridTemplateRows="repeat(3, 1fr)"
            gap={2}
          >
            {displayedCards.map((index) => (
              <Box
                key={index}
                width="130px"
                height="215px"
                bg="white"
                opacity={0.7}
                mb={2}
                animation={`${bounce} 2s infinite`}
              >
                <Image
                  src={cards[index]}
                  alt={`Card ${index + 1}`}
                  boxSize="100%"
                />
              </Box>
            ))}
          </Box>
        </Flex>
      </GridItem>
      <VideoModal isOpen={isModalOpen} onClose={closeModal} />
    </Grid>
  );
};

export default MainSection;
