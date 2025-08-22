import React from "react";
import { Container } from "./CategorySection.style";
import { CustomTitleSection, CustomButton } from "../../atoms";
import { useTheme } from "@mui/material";
import ProductCardSection from "./layout/ProductCard";

interface CategoryProps {
  handleClick: () => void;
}

const CategorySection = ({ handleClick }: CategoryProps) => {
  const theme = useTheme();
  return (
    <Container>
      <CustomTitleSection
        title={"Shop by Category"}
        subtitle={"Find your favorite by type."}
        rightElement={
          <CustomButton
            text={"View All Category"}
            bgColor={theme.palette.white.main}
            color={theme.palette.black[800]}
            border={""}
            btnBorderColor={theme.palette.success.main}
            onClick={handleClick}
          />
        }
      />
      <ProductCardSection />
    </Container>
  );
};

export default CategorySection;
