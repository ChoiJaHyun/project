import { Box, Text, Flex, Link } from "@chakra-ui/react";

const Footer = () => (
  <Box bg="gray.900" py="8" width="100%">
    <Text color="gray.400" textAlign="center" mb="4">
      © 2024 CyberPokemon. All rights reserved.
    </Text>
    <Flex justify="center" mb="4">
      <Link
        mx="2"
        color="gray.500"
        _hover={{ color: "cyan.400" }}
        href="https://twitter.com/yourpage"
        isExternal
      >
        Twitter
      </Link>
      <Link
        mx="2"
        color="gray.500"
        _hover={{ color: "cyan.400" }}
        href="https://discord.com/invite/yourpage"
        isExternal
      >
        Discord
      </Link>
      <Link
        mx="2"
        color="gray.500"
        _hover={{ color: "cyan.400" }}
        href="https://telegram.me/yourpage"
        isExternal
      >
        Telegram
      </Link>
    </Flex>
  </Box>
);

export default Footer;
