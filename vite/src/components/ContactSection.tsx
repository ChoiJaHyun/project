import { Box, Heading, Text, Flex, Button } from "@chakra-ui/react";

const ContactSection = () => (
  <Box bg="gray.800" py="16" id="contact" width="100%">
    <Heading
      as="h2"
      textAlign="center"
      color="cyan.400"
      mb="8"
      textShadow="0 0 8px cyan"
    >
      Contact Us
    </Heading>
    <Text color="gray.300" textAlign="center" mb="8">
      질문이나 제안 사항이 있으신가요? 저희에게 알려주세요!
    </Text>
    <Flex justify="center">
      <Button
        bg="gray.600"
        color="cyan.400"
        size="lg"
        _hover={{ bg: "gray.500" }}
        _active={{ bg: "gray.400" }}
      >
        Send Message
      </Button>
    </Flex>
  </Box>
);

export default ContactSection;
