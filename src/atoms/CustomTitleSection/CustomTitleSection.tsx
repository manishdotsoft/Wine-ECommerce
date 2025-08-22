import React, { type ReactNode } from "react";
import { HeaderSection, Title, Subtitle } from "./CustomTitleSection.style";
import { Box } from "@mui/material";

interface CustomTitleSectionProps {
  title: string;
  subtitle?: string;
  rightElement?: ReactNode;
}

const CustomTitleSection = ({ title, subtitle, rightElement }: CustomTitleSectionProps) => {
  return (
    <HeaderSection>
      <Box>
        <Title>{title}</Title>
        {subtitle && <Subtitle>{subtitle}</Subtitle>}
      </Box>
      {rightElement && <Box>{rightElement}</Box>}
    </HeaderSection>
  );
};

export default CustomTitleSection;
