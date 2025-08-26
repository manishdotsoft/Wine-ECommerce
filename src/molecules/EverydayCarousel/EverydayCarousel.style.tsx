import { Box, styled, Typography, Button } from "@mui/material";

export const Container = styled(Box)(({ theme }) => ({
  width: "100%",
  margin: "0 auto",
  padding: "80px 64px",
  backgroundColor: theme.palette.primary.light,
  position: "relative",
}));

export const CarouselSlide = styled(Box)(({ theme }) => ({
  background: "linear-gradient(135deg, #8B4513 0%, #A0522D 100%)",
  borderRadius: "16px",
  padding: "40px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  minHeight: "160px",
  position: "relative",
  overflow: "hidden",
  "&::before": {
    content: '""',
    position: "absolute",
    top: "20px",
    right: "60px",
    width: "80px",
    height: "80px",
    background: "rgba(255, 255, 255, 0.1)",
    borderRadius: "50%",
    filter: "blur(20px)",
  },
  "&::after": {
    content: '""',
    position: "absolute",
    bottom: "10px",
    right: "120px",
    width: "40px",
    height: "40px",
    background: "rgba(255, 255, 255, 0.08)",
    borderRadius: "50%",
    filter: "blur(15px)",
  },
}));

export const ContentSection = styled(Box)(({ theme }) => ({
  flex: 1,
  paddingRight: "32px",
}));

export const SlideTitle = styled(Typography)(({ theme }) => ({
  fontSize: "1.5rem",
  fontWeight: "bold",
  color: theme.palette.white.main,
  marginBottom: "12px",
}));

export const SlideDescription = styled(Typography)(({ theme }) => ({
  fontSize: "1rem",
  color: "rgba(255, 255, 255, 0.9)",
  lineHeight: 1.5,
  maxWidth: "500px",
}));

export const PriceButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.white.main,
  color: theme.palette.primary.dark,
  borderRadius: "12px",
  padding: "8px 20px",
  fontSize: "0.875rem",
  fontWeight: "600",
  textTransform: "none",
  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.15)",
}));

export const DotsContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  gap: "8px",
  marginTop: "20px",
  position: "absolute",
  left: "50%",
  bottom: "100px",
}));

export const Dot = styled(Box)<{ active: boolean }>(({ theme, active }) => ({
  width: active ? "24px" : "12px",
  height: "12px",
  borderRadius: active ? "12px" : "50%",
  border: `1px solid ${theme.palette.white.main}`,
  backgroundColor: active ? theme.palette.primary.dark : theme.palette.warning.light,
  cursor: "pointer",
  transition: "all 0.3s ease",
}));

export const IconWrapper = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.dark,
  color: theme?.palette?.primary.dark,
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "28px",
  height: "28px",
  marginLeft: "8px",
}));
