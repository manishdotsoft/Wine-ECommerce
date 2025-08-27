import { Box, styled, Typography, Button } from "@mui/material";

export const Container = styled(Box)(({ theme }) => ({
  width: "100%",
  margin: "0 auto",
  padding: "80px 64px",
}));

export const ImageWrapper = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  gap: "40px",
  marginTop: "40px",
  flexWrap: "wrap",
});
