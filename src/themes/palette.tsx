export const PRIMARY_COLOR = "#c92a2a";
export const SECONDARY_COLOR = "#f0f4ef";
export const PRIMARY_DARK = "#AD1113";
export const PRIMARY_LIGHT = "#FFF3F3";

export const SECONDARY_COLOR_100 = "#f4f7f4";
export const GREY_50 = "#2F2F2F";
export const GREY_150 = "#F5F5F5";
export const GREY_200 = "#4A515C";
export const GREY_400 = "#414651";
export const GREY_300 = "#CACACA";
export const GREY_500 = "rgba(158, 158, 158, 1)";
export const PRIMARY_500 = "#0B9A64";
export const PRIMARY_400 = "#7bc67e";
export const PRIMARY_200 = "#d6efdcbf";
export const WHITE_100 = "rgba(255, 255, 255, 0)";
export const WHITE_200 = "#FFFFFF4D";
export const WHITE_300 = "rgba(255, 255, 255, 0.3)";
export const WHITE_400 = "#FFF7E0";
export const WHITE = "#ffffff";
export const BLACK_800 = "#1A1F29";

export const SECONDARY_ICON = "#0B9A64";
export const ACCENT_ERROR = "#f44336";
export const ACCENT_ERROR_100 = "rgba(255, 220, 218, 0.6)";
export const ICON_COLOR = "#979797";
export const COMMON_DEFAULT = "#ffffff";
export const GRAY_COLOR = "#4A515C";
export const BG_DARK = "#B1B1B1";

export const ICON_LIGHT = "#dadada";
export const TEXT_PRIMARY = "#212121";
export const TEXT_SECONDARY = "#616161";
export const TEXT_DISABLED = "#616161";
export const TEXT_SUCCESS = "#49433D";
export const TEXT_TERTIARY = "#625F5D";
export const COMMON_ERROR = "#9b160c";
export const SUCCESS_COLOR = "#E0E0E0";
export const WARNING_COLOR = "#FFF1DC";
export const WARNING_LIGHT = "#BEA660";
export const TEXT_WARNING = "#BC5A00";
export const CONFIRM_COLOR = "#d6efdcbf";
export const TEXT_CONFIRM = "#3a7c63";
export const RED_ALERT = "#f44336";
export const GREY_TERTIARY = "#737372E5";

export const JUNK_MAIN = "#542DBA";

const palette = {
  primary: {
    main: PRIMARY_COLOR,
    contrastText: COMMON_DEFAULT,
    dark: PRIMARY_DARK,
    light: PRIMARY_LIGHT,
    200: PRIMARY_200,
    400: PRIMARY_400,
    500: PRIMARY_500,
  },
  junk: {
    main: JUNK_MAIN,
  },
  secondary: {
    main: SECONDARY_COLOR,
    contrastText: COMMON_DEFAULT,
    100: SECONDARY_COLOR_100,
  },
  grey: {
    main: GRAY_COLOR,
    tertiary: GREY_TERTIARY,
    50: GREY_50,
    100: GRAY_COLOR,
    200: GREY_200,
    300: GREY_300,
    400: GREY_400,
    500: GREY_500,
  },
  white: {
    main: WHITE,
    100: WHITE_100,
    200: WHITE_200,
    300: WHITE_300,
    400: WHITE_400,
  },
  black: {
    800: BLACK_800,
  },
  error: {
    main: ACCENT_ERROR,
    contrastText: COMMON_ERROR,
    alert: RED_ALERT,
    100: ACCENT_ERROR_100,
  },
  success: {
    main: SUCCESS_COLOR,
    contrastText: TEXT_SUCCESS,
  },
  warning: {
    main: WARNING_COLOR,
    light: WARNING_LIGHT,
    contrastText: TEXT_WARNING,
  },
  confirm: {
    main: CONFIRM_COLOR,
    contrastText: TEXT_CONFIRM,
  },
  icon: {
    main: ICON_COLOR,
    secondary: SECONDARY_ICON,
  },
  text: {
    primary: TEXT_PRIMARY,
    secondary: TEXT_SECONDARY,
    tertiary: TEXT_TERTIARY,
    disabled: TEXT_DISABLED,
  },
  background: {
    default: WHITE,
    bg_dark: BG_DARK,
  },
};

export default palette;
