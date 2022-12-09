import React, { memo } from "react";
import { AppBar, Avatar } from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";

const MLHeader = () => {
  const classes = useStyles();

  return (
    <AppBar id={HEADER_ID} position="sticky" className={classes.root} elevation={0}>
      <Avatar
        alt="Remy Sharp"
        src="https://templates.iqonic.design/streamit/dashboard/html/assets/images/user/1.jpg"
        sx={{ width: 50, height: 50 }}
      />
    </AppBar>
  );
};

export default memo(MLHeader);

export const HEADER_HEIGHT = 85;
export const HEADER_ID = "HEADER_ID";

const useStyles = makeStyles(theme => ({
  root: {
    height: HEADER_HEIGHT,
    display: "flex",
    justifyContent: "flex-end",
    flexDirection: "row",
    padding: theme.spacing(1),
    background: theme.palette.background.dark,
  },
}));
