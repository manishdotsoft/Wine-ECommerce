import { Box, Typography, IconButton, styled } from "@mui/material";

export const CarouselContainer = styled(Box)(({}) => ({
  width: "100%",
  margin: "0 auto",
  padding: "80px 64px",
}));

export const HeaderSection = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(3),
}));

export const Title = styled(Typography)(({ theme }) => ({
  fontSize: "32px",
  fontWeight: 600,
  color: theme.palette.black[800],
  marginBottom: theme.spacing(1),
}));

export const Subtitle = styled(Typography)(({ theme }) => ({
  fontSize: "24px",
  color: theme.palette.grey[200],
  fontWeight: 400,
}));
export const CarouselWrapper = styled(Box)({
  position: "relative",
  overflow: "hidden",
  width: "100%",
  paddingTop: "48px",
});

// Carousel track
export const CarouselTrack = styled(Box)<{ currentIndex: number }>(({ currentIndex }) => ({
  display: "flex",
  gap: "24px",
  transform: `translateX(-${currentIndex * 33.33}%)`,
  transition: "transform 0.3s ease-in-out",
}));

// Carousel slide with aspect ratio
export const CarouselSlide = styled(Box)({
  minWidth: "32%",
  boxSizing: "border-box",
  position: "relative",
});

// Offer card
export const OfferCard = styled(Box)({
  position: "relative",
  borderRadius: "12px",
  overflow: "hidden",
  cursor: "pointer",
  paddingTop: "66%",
  transition: "transform 0.2s ease-in-out",
  "&:hover": {
    transform: "scale(1.02)",
  },
});

// Image inside card
export const CardImage = styled("img")({
  position: "absolute",
  inset: 0,
  width: "100%",
  height: "100%",
  objectFit: "cover",
});

// Optional overlay for text or buttons
export const CardOverlay = styled(Box)({
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  background: "linear-gradient(135deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.4) 100%)",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  padding: "20px",
  textAlign: "center",
});
export const OfferText = styled(Typography)({
  color: "#fff",
  fontSize: "1.5rem",
  fontWeight: 700,
  marginBottom: "8px",
  textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
});

export const OfferSubtext = styled(Typography)({
  color: "#fff",
  fontSize: "0.9rem",
  fontWeight: 400,
  opacity: 0.9,
  textShadow: "1px 1px 2px rgba(0,0,0,0.5)",
});

export const HighlightText = styled("span")({
  color: "#4CAF50",
  fontSize: "2rem",
  fontWeight: 800,
});

export const NavigationButton = styled(IconButton)(({}) => ({
  position: "absolute",
  top: "50%",
  transform: "translateY(-50%)",
  backgroundColor: "rgba(255,255,255,0.9)",
  color: "#333",
  width: "40px",
  height: "40px",
  zIndex: 2,
  "&:hover": {
    backgroundColor: "rgba(255,255,255,1)",
  },
}));

export const PrevButton = styled(NavigationButton)({
  left: "10px",
});

export const NextButton = styled(NavigationButton)({
  right: "10px",
});

export const DotsContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  gap: theme.spacing(1),
  marginTop: theme.spacing(2),
}));

export const Dot = styled(Box)<{ active: boolean }>(({ active, theme }) => ({
  width: active ? "32px" : "12px",
  height: "12px",
  borderRadius: active ? "8px" : "50%",
  backgroundColor: active ? theme.palette.primary.dark : theme.palette.warning.light,
  cursor: "pointer",
  transition: "background-color 0.2s ease-in-out",
  "&:hover": {
    backgroundColor: active ? theme.palette.primary.dark : theme.palette.warning.light,
  },
}));
