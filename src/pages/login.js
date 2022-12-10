import React from "react";
import { Box, Button, Checkbox, FormControlLabel, Stack, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import clsx from "clsx";

import { ImageConstant } from "const";
import { AppTextField } from "components";

const Login = () => {
  const classes = useStyles();

  return (
    <Box className={clsx("center-root", classes.root)}>
      <Box className={classes.inputWrapper}>
        <Typography variant="h5">Sign In</Typography>
        <Stack mt={3} mb={2} spacing={2}>
          <AppTextField placeholder="Enter email" required />
          <AppTextField placeholder="Password" type="password" required />
        </Stack>
        <Box className={classes.actions}>
          <Button variant="containedPrimary">Sign in</Button>
          <FormControlLabel control={<Checkbox className={classes.checkbox} />} label="Remember Me" />
        </Box>
      </Box>
    </Box>
  );
};

const useStyles = makeStyles(theme => ({
  root: {
    width: "100vw",
    height: "100vh",
    background: `url(${ImageConstant.LoginBackgroundImage}) center/cover no-repeat`,
  },
  inputWrapper: {
    minWidth: 445,
    padding: theme.spacing(3),
    background: theme.palette.grey[500],
    backdropFilter: "blur(10px)",
    boxShadow: "0 4px 8px 0 rgb(0 0 0 / 20%), 0 6px 20px 0 rgb(0 0 0 / 19%)",
  },
  title: {
    fontSize: 32,
    textAlign: "center",
  },
  actions: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  checkbox: {
    "&.Mui-checked": {
      color: theme.palette.error.dark,
    },
  },
}));

export default Login;
