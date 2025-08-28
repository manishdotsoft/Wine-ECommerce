import { TextField, Select, Typography, styled } from "@mui/material";

export const StyledTextField = styled(TextField)(({ theme }) => ({
  "& .MuiOutlinedInput-root": {
    backgroundColor: theme.palette.white.main,
    borderRadius: "8px",
    "& fieldset": {
      borderColor: "#e0e0e0",
    },
    "&:hover fieldset": {
      borderColor: "#bdbdbd",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#1976d2",
    },
  },
  "& .MuiInputLabel-root": {
    color: "#666666",
    fontSize: "14px",
  },
  "& .MuiOutlinedInput-input": {
    padding: "12px 14px",
    fontSize: "14px",
  },
}));

export const CountrySelect = styled(Select)(({ theme }) => ({
  "& .MuiSelect-select": {
    padding: "0 8px",
    fontSize: "14px",
    minWidth: "50px",
    marginRight: "8px",
  },
  "& .MuiOutlinedInput-notchedOutline": {
    border: "none",
  },
}));

export const StyledLabel = styled(Typography)(({ theme }) => ({
  color: theme.palette.grey[50],
  fontSize: "14px",
  marginBottom: "8px",
  fontWeight: 400,
}));
