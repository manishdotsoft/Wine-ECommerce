import { styled } from "@mui/material/styles";
import { Box, Typography, Link, Grid } from "@mui/material";
import IconButton, { type IconButtonProps } from "@mui/material/IconButton";

export const FooterContainer = styled(Box)(({ theme }) => ({
  width: "100%",
  margin: "0 auto",
  padding: "24px 80px 32px 80px",
}));

export const InnerWrapper = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
});

export const LogoImage = styled("img")({
  height: "40px",
  width: "auto",
  objectFit: "contain",
});

export const CustomizedGrid = styled(Grid)(() => ({
  width: "200px",
}));

export const SocialIconsContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "22px",
}));

export const StyledIconButton = styled((props: IconButtonProps) => <IconButton {...props} />)(
  ({ theme }) => ({
    border: `1px solid ${theme.palette.primary.dark}`,
    background: theme.palette.primary.light,
    borderRadius: "6px",
    width: 36,
    height: 36,
    marginTop: "18px",
    "&:hover": {
      backgroundColor: "rgba(255, 255, 255, 0.1)",
    },
  })
);

export const SectionTitle = styled(Typography)(({ theme }) => ({
  fontWeight: "bold",
  marginBottom: theme.spacing(2),
  fontSize: "1rem",
}));

export const LinksContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(1),
}));

export const StyledLink = styled(Link)(({ theme }) => ({
  textDecoration: "none",
  color: theme.palette.grey[200],
  fontSize: "0.875rem",
  "&:hover": {
    textDecoration: "underline",
  },
}));
