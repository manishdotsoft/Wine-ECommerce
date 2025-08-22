import { Box, Typography, IconButton, styled } from "@mui/material";

export const HeaderSection = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
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
