import React from "react";
import clsx from "clsx";
import PropTypes from "prop-types";
import { DialogTitle as MuiDialogTitle } from "@mui/material";
import { makeStyles } from "@mui/styles";

const DialogTitle = ({ className, children, ...props }) => {
  const classes = useStyles();
  return (
    <MuiDialogTitle className={clsx(classes.root, className)} {...props}>
      {children}
    </MuiDialogTitle>
  );
};

DialogTitle.propTypes = {
  className: PropTypes.string,
};

export default DialogTitle;

const useStyles = makeStyles(() => ({
  root: {
    fontSize: 24,
    padding: 0,
    paddingBottom: 16,
  },
}));
