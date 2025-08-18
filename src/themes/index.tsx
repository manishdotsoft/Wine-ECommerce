import * as React from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { theme } from "./theme";

const Theme = (props: { children: React.ReactNode }): React.ReactNode => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {props.children}
    </ThemeProvider>
  );
};

export default Theme;
