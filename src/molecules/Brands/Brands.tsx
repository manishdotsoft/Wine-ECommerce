import React from "react";
import { Container, ImageWrapper } from "./Brand.style";
import { CustomTitleSection, CustomButton } from "../../atoms";
import { useTheme } from "@mui/material";
import { willow } from "../../assets";

interface BrandProps {
  handleBrandClick: () => void;
}
const Brands = ({ handleBrandClick }: BrandProps) => {
  const theme = useTheme();
  return (
    <Container>
      <CustomTitleSection
        title={"Featured Brands"}
        subtitle={""}
        rightElement={
          <CustomButton
            text={"View All Category"}
            bgColor={theme.palette.white.main}
            color={theme.palette.black[800]}
            border={""}
            btnBorderColor={theme.palette.success.main}
            onClick={handleBrandClick}
          />
        }
      />
      <ImageWrapper>
        {[...Array(6)].map((_, i) => (
          <img key={i} src={willow} alt={`brand image ${i}`} />
        ))}
      </ImageWrapper>
    </Container>
  );
};

export default Brands;
