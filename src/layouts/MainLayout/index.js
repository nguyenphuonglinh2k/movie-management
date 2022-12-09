import React, { memo } from "react";
import PropTypes from "prop-types";
import { NoSsr } from "@mui/core";
import makeStyles from "@mui/styles/makeStyles";
import { Box } from "@mui/material";
import clsx from "clsx";

import { AppHead } from "components";
import MLHeader, { HEADER_HEIGHT } from "./components/MLHeader";
import MLDrawer from "./components/MLDrawer";

const MainLayout = ({ headProps, children, classes }) => {
  const classesDefault = useStyles();
  const primaryHead = headProps || {};

  return (
    <>
      <AppHead {...primaryHead} />

      <NoSsr>
        <Box className={classesDefault.root}>
          <MLDrawer />
          <Box className={classesDefault.content}>
            <MLHeader />
            <main id={MAIN_ID} className={clsx(classesDefault.main, classes.root)}>
              {children}
            </main>
          </Box>
        </Box>
      </NoSsr>
    </>
  );
};

MainLayout.propTypes = {
  headProps: PropTypes.object,
  classes: PropTypes.object,
};

MainLayout.defaultProps = {
  headProps: {},
  classes: {},
};

export default memo(MainLayout);

export const MAIN_ID = "MAIN_ID";

const useStyles = makeStyles({
  main: {
    position: "relative",
    height: `calc(100vh - ${HEADER_HEIGHT}px)`,
    width: "100%",
    overflow: "hidden",
  },
  root: {
    display: "flex",
    width: "100%",
    height: "100%",
    position: "relative",
  },
  content: {
    width: "100%",
  },
});
