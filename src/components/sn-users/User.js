import React, { useReducer, useState } from "react";
import PropTypes from "prop-types";
import { Paper, Typography, Box, Button, Avatar } from "@mui/material";
import { makeStyles } from "@mui/styles";
import clsx from "clsx";
import Role from "components/common/Role";

const User = ({ data }) => {
  const classes = useStyles();
  const { name, email, avatar, isAdmin, role } = data;

  const [isOpenDeleteDialog, toggleOpenDeleteDialog] = useReducer(currentStatus => !currentStatus, false);
  const [hasQuickAction, setHasQuickAction] = useState(false);

  // const onCloseConfirmDeleteDialog = () => {
  //   toggleOpenDeleteDialog(false);
  //   setHasQuickAction(false);
  // };

  return (
    <Box
      className={classes.wrapper}
      onMouseEnter={() => setHasQuickAction(true)}
      onMouseLeave={() => setHasQuickAction(false)}
    >
      <Paper elevation={1} className={classes.root}>
        <Avatar src={avatar} className={classes.avatar} />
        <Typography variant="subtitle2" gutterBottom className={classes.alignCenter}>
          {name}
        </Typography>
        <Typography className={classes.email}>{email}</Typography>
        <Role value={role} isAdmin={isAdmin} />
      </Paper>
      <Paper
        elevation={1}
        className={clsx(!hasQuickAction && classes.nonAction, classes.root, classes.overlay, "center-root")}
      >
        <Button variant="contained" onClick={() => toggleOpenDeleteDialog(true)} className={classes.deleteButton}>
          Delete
        </Button>
      </Paper>

      {/* <ConfirmDeleteDialog
        open={isOpenDeleteDialog}
        title="Delete User"
        name={name}
        onClose={onCloseConfirmDeleteDialog}
      /> */}
    </Box>
  );
};

export default User;

User.propTypes = {
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
    width: 70,
    height: 70,
    marginBottom: "16px",
  },
  email: {
    marginBottom: 14,
    textAlign: "center",
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
  deleteButton: {
    minWidth: "50%",
    padding: theme.spacing(0.75, 1),
  },
  nonAction: {
    display: "none",
  },
}));
