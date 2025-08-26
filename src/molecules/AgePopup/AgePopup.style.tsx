import {
  Box,
  Typography,
  Button,
  Checkbox,
  Dialog,
  DialogContent,
  TextField,
  FormControlLabel,
  FormHelperText,
  styled
} from "@mui/material";

export const LogoImage = styled("img")({
  height: "40px",
  width: "auto",
  objectFit: "contain",
});

export const StyledDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: "16px",
    maxWidth: 450,
    margin: theme.spacing(2),
    boxShadow: theme.shadows[8],
  },
}));

// Dialog content
export const StyledDialogContent = styled(DialogContent)(({ theme }) => ({
  padding: theme.spacing(4),
  paddingBottom: theme.spacing(3),
}));

// Containers
export const Container = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: theme.spacing(2.5),
}));

export const LogoSection = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

// Typography
export const BrandText = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
  fontSize: `${theme.typography.h1}`,
  fontWeight: "bold",
  letterSpacing: "1px",
}));

export const Title = styled(Typography)(({ theme }) => ({
  ...theme.typography.h6,
  fontWeight: "bold",
  color: theme.palette.text.primary,
  textAlign: "center",
}));

export const Subtitle = styled(Typography)(({ theme }) => ({
  ...theme.typography.body2,
  color: theme.palette.text.secondary,
  textAlign: "center",
}));

export const InputLabel = styled(Typography)(({ theme }) => ({
  ...theme.typography.body2,
  color: "gray",
  fontWeight: 500,
  alignSelf: "flex-start",
  "& span": {
    color: "red",
  },
}));

export const Disclaimer = styled(Typography)(({ theme }) => ({
  ...theme.typography.caption,
  color: theme.palette.text.disabled,
  textAlign: "center",
  lineHeight: 1.4,
}));

// Inputs
export const InputSection = styled(Box)(() => ({
  width: "100%",
  display: "flex",
  flexDirection: "column",
}));

export const CheckBoxSection = styled(Box)({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
});

export const StyledTextField = styled(TextField)(({ theme }) => ({
  "& .MuiOutlinedInput-root": {
    borderRadius: theme.shape.borderRadius,
    backgroundColor: theme.palette.background.paper,
    "& fieldset": {
      borderColor: theme.palette.divider,
    },
    "&:hover fieldset": {
      borderColor: theme.palette.text.secondary,
    },
    "&.Mui-focused fieldset": {
      borderColor: theme.palette.primary.main,
    },
  },
  "& .MuiInputBase-input": {
    padding: theme.spacing(1.5, 1.75),
    fontSize: theme.typography.body2.fontSize,
    color: theme.palette.text.primary,
  },
}));

export const StyledCheckbox = styled(Checkbox)(({ theme }) => ({
  color: theme.palette.action.disabled,
  "&.Mui-checked": {
    color: theme.palette.primary.main,
  },
  padding: "4px",
}));

export const StyledFormControlLabel = styled(FormControlLabel)(({ theme }) => ({
  margin: 0,
  "& .MuiFormControlLabel-label": {
    ...theme.typography.body2,
    color: theme.palette.text.secondary,
    marginLeft: theme.spacing(0.5),
  },
}));

// Buttons
export const ButtonsSection = styled(Box)(({ theme }) => ({
  width: "100%",
  display: "flex",
  gap: theme.spacing(1.5),
}));

export const VerifyButton = styled(Button)(({ theme }) => ({
  flex: 1,
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  fontWeight: theme.typography.fontWeightMedium,
  fontSize: theme.typography.body2.fontSize,
  textTransform: "none",
  borderRadius: theme.shape.borderRadius,
  padding: theme.spacing(1.5, 3),
}));

export const ExitButton = styled(Button)(({ theme }) => ({
  flex: 1,
  borderColor: theme.palette.divider,
  color: theme.palette.text.secondary,
  fontWeight: theme.typography.fontWeightMedium,
  fontSize: theme.typography.body2.fontSize,
  textTransform: "none",
  borderRadius: theme.shape.borderRadius,
  padding: theme.spacing(1.5, 3),
  "&:hover": {
    borderColor: theme.palette.text.secondary,
    backgroundColor: theme.palette.action.hover,
  },
}));

// Error text
export const ErrorText = styled(FormHelperText)(({ theme }) => ({
  fontSize: theme.typography.caption.fontSize,
  marginTop: theme.spacing(0.5),
  marginLeft: 0,
  color: `${theme?.palette?.error?.main}!important`,
}));
