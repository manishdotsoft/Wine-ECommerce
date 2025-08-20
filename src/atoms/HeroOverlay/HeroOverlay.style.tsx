import { styled, Box, Typography } from "@mui/material";

export const OverlayContainer = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  display: "flex",
  alignItems: "center",
  zIndex: 2,
  padding: theme.spacing(0, 8),
  [theme.breakpoints.down("md")]: {
    padding: theme.spacing(0, 3),
  },
  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(0, 2),
  },
}));

export const OverlayContentBox = styled(Box)(({ theme }) => ({
  maxWidth: "500px",
  [theme.breakpoints.down("lg")]: {
    maxWidth: "380px",
    marginLeft: theme.spacing(2),
  },
  [theme.breakpoints.down("md")]: {
    maxWidth: "250px",
    marginLeft: 0,
  },
  [theme.breakpoints.down("sm")]: {
    maxWidth: "100%",
  },
}));

export const OverlayButtonGroup = styled(Box)(({ theme }) => ({
  display: "flex",
  marginTop: "32px",
  gap: theme.spacing(2),
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    gap: theme.spacing(1.5),
    "& .MuiButton-root": {
      width: "100%",
    },
  },
}));

export const CustomiseBannerContentWrapper = styled(Box)(({ }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "16px",
}));

export const CustomizeTagBox = styled(Box)(({ theme }) => ({
  borderRadius: "36px",
  backgroundColor: theme.palette?.white[400],
  display: "flex",
  alignItems: "center",
  padding: "12px 8px",
  width: "350px",
  justifyContent: "space-between",
  "& span": {
    backgroundColor: theme.palette.primary?.dark,
    color: theme.palette.common.white,
    fontSize: theme.typography.caption.fontSize,
    boxShadow: `
    0px 4px 6px 2px #FF7399 inset,
    0px -2px 6px 2px #F92B63 inset
  `,
    fontWeight: 600,
    padding: "4px 10px",
    borderRadius: "12px",
    marginRight: "8px",
  },
}));

export const CustomizeTagActionBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "5px",
  fontSize: `${theme?.typography?.body2}`,
}));

export const CustomizeTitleText = styled(Typography)(({ theme }) => ({
  color: theme?.palette?.white?.main,
  fontSize: `${theme.typography.h2.fontSize}px !important`,
  fontWeight: 600,
  lineHeight: "72px",
}));

export const CustomizeSubTitleText = styled(Typography)(({ theme }) => ({
  color: theme.palette.white.main,
  fontSize: `${theme?.typography?.h5?.fontSize}px !important`,
}));
