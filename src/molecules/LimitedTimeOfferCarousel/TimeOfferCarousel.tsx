import { useState } from "react";
import {
  CarouselContainer,
  HeaderSection,
  Title,
  OfferCard,
  CardImage,
  Subtitle,
  CarouselWrapper,
  CarouselTrack,
  CarouselSlide,
  DotsContainer,
  Dot,
} from "./TimeOfferCarousel.style";
import { OFFERS } from "../../constant/offerData";
import { CustomTitleSection } from "../../atoms";

interface OfferData {
  id: number;
  image: string;
  title: string;
  subtitle: string;
  highlight?: string;
}

const LimitedTimeOffersCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const totalSlides = Math.max(0, OFFERS.length - 2);

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  const renderOfferCard = (offer: OfferData) => (
    <OfferCard key={offer.id}>
      <CardImage src={offer.image} alt={offer.title} />
      {/* this part may be needed later on */}
      {/* <CardOverlay>
        {offer.highlight && <HighlightText>{offer.highlight}</HighlightText>}
        <OfferText>{offer.highlight ? offer.title : offer.title}</OfferText>
        <OfferSubtext>
          {offer.subtitle.split("\n").map((line, index) => (
            <React.Fragment key={index}>
              {line}
              {index < offer.subtitle.split("\n").length - 1 && <br />}
            </React.Fragment>
          ))}
        </OfferSubtext>
      </CardOverlay> */}
    </OfferCard>
  );

  return (
    <CarouselContainer>
      <CustomTitleSection
        title={"Limited-Time Offers"}
        subtitle={"Uncork exclusive savings this week."}
      />
      <CarouselWrapper>
        <CarouselTrack currentIndex={currentIndex}>
          {OFFERS.map((offer) => (
            <CarouselSlide key={offer.id}>{renderOfferCard(offer)}</CarouselSlide>
          ))}
        </CarouselTrack>
      </CarouselWrapper>

      <DotsContainer>
        {Array.from({ length: totalSlides }).map((_, index) => (
          <Dot key={index} active={index === currentIndex} onClick={() => handleDotClick(index)} />
        ))}
      </DotsContainer>
    </CarouselContainer>
  );
};

export default LimitedTimeOffersCarousel;
