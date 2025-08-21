import { Typography, Box, styled } from "@mui/material";

export const CardWrapper = styled(Box)(({ theme }) => ({
  height: "300px",
  width: "100%",
  padding: "32px",
  backgroundColor: theme.palette.white.main,
  border: `1px solid ${theme.palette.success.main}`,
  borderRadius: "24px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
}));

export const CartTitleText = styled(Typography)(({ theme }) => ({
  fontSize: `${theme.typography.body1.fontSize}px`,
  color: theme.palette.black[800],
  fontWeight: 600,
}));

export const SubTitleText = styled(Typography)(({ theme }) => ({
  fontSize: `${theme.typography.body2}px`,
  color: theme.palette.grey[200],
  marginTop: "32px",
  minHeight: "80px",
}));

export const BtnWrapperBox = styled(Box)({
  marginTop: "40px",
});
