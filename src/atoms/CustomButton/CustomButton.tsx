import React from "react";
import NorthEastIcon from "@mui/icons-material/NorthEast";
import { StyledButton, ButtonText, IconWrapper } from "./CustomButton.style";

interface CustomButtonProps {
  text: string;
  bgColor: string;
  onClick: () => void;
  color: string;
  border?: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  text,
  bgColor,
  onClick,
  color = "",
  border = "",
}) => {
  return (
    <StyledButton onClick={onClick} bgColor={bgColor}>
      <ButtonText style={{ color }}>{text}</ButtonText>
      <IconWrapper border={border}>
        <NorthEastIcon fontSize="small" />
      </IconWrapper>
    </StyledButton>
  );
};

export default CustomButton;
