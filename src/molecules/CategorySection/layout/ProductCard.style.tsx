import { styled, Box, Card, CardContent, Typography, Grid } from "@mui/material";

export const CustomizeCardWrapper = styled(Grid)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "repeat(4,1fr)",
  gap: theme.spacing(3),
}));

export const StyledCard = styled(Card)(({}) => ({
  position: "relative",
  borderRadius: "24px",
  overflow: "hidden",
  cursor: "pointer",
}));

export const ImageWrapper = styled(Box)(() => ({
  position: "relative",
  borderRadius: "12px",
  overflow: "hidden",
  paddingTop: "140%",
  width: "100%",
}));

export const OverlayContent = styled(CardContent)(({ theme }) => ({
  position: "absolute",
  bottom: 0,
  left: 0,
  right: 0,
  zIndex: 1,
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-end",
  color: theme.palette.white.main,
  padding: theme.spacing(3),
  gap: theme.spacing(1),
  background: "linear-gradient(to top, rgba(0,0,0,0.6), rgba(0,0,0,0))",
}));

export const Title = styled(Typography)(() => ({
  fontWeight: 600,
}));

export const SubTitle = styled(Typography)(() => ({
  opacity: 0.9,
}));
