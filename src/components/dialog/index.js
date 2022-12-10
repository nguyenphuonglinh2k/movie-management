import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import { Slide, Dialog } from "@mui/material";
import { makeStyles } from "@mui/styles";
import clsx from "clsx";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function CommonDialog({ children, classes, ...props }) {
  const defaultClasses = useStyles();
  return (
    <Dialog
      TransitionComponent={Transition}
      keepMounted
      PaperProps={{
        classes: { root: clsx(classes?.paper, defaultClasses.paper) },
      }}
      classes={{ root: clsx(classes?.root, defaultClasses.root) }}
      {...props}
    >
      {children}
    </Dialog>
  );
}

CommonDialog.propTypes = {
  classes: PropTypes.object,
};

const useStyles = makeStyles(theme => ({
  paper: {
    minWidth: 454,
    minHeight: 200,
    maxWidth: "90vw",
    boxShadow: "none",
    borderRadius: 16,
    padding: theme.spacing(2.5, 3),
    background: "#242424",
  },
  root: {
    "& .MuiBackdrop-root": {
      backgroundColor: "rgba(0, 0, 0, 0.7)",
    },
  },
}));
