import { styled, Box } from "@mui/material";

export const HeroBannerContainer = styled(Box)(({}) => ({
  position: "relative",
  width: "99vw",
  height: "calc(100vh - 197px)",
  overflow: "hidden",
  cursor: "grab",
  "&:active": {
    cursor: "grabbing",
  },
}));

export const SlideContainer = styled(Box)<{ isActive: boolean }>(({ isActive }) => ({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  opacity: isActive ? 1 : 0,
  transition: "opacity 0.8s ease-in-out",
  zIndex: isActive ? 1 : 0,
}));

export const SlideBackground = styled(Box)<{ backgroundImage: string }>(({ backgroundImage }) => ({
  width: "100%",
  height: "100%",
  backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${backgroundImage})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
}));

export const DotsContainer = styled(Box)(({ theme }) => ({
  position: "absolute",
  bottom: theme.spacing(3),
  left: "50%",
  transform: "translateX(-50%)",
  display: "flex",
  gap: theme.spacing(1),
  zIndex: 3,
  [theme.breakpoints.down("sm")]: {
    bottom: theme.spacing(2),
  },
}));

export const Dot = styled(Box)<{ isActive: boolean }>(({ theme, isActive }) => ({
  width: !isActive ? 12 : 32,
  height: 12,
  borderRadius: !isActive ? "50%" : "8px",
  backgroundColor: isActive ? theme.palette.primary.main : theme?.palette.warning.light,
  cursor: "pointer",
  transition: "all 0.3s ease",
  border: `2px solid ${theme.palette.white.main}`,
  "&:hover": {
    backgroundColor: isActive ? theme.palette.primary.main : "rgba(255,255,255,0.8)",
    transform: "scale(1.1)",
  },
  [theme.breakpoints.down("sm")]: {
    width: 10,
    height: 10,
  },
}));
