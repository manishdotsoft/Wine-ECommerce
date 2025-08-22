import React from "react";
import {
  Container,
  RightSectionBox,
  LeftSectionBox,
  Wrapper,
  BackgroundImage,
  ContentContainer,
  TextContent,
  Title,
  Description,
  CTAButton,
} from "./Trending.style";
import { CARD_DATA } from "../../constant/trendingData";
import CustomCard from "../../atoms/CustomCard/CustomCard";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const Trending = () => {
  return (
    <Container>
      <Wrapper>
        <LeftSectionBox>
          <BackgroundImage />
          <ContentContainer>
            <TextContent>
              <Title variant="h2">{"Everyday Value"}</Title>
              <Description variant="body1">
                {
                  "Enjoy high-quality wines, beers, and spirits at affordable prices—perfect for daily moments without compromising on taste"
                }
              </Description>
            </TextContent>
            <CTAButton endIcon={<ArrowForwardIcon />} disableRipple>
              {"View All"}
            </CTAButton>
          </ContentContainer>
        </LeftSectionBox>
        <RightSectionBox>
          {CARD_DATA.map((card, index) => (
            <CustomCard
              key={index}
              title={card.title}
              subTitle={card.subTitle}
              btnText={card.btnText}
              handleClick={card.handleClick}
            />
          ))}
        </RightSectionBox>
      </Wrapper>
    </Container>
  );
};

export default Trending;
