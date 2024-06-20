import { Flex } from "@chakra-ui/react";
import { FC, useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import { JsonRpcSigner } from "ethers";
import { Contract, ethers } from "ethers";
import mintAbi from "../lib/mintAbi.json";
import saleAbi from "../lib/saleAbi.json";
import {
  mintContractAddress,
  saleContractAddress,
} from "../lib/contractAddress";
export interface OutletContext {
  mintContract: Contract | null;
  saleContract: Contract | null;
  signer: JsonRpcSigner | null;
  setSigner: (signer: JsonRpcSigner | null) => void;
}
const Layout: FC = () => {
  const [signer, setSigner] = useState<JsonRpcSigner | null>(null);
  const [mintContract, setMintContract] = useState<Contract | null>(null);
  const [saleContract, setSaleContract] = useState<Contract | null>(null);
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
  }, [signer]);
  return (
    <Flex width="100%" minH="100vh" flexDir="column">
      <Header
        signer={signer}
        setSigner={setSigner}
        setMintContract={setMintContract}
        setSaleContract={setSaleContract}
      />
      <Flex flexGrow={1} width="100%">
        <Outlet context={{ signer, mintContract, saleContract, setSigner }} />
      </Flex>
    </Flex>
  );
};
export default Layout;
