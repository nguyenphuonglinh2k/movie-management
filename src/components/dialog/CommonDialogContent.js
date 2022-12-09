import React from "react";
import clsx from "clsx";
import PropTypes from "prop-types";
import { DialogContent as MuiDialogContent } from "@mui/material";
import { makeStyles } from "@mui/styles";

const DialogContent = ({ className, children, ...otherProps }) => {
  const classes = useStyles();
  return (
    <MuiDialogContent className={clsx(classes.root, className)} {...otherProps}>
      {children}
    </MuiDialogContent>
  );
};

DialogContent.propTypes = {
  className: PropTypes.string,
};

export default DialogContent;

const useStyles = makeStyles(() => ({
  root: {
    paddingLeft: 0,
    paddingRight: 0,
  },
}));
