import { Box, Heading, Text } from "@chakra-ui/react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import image1 from "/images/1.png";
import image2 from "/images/2.png";
import image3 from "/images/3.png";
import image4 from "/images/4.png";
import image5 from "/images/5.png";
import image6 from "/images/6.png";
import image7 from "/images/7.png";
import image8 from "/images/8.png";
import image9 from "/images/9.png";
import image10 from "/images/10.png";

const featuredPokemon = [
  {
    id: 1,
    name: "Pokemon1",
    type: ["Fire"],
    abilities: ["Blaze"],
    image: image1,
  },
  {
    id: 2,
    name: "Pokemon2",
    type: ["Water"],
    abilities: ["Torrent"],
    image: image2,
  },
  {
    id: 3,
    name: "Pokemon3",
    type: ["Grass"],
    abilities: ["Overgrow"],
    image: image3,
  },
  {
    id: 4,
    name: "Pokemon4",
    type: ["Electric"],
    abilities: ["Static"],
    image: image4,
  },
  {
    id: 5,
    name: "Pokemon5",
    type: ["Psychic"],
    abilities: ["Synchronize"],
    image: image5,
  },
  {
    id: 6,
    name: "Pokemon6",
    type: ["Rock"],
    abilities: ["Sturdy"],
    image: image6,
  },
  {
    id: 7,
    name: "Pokemon7",
    type: ["Ground"],
    abilities: ["Sand Veil"],
    image: image7,
  },
  {
    id: 8,
    name: "Pokemon8",
    type: ["Fairy"],
    abilities: ["Cute Charm"],
    image: image8,
  },
  {
    id: 9,
    name: "Pokemon9",
    type: ["Fighting"],
    abilities: ["Guts"],
    image: image9,
  },
  {
    id: 10,
    name: "Pokemon10",
    type: ["Dragon"],
    abilities: ["Inner Focus"],
    image: image10,
  },
];

const FeaturedCardSection = () => (
  <Box bg="gray.900" py="24">
    <Heading
      as="h2"
      textAlign="center"
      color="cyan.400"
      mb="8"
      textShadow="0 0 8px cyan"
    >
      Featured Pokémon
    </Heading>
    <Carousel
      showThumbs={false}
      showStatus={false}
      infiniteLoop
      useKeyboardArrows
      autoPlay
      emulateTouch
      renderArrowPrev={(onClickHandler, hasPrev, label) =>
        hasPrev && (
          <button
            type="button"
            onClick={onClickHandler}
            title={label}
            style={{
              position: "absolute",
              zIndex: 2,
              top: "calc(50% - 15px)",
              width: 50,
              height: 50,
              cursor: "pointer",
              backgroundColor: "rgba(255, 255, 255, 0.5)",
              border: "none",
              borderRadius: "50%",
              fontSize: "30px", // Increased font size
              left: 15,
            }}
          >
            &larr;
          </button>
        )
      }
      renderArrowNext={(onClickHandler, hasNext, label) =>
        hasNext && (
          <button
            type="button"
            onClick={onClickHandler}
            title={label}
            style={{
              position: "absolute",
              zIndex: 2,
              top: "calc(50% - 15px)",
              width: 50,
              height: 50,
              cursor: "pointer",
              backgroundColor: "rgba(255, 255, 255, 0.5)",
              border: "none",
              borderRadius: "50%",
              fontSize: "30px", // Increased font size
              right: 15,
            }}
          >
            &rarr;
          </button>
        )
      }
    >
      {featuredPokemon.map((pokemon) => (
        <Box
          key={pokemon.id}
          mx="auto"
          maxW="400px"
          bg="gray.800"
          p="4"
          borderRadius="lg"
        >
          <img src={pokemon.image} alt={pokemon.name} />
          <Box className="mini-profile" mt="4">
            <Heading as="h5" size="md" color="cyan.400" textAlign="center">
              {pokemon.name}
              <Text as="span" color="gray.400">
                {" "}
                #{pokemon.id}
              </Text>
            </Heading>
            <Box mt="2">
              <Text color="gray.400">Type</Text>
              <Box>
                {pokemon.type.map((type) => (
                  <Text
                    as="span"
                    key={type}
                    className={`type-label background-color-${type.toLowerCase()}`}
                    color="white"
                    bg={`background-color-${type.toLowerCase()}`}
                    px="2"
                    py="1"
                    borderRadius="md"
                    mr="2"
                  >
                    {type}
                  </Text>
                ))}
              </Box>
            </Box>
            <Box mt="2">
              <Text color="gray.400">Abilities</Text>
              <Box>
                {pokemon.abilities.map((ability) => (
                  <Text
                    as="span"
                    key={ability}
                    className="ability-label"
                    color="white"
                    bg="gray.700"
                    px="2"
                    py="1"
                    borderRadius="md"
                    mr="2"
                  >
                    {ability}
                  </Text>
                ))}
              </Box>
            </Box>
          </Box>
        </Box>
      ))}
    </Carousel>
  </Box>
);

export default FeaturedCardSection;
