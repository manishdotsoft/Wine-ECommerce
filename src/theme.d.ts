// theme.d.ts
import "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    white: {
      main: string;
      100?: string;
      200?: string;
      300?: string;
      400?: string;
    };
    junk: {
      main: string;
    };
    confirm: {
      main: string;
      contrastText: string;
    };
    icon: {
      main: string;
      secondary?: string;
    };
    black: {
      800: string;
    };
  }

  interface PaletteOptions {
    white?: {
      main: string;
      100?: string;
      200?: string;
      300?: string;
      400?: string;
    };
    junk?: {
      main: string;
    };
    confirm?: {
      main: string;
      contrastText: string;
    };
    icon?: {
      main: string;
      secondary?: string;
    };
    black?: {
      800?: string;
    };
  }
}
