import { Box, Flex, Heading, Text, Image, keyframes } from "@chakra-ui/react";

const rotate = keyframes`
  0%, 100% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(360deg);
  }
`;

const float = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
`;

const About = () => (
  <Box
    position="relative"
    width="100%"
    minHeight="100vh"
    bg="gray.900"
    color="white"
    textAlign="center"
    py="16"
    bgImage="url('/path/to/deck-background.jpg')"
    bgSize="cover"
    bgPosition="center"
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
    <Flex
      direction="column"
      align="center"
      justify="center"
      minH="100vh"
      position="relative"
      zIndex="2"
    >
      <Heading as="h1" fontSize={{ base: "3xl", md: "5xl" }} mb="4">
        About Pokémon Trading NFT Card Game
      </Heading>
      <Text fontSize={{ base: "md", md: "lg" }} mb="8">
        Manage your Pokémon cards and create powerful decks! Trade, battle, and
        conquer in this exciting NFT card game.
      </Text>
      <Box position="relative" width="80%" mx="auto" mb="8">
        <Image
          src="https://static.tildacdn.net/tild6235-6633-4233-b038-633536303338/nft2.png"
          alt="NFT Example"
          animation={`${float} 5s infinite`}
        />
        <Image
          src="https://static.tildacdn.net/tild3361-3633-4938-a630-623530333761/nft1.png"
          alt="NFT Example"
          position="absolute"
          top="20%"
          left="10%"
          width="50%"
          animation={`${rotate} 10s infinite`}
        />
      </Box>
      <Box maxW="md" mx="auto" textAlign="left" zIndex="2">
        <Text mb="4" lineHeight="1.6">
          The Pokémon Trading Card Game (ポケモンカードゲーム, Pokemon Kādo
          Gēmu, "Pokémon Card Game"), abbreviated as PTCG or Pokémon TCG, is a
          collectible card game developed by Creatures Inc. based on the Pokémon
          franchise. Standard gameplay cards include Pokémon cards, energy
          cards, trainer cards, and stadium cards, a variant of trainer cards.
          Pokémon cards contain data about the creature's type, attacks,
          ability, and HP as well as any special effects the cards have on the
          game. Basic (unevolved) Pokémon can change into their evolved forms
          during the game by playing subsequent evolution cards in the deck.
          Energy cards can be attached to Pokémon cards to power up attacks, and
          trainer cards can be used for different effects on the game. Card
          effects often rely on elements of luck, such as dice rolls and coin
          tosses, to decide an outcome. Counters are stacked on top of cards in
          play to indicate damage dealt, and players may choose to put their
          Pokémon cards on a bench to switch to a different attacker.
        </Text>
      </Box>
    </Flex>
  </Box>
);

export default About;
