import { createTheme } from "@mui/material/styles";
import palette from "./palette";
import shape from "./shape";
import typeset from "./typeset";

export const theme = createTheme({
  palette,
  shape,
  typography: typeset,
});
