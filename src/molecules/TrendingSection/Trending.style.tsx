import { Typography, Box, Button, styled } from "@mui/material";
import { banner_img1 } from "../../assets";

export const Container = styled(Box)(({ theme }) => ({
  width: "100%",
  margin: "0 auto",
  padding: "80px 64px",
  backgroundColor: theme.palette.primary.light,
}));
export const Wrapper = styled(Box)(({}) => ({
  display: "flex",
  justifyContent: "space-between",
  gap: "40px",
}));
export const LeftSectionBox = styled(Box)(({}) => ({
  position: "relative",
  width: "30%",
  height: "100%",
  borderRadius: "16px",
  overflow: "hidden",
  cursor: "pointer",
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
  "&:hover": {
    transform: "translateY(-4px)",
    boxShadow: "0 8px 30px rgba(0, 0, 0, 0.15)",
  },
}));

export const BackgroundImage = styled(Box)({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundImage: `url(${banner_img1})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
});

export const ContentContainer = styled(Box)({
  position: "relative",
  zIndex: 2,
  height: "640px",
  display: "flex",
  flexDirection: "column",
  padding: "32px 24px",
  color: "white",
});

export const TextContent = styled(Box)({
  display: "flex",
  flexDirection: "column",
  gap: "16px",
});

export const Title = styled(Typography)(({ theme }) => ({
  fontSize: `${theme.typography.body1.fontSize}px`,
  fontWeight: 600,
  lineHeight: 1.2,
  color: "white",
}));

export const Description = styled(Typography)({
  fontSize: "16px",
  fontWeight: 400,
  lineHeight: 1.5,
  color: "rgba(255, 255, 255, 0.95)",
  maxWidth: "320px",
});

export const CTAButton = styled(Button)({
  alignSelf: "flex-start",
  backgroundColor: "transparent",
  color: "white",
  fontSize: "16px",
  fontWeight: 500,
  marginTop: "40px",
  padding: "8px 0",
  textTransform: "none",
  border: "none",
  borderRadius: 0,
  borderBottom: "2px solid transparent",
  transition: "border-bottom-color 0.3s ease",
  "&:hover": {
    backgroundColor: "transparent",
    borderBottomColor: "white",
  },
  "& .MuiButton-endIcon": {
    marginLeft: "8px",
    transition: "transform 0.3s ease",
  },
  "&:hover .MuiButton-endIcon": {
    transform: "translateX(4px)",
  },
});

export const RightSectionBox = styled(Box)(({}) => ({
  width: "70%",
  display: "grid",
  gridTemplateColumns: "repeat(2,1fr)",
  gap: "40px",
}));
