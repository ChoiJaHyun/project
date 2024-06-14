import { Flex } from "@chakra-ui/react";
import { FC, useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";

const Layout: FC = () => {
  return (
    <Flex>
      <Header />
      <Flex>
        <Outlet />
      </Flex>
    </Flex>
  );
};

export default Layout;
