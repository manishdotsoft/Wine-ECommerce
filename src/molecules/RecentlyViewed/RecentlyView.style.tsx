import { Box, styled } from "@mui/material";

export const Container = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.light,
  width: "100%",
  margin: "0 auto",
  padding: "80px 64px",
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
