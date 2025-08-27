import { Box, Button, styled, Typography } from "@mui/material";

export const NewsletterContainer = styled(Box)(({ theme }) => ({
  width: "100%",
  margin: "0 auto",
  padding: "0px 80px 32px 80px",
  backgroundColor: theme.palette.primary.light,
}));

export const CustomizeTitleText = styled(Typography)(({ theme }) => ({
  marginBottom: "24px",
  fontWeight: 600,
  color: theme.palette.black[800],
}));

export const SubscribeButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.white.main,
  padding: "12px 24px",
  borderRadius: "8px",
  textTransform: "none",
  fontSize: "16px",
  fontWeight: 600,
}));

export const WrapperBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.white.main,
  borderRadius: "24px",
  border: `1px solid ${theme.palette.success.main}`,
  padding: "24px",
}));

export const CustomizedGrid = styled(Box)(() => ({
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: "24px",
  marginTop: "24px",
}));
export const BtnWrapperBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "20px",
  paddingTop: "20px",
});

export const CustomizeUnsubscribeText = styled(Typography)(({ theme }) => ({
  color: theme.palette.grey[400],
  fontSize: "14px",
  display: "block",
}));
