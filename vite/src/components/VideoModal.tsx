import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Flex,
  Text,
  Box,
  Image,
} from "@chakra-ui/react";
import { FaYoutube } from "react-icons/fa";

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const VideoModal: React.FC<VideoModalProps> = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="xl">
      <ModalOverlay />
      <ModalContent bg="gray.900" color="white">
        <ModalHeader>
          <Flex alignItems="center">
            <FaYoutube color="red" size="1.5rem" />
            <Text ml="2">Learn More About CyberPokemon</Text>
          </Flex>
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Box
            position="relative"
            width="100%"
            paddingBottom="56.25%"
            overflow="hidden"
            borderRadius="lg"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Box
              as="iframe"
              src="https://www.youtube.com/embed/FDqDvvJyY2w?si=lLWqEUvHGeDAfKcb"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              style={{
                position: "absolute",
                top: "10%",
                left: "10%",
                width: "80%",
                height: "80%",
                zIndex: "1",
              }}
            />
            <Image
              src="/images/tvFrame.png"
              alt="TV Frame"
              position="absolute"
              top="-12%"
              left="1%"
              width="110%"
              height="115%"
              pointerEvents="none"
              zIndex="2"
            />
          </Box>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default VideoModal;
