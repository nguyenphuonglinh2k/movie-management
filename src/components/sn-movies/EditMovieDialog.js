import React from "react";
import PropTypes from "prop-types";
import { Box, Alert, Stack } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { AppSelect, AppTextField, CommonDialogWithCloseIcon } from "components";
import { AppConstant } from "const";

const EditMovieDialog = ({ ...otherProps }) => {
  const classes = useStyles();

  return (
    <CommonDialogWithCloseIcon
      title="Update Movie Information"
      buttonText="Update"
      classes={{ paper: classes.root }}
      {...otherProps}
    >
      <Box className={classes.content}>
        {/* TODO: update condition to display alert */}
        {Boolean(false) && <Alert severity="error">Please enter all required fields</Alert>}

        <Stack mt={3} mb={2} spacing={2}>
          <AppTextField placeholder="Title" required />
          <AppSelect label="" data={AppConstant.FILM_CATEGORIES} placeholder="Movie Category" />
          <AppTextField placeholder="Upload Image" type="file" required />
          <AppTextField placeholder="Upload Video" type="file" accept="video/mp4,video/x-m4v,video/*" required />
        </Stack>
      </Box>
    </CommonDialogWithCloseIcon>
  );
};

export default EditMovieDialog;

EditMovieDialog.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func,
  onClick: PropTypes.func,
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
