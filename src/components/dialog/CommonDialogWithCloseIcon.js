import React from "react";
import { DialogActions, Button, IconButton } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { CommonDialog, CommonDialogTitle as DialogTitle, CommonDialogContent as DialogContent } from "components";
import PropTypes from "prop-types";
import { TimesIcon } from "icons";
import clsx from "clsx";

const CommonDialogWithCloseIcon = ({
  children,
  title,
  buttonText,
  onClick,
  onClose,
  buttonComponent,
  classes,
  ...props
}) => {
  const defaultClasses = useStyles();

  return (
    <CommonDialog onClose={onClose} classes={{ paper: clsx(classes?.paper, defaultClasses.root) }} {...props}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>{children}</DialogContent>

      <DialogActions className={clsx(defaultClasses.actions, classes?.actions)}>
        {buttonComponent}
        <Button variant="contained" onClick={onClick}>
          {buttonText}
        </Button>
      </DialogActions>

      <IconButton onClick={onClose} className={defaultClasses.icon}>
        <TimesIcon sx={{ fontSize: 18 }} />
      </IconButton>
    </CommonDialog>
  );
};

export default CommonDialogWithCloseIcon;

CommonDialogWithCloseIcon.propTypes = {
  title: PropTypes.string,
  buttonText: PropTypes.string,
  onClick: PropTypes.func,
  onClose: PropTypes.func,
  buttonComponent: PropTypes.node,
  classes: PropTypes.object,
};

const useStyles = makeStyles(() => ({
  root: {
    position: "relative",
  },
  icon: {
    position: "absolute",
    top: 8,
    right: 8,
  },
  actions: {
    display: "flex",
    justifyContent: "center",
    "&> *": {
      minWidth: 123,
    },
  },
}));
