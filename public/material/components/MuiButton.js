import palette from "../palette";
import typography from "../typography";

const mediumStyle = {
  padding: "8px 31px",
  borderRadius: 6,
};

const containedMediumStyle = {
  minWidth: 180,
};

const textSizeMedium = typography.h5;

export default {
  styleOverrides: {
    root: {
      textTransform: "none",
      fontSize: 16,
      ...mediumStyle,
      ...textSizeMedium,
    },

    contained: {
      ...containedMediumStyle,
      border: "none",
    },
    containedPrimary: {
      backgroundColor: palette.error.dark,
      "&:hover": {
        backgroundColor: palette.error.dark,
      },
    },
  },
};
