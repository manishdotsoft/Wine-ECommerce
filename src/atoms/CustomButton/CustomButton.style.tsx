import { Button, Box, Typography, styled } from "@mui/material";

export const StyledButton = styled(Button)<{ bgColor: string; btnBorderColor: string }>(
  ({ bgColor, btnBorderColor, theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: bgColor,
    color: theme.palette.white.main,
    borderRadius: "12px",
    border: btnBorderColor ? `1px solid ${btnBorderColor}` : "",
    padding: "16px 12px 16px 20px",
    textTransform: "none",
    fontWeight: 600,
    minWidth: "150px",
    "&:hover": {
      backgroundColor: bgColor,
      opacity: 0.9,
    },
  })
);

export const ButtonText = styled(Typography)(({ theme }) => ({
  fontWeight: "500",
  fontSize: `${theme?.typography?.body2}px !important`,
}));

export const IconWrapper = styled(Box)<{ border: string }>(({ theme, border }) => ({
  backgroundColor: theme.palette.white.main,
  color: theme?.palette?.primary.dark,
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "28px",
  height: "28px",
  marginLeft: "8px",
  border: border ? `1px solid ${border}` : "",
}));
