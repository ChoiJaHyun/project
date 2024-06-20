import {
  Button,
  Flex,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Avatar,
  Text,
  Link,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { JsonRpcSigner } from "ethers";
import { Contract, ethers } from "ethers";
import { Dispatch, FC, SetStateAction, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import mintAbi from "../lib/mintAbi.json";
import saleAbi from "../lib/saleAbi.json";
import {
  mintContractAddress,
  saleContractAddress,
} from "../lib/contractAddress";
interface HeaderProps {
  signer: JsonRpcSigner | null;
  setSigner: Dispatch<SetStateAction<JsonRpcSigner | null>>;
  setMintContract: Dispatch<SetStateAction<Contract | null>>;
  setSaleContract: Dispatch<SetStateAction<Contract | null>>;
}
const Header: FC<HeaderProps> = ({
  signer,
  setSigner,
  setMintContract,
  setSaleContract,
}) => {
  const [account, setAccount] = useState<string | null>(null);
  const navigate = useNavigate();
  const connectWallet = async () => {
    try {
      if (!window.ethereum) {
        alert("MetaMask is not installed");
        return;
      }
      console.log("Connecting wallet...");
      await window.ethereum.request({ method: "eth_requestAccounts" });
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const address = await signer.getAddress();
      console.log("Wallet connected: ", address);
      setSigner(signer);
      setAccount(address);
    } catch (error) {
      console.error("Error connecting wallet: ", error);
    }
  };
  const disconnectWallet = () => {
    console.log("Disconnecting wallet...");
    setSigner(null);
    setAccount(null);
  };
  const toggleWalletConnection = async () => {
    if (signer) {
      disconnectWallet();
    } else {
      await connectWallet();
    }
  };
  useEffect(() => {
    if (signer) {
      setMintContract(
        new ethers.Contract(mintContractAddress, mintAbi, signer)
      );
      setSaleContract(
        new ethers.Contract(saleContractAddress, saleAbi, signer)
      );
    } else {
      setMintContract(null);
      setSaleContract(null);
    }
  }, [signer, setMintContract, setSaleContract]);
  return (
    <Flex
      as="header"
      bg="rgba(0, 0, 0, 0.8)"
      position="fixed"
      width="100%"
      zIndex="1000"
      justify="space-between"
      align="center"
      padding="1rem 2rem"
    >
      <Link href="/" _hover={{ textDecoration: "none" }}>
        <Text
          fontSize="2xl"
          fontWeight="bold"
          color="cyan.400"
          textShadow="0 0 8px cyan"
        >
          CyberPokemon
        </Text>
      </Link>
      <Flex align="center">
        {[
          { to: "/about", label: "Info" },
          { to: "/sale", label: "SaleNft" },
          { to: "/battle", label: "Battles" },
          { to: "/leaderboard", label: "Leaderboard" },
          { to: "/contact", label: "Contact" },
        ].map((item, index) => (
          <Link key={index} href={item.to} style={{ textDecoration: "none" }}>
            <Text
              mx="2"
              color="gray.300"
              position="relative"
              fontSize="md"
              transition="all 0.3s"
              _hover={{
                color: "silver",
                transform: "scale(1.2)",
                textShadow:
                  "0 0 10px cyan, 0 0 20px cyan, 0 0 30px cyan, 0 0 40px cyan",
              }}
            >
              {item.label}
            </Text>
          </Link>
        ))}
        {signer ? (
          <Menu>
            <MenuButton
              colorScheme="green"
              as={Button}
              rightIcon={<ChevronDownIcon />}
              bg="green.400"
              color="white"
              ml="4"
              borderRadius="full"
              _hover={{
                bg: "green.500",
                transform: "scale(1.1)",
                boxShadow:
                  "0 0 10px green, 0 0 20px green, 0 0 30px green, 0 0 40px green",
              }}
              _active={{
                bg: "green.600",
              }}
            >
              {account ? `${account.substring(0, 7)}...` : "Connected"}
            </MenuButton>
            <MenuList>
              <MenuItem onClick={toggleWalletConnection}>Disconnect</MenuItem>
            </MenuList>
          </Menu>
        ) : (
          <Button
            onClick={toggleWalletConnection}
            bg="orange.400"
            color="white"
            ml="4"
            borderRadius="full"
            _hover={{
              bg: "orange.500",
              transform: "scale(1.1)",
              boxShadow:
                "0 0 10px orange, 0 0 20px orange, 0 0 30px orange, 0 0 40px orange",
            }}
            _active={{
              bg: "orange.600",
            }}
          >
            Connect MetaMask
          </Button>
        )}
        <Avatar name="User" src="path/to/avatar.jpg" ml="4" />
      </Flex>
    </Flex>
  );
};
export default Header;
