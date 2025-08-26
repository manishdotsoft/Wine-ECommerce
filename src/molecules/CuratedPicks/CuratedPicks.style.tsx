import { Box, Typography, styled } from "@mui/material";

export const Container = styled(Box)(({}) => ({
  width: "100%",
  margin: "0 auto",
  padding: "80px 64px",
}));
export const HeaderSection = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
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

export const StyledContainer = styled(Box)(({}) => ({
  position: "relative",
}));

export const StyledOverlay = styled(Box)(({}) => ({
  position: "absolute",
  top: "30px",
  left: "-10px",
  right: 0,
  bottom: 0,
  height: "140px",
  width: "140px",
  backgroundColor: "rgba(252, 231, 243, 0.5)",
  borderRadius: "50%",
  zIndex: -1,
}));

export const StyledGridContainer = styled(Box)(({ theme }) => ({
  position: "relative",
  zIndex: 10,
  padding: "32px",
  display: "flex",
  justifyContent: "space-between",
}));

export const StyledWineItem = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  cursor: "pointer",
  "&:hover .wine-image": {
    transform: "scale(1.05)",
  },
}));

export const StyledImageContainer = styled(Box)(({ theme }) => ({
  position: "relative",
  marginBottom: "16px",
  transition: "transform 0.3s ease",
  filter: "drop-shadow(0 10px 8px rgb(0 0 0 / 0.04)) drop-shadow(0 4px 3px rgb(0 0 0 / 0.1))",
}));

export const StyledCategoryLabel = styled(Typography)(({ theme }) => ({
  textAlign: "center",
  fontWeight: 600,
  color: "#1f2937",
  fontSize: "0.875rem",
  [theme.breakpoints.up("md")]: {
    fontSize: "1rem",
  },
}));
