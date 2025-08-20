import {
  styled,
  Box,
  Menu,
  MenuItem,
  InputBase,
  Typography,
  IconButton,
  Toolbar,
  AppBar,
} from "@mui/material";

// 🔴 Top Bar
export const TopBar = styled(Box)(({ theme }) => ({
  backgroundColor: theme?.palette?.primary?.dark,
  padding: "6px 16px",
}));

export const CustomiseOfferText = styled(Typography)(({ theme }) => ({
  color: theme?.palette.white.main,
  fontWeight: 400,
  fontSize: `${theme?.typography?.subtitle2?.fontSize}px !important`,
  "& span": {
    textDecoration: "underline",
    cursor: "pointer",
    marginLeft: "5px",
  },
}));

export const TopBarContent = styled(Box)(() => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

// 🔴 AppBar
export const StyledAppBar = styled(AppBar)(() => ({
  position: "static",
  backgroundColor: "#fff !important",
  boxShadow: "none",
}));

export const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  justifyContent: "space-between",
  flexWrap: "wrap",
  padding: "16px 0px !important",
  margin: "0px 64px",
  borderBottom: `1px solid ${theme.palette.success.main}`,
}));

export const BottomToolbar = styled(Toolbar)(({ theme }) => ({
  justifyContent: "space-between",
  background: theme.palette.white.main,
  gap: "40px",
  padding: "20px 64px !important",
}));

// 🔴 Logo
export const Logo = styled("img")(() => ({
  height: "40px",
  cursor: "pointer",
}));

// 🔴 Search
export const SearchBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: "4px 12px",
  borderRadius: "8px",
  minWidth: "300px",
  border: `1px solid ${theme.palette.success.main}`,
  width: "400px",
}));

export const StyledInput = styled(InputBase)(() => ({
  marginLeft: "8px",
  flex: 1,
  color: "#4A515C", // text color
  "& input::placeholder": {
    color: "#4A515C", // placeholder color
    opacity: 1,
  },
}));

// 🔴 Nav Menus
export const NavWrapper = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  gap: "40px",
}));

export const NavMenu = styled(Box)(({ theme }) => ({
  cursor: "pointer",
  fontWeight: 500,
  fontSize: "15px",
  "&:hover": {
    color: theme.palette.primary.dark,
  },
}));

export const HighlightMenu = styled(Box)(({ theme }) => ({
  cursor: "pointer",
  fontWeight: 600,
  fontSize: "15px",
  color: theme.palette.warning.light,
}));

// 🔴 Dropdown
export const DropdownTrigger = styled(Box)(({ theme }) => ({
  cursor: "pointer",
  padding: "6px 12px",
  borderRadius: "8px",
  border: "1px solid #ddd",
  display: "flex",
  alignItems: "center",
  fontSize: "14px",
  fontWeight: 500,
  "&:hover": {
    backgroundColor: theme.palette.primary.light,
  },
}));

export const DropdownTriggerNoBorder = styled(DropdownTrigger)(() => ({
  border: "none",
}));

export const DropdownTriggerWithGap = styled(DropdownTrigger)(() => ({
  display: "flex",
  gap: "10px",
}));

export const DropdownTriggerWithIconMargin = styled(DropdownTrigger)(() => ({
  display: "flex",
  alignItems: "center",
  gap: "8px",
  "& img": {
    marginRight: "0px",
  },
}));

export const StyledMenu = styled(Menu)(() => ({
  "& .MuiPaper-root": {
    borderRadius: "8px",
    marginTop: "8px",
    minWidth: "168px",
  },
}));

export const DropdownMenuItem = styled(MenuItem)(() => ({
  fontSize: "14px",
}));

// 🔴 Right Section
export const RightNavSection = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  gap: "16px",
}));

export const CustomizeIconButton = styled(IconButton)(({ theme }) => ({
  color: theme.palette.white.main,
  border: `1px solid ${theme.palette.success.main} !important`,
  padding: "8px",
  borderRadius: "16px",
}));

export const IconGroup = styled(Box)(() => ({
  display: "flex",
  gap: "16px",
  marginTop: "8px",
}));
