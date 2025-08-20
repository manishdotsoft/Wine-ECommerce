import React from "react";
import { AgePopup, Navigation, HeroBanner } from "../../molecules";
import { useHomeLogic } from "./Home.hook";
import { CustomizePlaceholderBox } from "./Home.style";

const Home = () => {
  const { agePopupOpen, isAgeVerified, handleVerifyAge } = useHomeLogic();
  return (
    <>
      <AgePopup open={agePopupOpen} onClose={() => {}} onVerify={handleVerifyAge} />
      {isAgeVerified && <Navigation />}
      {isAgeVerified && <HeroBanner />}
      <CustomizePlaceholderBox>Placeholder</CustomizePlaceholderBox>
      <CustomizePlaceholderBox>Placeholder</CustomizePlaceholderBox>
      <CustomizePlaceholderBox>Placeholder</CustomizePlaceholderBox>
      <CustomizePlaceholderBox>Placeholder</CustomizePlaceholderBox>
    </>
  );
};

export default Home;
