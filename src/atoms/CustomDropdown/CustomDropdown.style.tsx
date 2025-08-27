import { FormControl, Typography, styled } from "@mui/material";

export const StyledFormControl = styled(FormControl)(({ theme }) => ({
  "& .MuiOutlinedInput-root": {
    backgroundColor: theme.palette.white.main,
    borderRadius: "8px",
    "& fieldset": {
      borderColor: theme.palette.success.main,
    },
    "&:hover fieldset": {
      borderColor: "#bdbdbd",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#1976d2",
    },
  },
  "& .MuiSelect-select": {
    padding: "12px 14px",
    fontSize: "14px",
  },
}));

export const StyledLabel = styled(Typography)(({ theme }) => ({
  color: theme.palette.grey[50],
  fontSize: "14px",
  marginBottom: "8px",
  fontWeight: 400,
}));
