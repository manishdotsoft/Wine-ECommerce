import React from "react";
import {
  AgePopup,
  Navigation,
  HeroBanner,
  TimeOfferCarousel,
  Trending,
  CategorySection,
  DealSection,
} from "../../molecules";
import { useHomeLogic } from "./Home.hook";
import { HERO_BANNER_SLIDES } from "../../constant/heroBannerSlides";

const Home = () => {
  const { agePopupOpen, isAgeVerified, handleVerifyAge, handleCategoryClick } = useHomeLogic();
  return (
    <>
      <AgePopup open={agePopupOpen} onClose={() => {}} onVerify={handleVerifyAge} />
      {isAgeVerified && <Navigation />}
      {isAgeVerified && <HeroBanner slides={HERO_BANNER_SLIDES} />}
      {isAgeVerified && <TimeOfferCarousel />}
      {isAgeVerified && <Trending />}
      {isAgeVerified && <CategorySection handleClick={handleCategoryClick} />}
      {isAgeVerified && <DealSection />}
    </>
  );
};

export default Home;
