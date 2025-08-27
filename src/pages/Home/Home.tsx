import React from "react";
import {
  AgePopup,
  Navigation,
  HeroBanner,
  TimeOfferCarousel,
  Trending,
  CategorySection,
  DealSection,
  CuratedPicks,
  EverydayCarousel,
  Brand,
  RecentlyView,
  Newsletter,
} from "../../molecules";
import Footer from "../../organisms/Footer/Footer";
import { useHomeLogic } from "./Home.hook";
import { HERO_BANNER_SLIDES } from "../../constant/heroBannerSlides";

const Home = () => {
  const { agePopupOpen, isAgeVerified, handleVerifyAge, handleCategoryClick, handleBrandClick } =
    useHomeLogic();
  return (
    <>
      <AgePopup open={agePopupOpen} onClose={() => {}} onVerify={handleVerifyAge} />
      {isAgeVerified && <Navigation />}
      {isAgeVerified && <HeroBanner slides={HERO_BANNER_SLIDES} />}
      {isAgeVerified && <TimeOfferCarousel />}
      {isAgeVerified && <Trending />}
      {isAgeVerified && <CuratedPicks />}
      {isAgeVerified && <EverydayCarousel />}
      {isAgeVerified && <CategorySection handleClick={handleCategoryClick} />}
      {isAgeVerified && <DealSection />}
      {isAgeVerified && <Brand handleBrandClick={handleBrandClick} />}
      {isAgeVerified && <RecentlyView />}
      {isAgeVerified && <Newsletter />}
      {isAgeVerified && <Footer />}
    </>
  );
};

export default Home;
