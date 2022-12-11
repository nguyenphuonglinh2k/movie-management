import React, { useReducer, useState } from "react";
import PropTypes from "prop-types";
import { Paper, Typography, Box, Button, Avatar } from "@mui/material";
import { makeStyles } from "@mui/styles";
import clsx from "clsx";
import { ConfirmDeleteDialog, EditMovieDialog, Role } from "components";

const Movie = ({ data }) => {
  const classes = useStyles();
  const { name, type, img } = data;

  const [isOpenDeleteDialog, toggleOpenDeleteDialog] = useReducer(currentStatus => !currentStatus, false);
  const [isOpenEditDialog, toggleOpenEditDialog] = useReducer(currentStatus => !currentStatus, false);

  const [hasQuickAction, setHasQuickAction] = useState(false);

  const onCloseConfirmDeleteDialog = () => {
    toggleOpenDeleteDialog(false);
    setHasQuickAction(false);
  };

  const onCloseConfirmEditDialog = () => {
    toggleOpenEditDialog(false);
    setHasQuickAction(false);
  };

  const handleDeleteMovie = () => {};

  const handleConfirmEditMovie = () => {};

  return (
    <Box
      className={classes.wrapper}
      onMouseEnter={() => setHasQuickAction(true)}
      onMouseLeave={() => setHasQuickAction(false)}
    >
      <Paper elevation={1} className={classes.root}>
        <Avatar src={img} variant="rounded" className={classes.avatar} />
        <Typography variant="subtitle2" gutterBottom className={classes.alignCenter}>
          {name}
        </Typography>
        <Role value={type ?? "No type"} />
      </Paper>
      <Paper
        elevation={1}
        className={clsx(!hasQuickAction && classes.nonAction, classes.root, classes.overlay, "center-root")}
      >
        <Button
          variant="contained"
          onClick={() => toggleOpenEditDialog(true)}
          className={clsx(classes.button, classes.editButton)}
        >
          Edit
        </Button>
        <Button variant="contained" onClick={() => toggleOpenDeleteDialog(true)} className={classes.button}>
          Delete
        </Button>
      </Paper>

      <ConfirmDeleteDialog
        open={isOpenDeleteDialog}
        title="Delete Movie"
        name={`Movie ${name}`}
        onClose={onCloseConfirmDeleteDialog}
        onDelete={handleDeleteMovie}
      />
      <EditMovieDialog open={isOpenEditDialog} onClose={onCloseConfirmEditDialog} onClick={handleConfirmEditMovie} />
    </Box>
  );
};

export default Movie;

Movie.propTypes = {
  data: PropTypes.object,
};

const useStyles = makeStyles(theme => ({
  wrapper: {
    position: "relative",
  },
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    flexWrap: "wrap",
    borderRadius: 24,
    padding: theme.spacing(2.5, 2),
  },
  avatar: {
    width: "80%",
    minWidth: 100,
    height: 150,
    marginBottom: "16px",
  },
  alignCenter: {
    textAlign: "center",
  },
  overlay: {
    background: "rgba(0, 0, 0, 0.5)",
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
  },
  button: {
    minWidth: "70%",
    padding: theme.spacing(0.75, 1),
  },
  editButton: {
    marginBottom: theme.spacing(2),

    "&, &:hover": {
      background: "#f68a04",
    },
  },
  nonAction: {
    display: "none",
  },
}));
