"use client";

import type React from "react";
import { Typography, Button, Box, useTheme } from "@mui/material";
import {
  OverlayContainer,
  OverlayContentBox,
  OverlayButtonGroup,
  CustomizeTagBox,
  CustomizeTagActionBox,
  CustomizeTitleText,
  CustomizeSubTitleText,
  CustomiseBannerContentWrapper,
} from "./HeroOverlay.style";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import CustomButton from "../CustomButton/CustomButton";

export interface HeroOverlayProps {
  title: string;
  subtitle: string;
  firstBtnText: string;
  secondBtnText: string;
  onFirstBtnClick: () => void;
  onSecondBtnClick: () => void;
  tagText?: string;
  tagActionText: string;
}

const HeroOverlay: React.FC<HeroOverlayProps> = ({
  title,
  subtitle,
  firstBtnText,
  secondBtnText,
  onFirstBtnClick,
  onSecondBtnClick,
  tagText,
  tagActionText,
}) => {
  const theme = useTheme();
  return (
    <OverlayContainer>
      <OverlayContentBox>
        <CustomiseBannerContentWrapper>
          {tagText && (
            <CustomizeTagBox>
              <span>{tagText}</span>
              <CustomizeTagActionBox>
                {tagActionText}
                <KeyboardArrowRightIcon />
              </CustomizeTagActionBox>
            </CustomizeTagBox>
          )}

          <CustomizeTitleText>{title}</CustomizeTitleText>
          <CustomizeSubTitleText>{subtitle}</CustomizeSubTitleText>
        </CustomiseBannerContentWrapper>

        <OverlayButtonGroup>
          <CustomButton
            text={firstBtnText}
            onClick={onFirstBtnClick}
            bgColor={theme?.palette?.primary?.dark}
            color={theme?.palette?.white?.main}
          />
          <CustomButton
            text={secondBtnText}
            onClick={onSecondBtnClick}
            bgColor={theme?.palette?.primary?.light}
            color={theme?.palette?.primary?.dark}
            border={theme?.palette?.grey?.light}
          />
        </OverlayButtonGroup>
      </OverlayContentBox>
    </OverlayContainer>
  );
};

export default HeroOverlay;
