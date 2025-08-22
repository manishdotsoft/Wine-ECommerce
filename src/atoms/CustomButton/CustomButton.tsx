import React from "react";
import NorthEastIcon from "@mui/icons-material/NorthEast";
import { StyledButton, ButtonText, IconWrapper } from "./CustomButton.style";

interface CustomButtonProps {
  text: string;
  bgColor: string;
  onClick: () => void;
  color: string;
  border?: string;
  btnBorderColor?: string;
}

const CustomButton = ({
  text,
  bgColor,
  onClick,
  color = "",
  border = "",
  btnBorderColor = "",
}: CustomButtonProps) => {
  return (
    <StyledButton onClick={onClick} bgColor={bgColor} btnBorderColor={btnBorderColor}>
      <ButtonText style={{ color }}>{text}</ButtonText>
      <IconWrapper border={border}>
        <NorthEastIcon fontSize="small" />
      </IconWrapper>
    </StyledButton>
  );
};

export default CustomButton;
