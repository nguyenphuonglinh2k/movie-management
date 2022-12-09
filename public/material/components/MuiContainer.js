import { createTheme } from "@mui/material";
import breakpoints from "../breakpoints";
const customBreakpoints = createTheme({ breakpoints }).breakpoints;
const maxWidth = 1440;

export default {
  styleOverrides: {
    root: {
      [customBreakpoints.up(maxWidth)]: {
        paddingLeft: 40,
        paddingRight: 40,
      },
    },
    maxWidthLg: {
      maxWidth: maxWidth,
      [customBreakpoints.up("lg")]: {
        maxWidth: maxWidth,
      },
    },
  },
};
