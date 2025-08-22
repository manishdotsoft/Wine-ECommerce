import React from "react";
import { useHeroBanner } from "./HeroBanner.hook";
import {
  HeroBannerContainer,
  SlideContainer,
  SlideBackground,
  DotsContainer,
  Dot,
} from "./HeroBanner.style";
import { HERO_BANNER_SLIDES } from "../../constant/heroBannerSlides";
import { HeroOverlay } from "../../atoms";

export interface SlideData {
  id: number;
  backgroundImage: string;
  title: string;
  subtitle: string;
  firstBtnText: string;
  secondBtnText: string;
  onFirstBtnClick: () => void;
  onSecondBtnClick: () => void;
  tagText?: string;
  tagActionText: string;
}

export interface HeroBannerProps {
  slides: SlideData[];
  autoPlayInterval?: number;
  height?: string | number;
}

const HeroBanner = ({ slides = HERO_BANNER_SLIDES, autoPlayInterval = 5000 }: HeroBannerProps) => {
  const {
    currentSlide,
    goToSlide,
    containerRef,
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd,
  } = useHeroBanner(slides.length, autoPlayInterval);

  const currentSlideData = slides[currentSlide];

  return (
    <HeroBannerContainer
      ref={containerRef}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {slides.map((slide, index) => (
        <SlideContainer key={slide.id} isActive={index === currentSlide}>
          <SlideBackground
            backgroundImage={slide.backgroundImage}
            role="img"
            aria-label={slide.title}
          />
        </SlideContainer>
      ))}

      <HeroOverlay
        title={currentSlideData.title}
        subtitle={currentSlideData.subtitle}
        firstBtnText={currentSlideData.firstBtnText}
        secondBtnText={currentSlideData.secondBtnText}
        onFirstBtnClick={currentSlideData.onFirstBtnClick}
        onSecondBtnClick={currentSlideData.onSecondBtnClick}
        tagText={currentSlideData.tagText}
        tagActionText={currentSlideData.tagActionText}
      />

      <DotsContainer>
        {slides.map((_, index) => (
          <Dot
            key={index}
            isActive={index === currentSlide}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </DotsContainer>
    </HeroBannerContainer>
  );
};

export default HeroBanner;
