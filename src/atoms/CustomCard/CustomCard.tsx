import React from "react";
import { CardWrapper, CartTitleText, SubTitleText, BtnWrapperBox } from "./CustomCard.style";
import CustomButton from "../CustomButton/CustomButton";
import { useTheme } from "@mui/material";

interface CustomCardProps {
  title: string;
  subTitle: string;
  btnText: string;
  handleClick: () => void;
}

const CustomCard = ({ title, subTitle, btnText, handleClick }: CustomCardProps) => {
  const theme = useTheme();
  return (
    <CardWrapper>
      <CartTitleText>{title}</CartTitleText>
      <SubTitleText>{subTitle}</SubTitleText>
      <BtnWrapperBox>
        <CustomButton
          text={btnText}
          bgColor={theme.palette.primary.dark}
          onClick={handleClick}
          color=""
          border=""
        />
      </BtnWrapperBox>
    </CardWrapper>
  );
};

export default CustomCard;
