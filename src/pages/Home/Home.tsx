import React from "react";
import { AgePopup, Navigation, HeroBanner, TimeOfferCarousel, Trending } from "../../molecules";
import { useHomeLogic } from "./Home.hook";
import { CustomizePlaceholderBox } from "./Home.style";
import { HERO_BANNER_SLIDES } from "../../constant/heroBannerSlides";

const Home = () => {
  const { agePopupOpen, isAgeVerified, handleVerifyAge } = useHomeLogic();
  return (
    <>
      <AgePopup open={agePopupOpen} onClose={() => {}} onVerify={handleVerifyAge} />
      {isAgeVerified && <Navigation />}
      {isAgeVerified && <HeroBanner slides={HERO_BANNER_SLIDES} />}
      {isAgeVerified && <TimeOfferCarousel />}
      {isAgeVerified && <Trending />}
    </>
  );
};

export default Home;
