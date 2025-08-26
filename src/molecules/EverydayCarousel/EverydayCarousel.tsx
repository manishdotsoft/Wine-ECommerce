import type React from "react";
import { useState } from "react";
import NorthEastIcon from "@mui/icons-material/NorthEast";
import { useTheme } from "@mui/material";
import {
  Container,
  CarouselSlide,
  SlideTitle,
  ContentSection,
  SlideDescription,
  PriceButton,
  DotsContainer,
  Dot,
  IconWrapper,
} from "./EverydayCarousel.style";
import { EVERYDAY_SLIDES as slides } from "../../constant/curatedData";

const WineCarousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const theme = useTheme();

  return (
    <Container>
      <CarouselSlide>
        <ContentSection>
          <SlideTitle variant="h2">{slides[currentSlide].title}</SlideTitle>
          <SlideDescription>{slides[currentSlide].description}</SlideDescription>
        </ContentSection>
        <PriceButton variant="contained">
          Starting from {slides[currentSlide].price}
          <IconWrapper>
            <NorthEastIcon fontSize="small" sx={{ color: theme.palette.white.main }} />
          </IconWrapper>
        </PriceButton>
      </CarouselSlide>
      <DotsContainer>
        {slides.map((_, index) => (
          <Dot key={index} active={index === currentSlide} onClick={() => setCurrentSlide(index)} />
        ))}
      </DotsContainer>
    </Container>
  );
};

export default WineCarousel;
