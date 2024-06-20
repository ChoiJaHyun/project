import MainSection from "../components/MainSection";
import FeaturedCardSection from "../components/FeaturedCardSection";
import MarketSection from "../components/MarketSection";
import GamePlaySection from "../components/GamePlaySection";
import LeaderboardSection from "../components/LeaderboardSection";
import MyNFTSection from "../components/MyNFTSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import { Flex } from "@chakra-ui/react";

const Home: React.FC = () => {
  return (
    <Flex direction="column" width="100%">
      <Flex pt="80px" direction="column" width="100%">
        <MainSection />
        <FeaturedCardSection />
        <MarketSection />
        <GamePlaySection />
        <LeaderboardSection />
        <MyNFTSection />
        <ContactSection />
        <Footer />
      </Flex>
    </Flex>
  );
};

export default Home;
