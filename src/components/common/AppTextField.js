import React, { memo } from "react";
import PropTypes from "prop-types";
import { TextField } from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";
import clsx from "clsx";

const AppTextField = ({ InputProps, InputLabelProps, ...otherProps }) => {
  const { classes: inputClasses, ...otherInputProps } = InputProps;
  const { classes: inputLabelClasses, ...otherInputLabelProps } = InputLabelProps;

  const classes = useStyles();

  return (
    <TextField
      fullWidth
      InputProps={{
        classes: {
          ...inputClasses,
          root: clsx(classes.inputRoot, inputClasses?.root),
          input: clsx(classes.input, inputClasses?.input),
          focused: clsx(classes.inputFocused, inputClasses?.focused),
        },
        ...otherInputProps,
      }}
      InputLabelProps={{
        classes: {
          ...inputLabelClasses,
          root: clsx(classes.inputLabelRoot, inputLabelClasses?.root),
          focused: clsx(classes.inputLabelFocused, inputLabelClasses?.focused),
        },
        ...otherInputLabelProps,
      }}
      {...otherProps}
    />
  );
};

AppTextField.propTypes = {
  InputProps: PropTypes.shape({
    classes: PropTypes.object,
  }),
  InputLabelProps: PropTypes.shape({
    classes: PropTypes.object,
  }),
};

AppTextField.defaultProps = {
  InputProps: { classes: {} },
  InputLabelProps: { classes: {} },
};

export default memo(AppTextField);

const useStyles = makeStyles(theme => ({
  inputRoot: {
    "&$inputRoot": {
      borderRadius: 6,
      background: theme.palette.common.black,
      "& [class*='notchedOutline']": {
        padding: 0,
        border: "none",
        "& legend": {
          width: 0,
        },
      },
      "&:hover [class*='notchedOutline']": {
        border: `1px solid ${theme.palette.error.dark}`,
      },
    },
  },
  inputFocused: {
    "&$input [class*='notchedOutline']": {
      border: `1px solid ${theme.palette.error.dark}`,
    },
  },
  inputLabelRoot: {
    color: theme.palette.text.primary,
    position: "relative",
    transform: "initial",
  },
  inputLabelFocused: {
    "&$inputLabelRoot": {
      color: theme.palette.text.primary,
    },
  },
  input: {
    "&$input": {
      padding: theme.spacing(1.5),

      "&:-webkit-autofill": {
        "-webkit-box-shadow": `0 0 0 100px ${theme.palette.background.default} inset`,
        borderRadius: "unset",
      },
      "&:hover::placeholder": {
        color: theme.palette.common.white,
        opacity: 1,
      },
    },
  },
}));
