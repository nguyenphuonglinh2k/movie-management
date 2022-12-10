import React from "react";
import PropTypes from "prop-types";
import { Box, Alert, Stack } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { AppTextField, CommonDialogWithCloseIcon } from "components";

const CreateUserDialog = ({ ...otherProps }) => {
  const classes = useStyles();

  return (
    <CommonDialogWithCloseIcon
      title="Create User Account"
      buttonText="Create"
      classes={{ paper: classes.root }}
      {...otherProps}
    >
      <Box className={classes.content}>
        {/* TODO: update condition to display alert */}
        {Boolean(false) && <Alert severity="error">Please enter all required fields</Alert>}

        <Stack mt={3} mb={2} spacing={2}>
          <AppTextField placeholder="Username" required />
          <AppTextField placeholder="Email" required />
          <AppTextField placeholder="Password" type="password" required />
        </Stack>
      </Box>
    </CommonDialogWithCloseIcon>
  );
};

export default CreateUserDialog;

CreateUserDialog.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func,
};

const useStyles = makeStyles(() => ({
  root: {
    width: 600,
  },
  content: {
    display: "flex",
    flexDirection: "column",
    gap: 16,
  },
  gap: {
    gap: 16,
  },
}));
