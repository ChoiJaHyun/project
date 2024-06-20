import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import MintNft from "./pages/MintNft";
import Battle from "./pages/Battle";
import About from "./pages/About";

import LeaderBoard from "./pages/LeaderBoard";
import MyPlace from "./pages/MyPlace";
import SaleNft from "./pages/SaleNft";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/battle" element={<Battle />} />
          <Route path="/about" element={<About />} />

          <Route path="/leaderboard" element={<LeaderBoard />} />
          <Route path="/myplace" element={<MyPlace />} />
          <Route path="/mint" element={<MintNft />} />
          <Route path="/sale" element={<SaleNft />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
