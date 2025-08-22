"use client";

import type React from "react";
import { Box } from "@mui/material";
import {
  CustomizeCardWrapper,
  StyledCard,
  ImageWrapper,
  OverlayContent,
  Title,
  SubTitle,
} from "./ProductCard.style";
import { PRODUCT_DATA } from "../../../constant/categoryData";

const ProductCardSection = () => {
  const displayData = PRODUCT_DATA.slice(0, 4);

  return (
    <Box>
      <CustomizeCardWrapper>
        {displayData.map((item) => (
          <StyledCard key={item.id}>
            <ImageWrapper>
              <img
                src={item.imageUrl}
                alt={item.productName}
                style={{
                  position: "absolute",
                  inset: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                }}
              />
            </ImageWrapper>
            <OverlayContent>
              <Title>{item.productName}</Title>
              <SubTitle variant="body2">{item.productCount} products</SubTitle>
            </OverlayContent>
          </StyledCard>
        ))}
      </CustomizeCardWrapper>
    </Box>
  );
};

export default ProductCardSection;
