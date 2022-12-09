import React from "react";
import { DialogActions, Button, Typography, Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { CommonDialog, CommonDialogTitle as DialogTitle, CommonDialogContent as DialogContent } from "components";
import PropTypes from "prop-types";
import clsx from "clsx";

const ConfirmDeleteDialog = ({ title, name, onDelete, onClose, ...props }) => {
  const classes = useStyles();

  return (
    <CommonDialog onClose={onClose} classes={{ paper: classes.root }} {...props}>
      <DialogTitle className={classes.title}>{title}</DialogTitle>
      <DialogContent className={classes.content}>
        <Typography gutterBottom>
          Are you sure you want to delete “
          <Box component="span" className={classes.bold}>
            {name}
          </Box>
          ”?
        </Typography>
        <Typography>You can’t undo this action.</Typography>
      </DialogContent>
      <DialogActions className={classes.actions}>
        <Button variant="contained" onClick={onClose} className={clsx(classes.button, classes.cancelButton)}>
          Cancel
        </Button>
        <Button variant="contained" onClick={onDelete} className={clsx(classes.button, classes.deleteButton)}>
          Delete
        </Button>
      </DialogActions>
    </CommonDialog>
  );
};

export default ConfirmDeleteDialog;

ConfirmDeleteDialog.propTypes = {
  title: PropTypes.string,
  name: PropTypes.string,
  onDelete: PropTypes.func,
  onClose: PropTypes.func,
};

ConfirmDeleteDialog.defaultProps = {
  title: "Delete",
  name: "",
};

const useStyles = makeStyles(theme => ({
  root: {
    background: "#242424",
  },
  title: {
    textAlign: "center",
  },
  actions: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 16,
    gap: 12,
  },
  content: {
    textAlign: "center",
  },
  bold: {
    fontWeight: 600,
  },
  button: {
    width: 141,
  },
  deleteButton: {
    backgroundColor: theme.palette.error.primary,
    "&:hover": {
      backgroundColor: theme.palette.error.dark,
    },
  },
  cancelButton: {
    backgroundColor: theme.palette.grey[200],

    "&:hover": {
      backgroundColor: theme.palette.grey[300],
    },
  },
}));
