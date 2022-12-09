import React, { useMemo } from "react";
import { Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import PropTypes from "prop-types";
import clsx from "clsx";

const Role = ({ value, isAdmin, className }) => {
  const classes = useStyles({ isAdmin });

  const roleValue = useMemo(() => {
    if (isAdmin) {
      return "Admin";
    }
    return value || "User";
  }, [value, isAdmin]);

  return (
    <Box className={clsx("center-root", classes.root, className)}>
      <Typography variant="body2" className={classes.label}>
        {roleValue}
      </Typography>
    </Box>
  );
};

export default Role;

Role.propTypes = {
  value: PropTypes.string,
  className: PropTypes.string,
  isAdmin: PropTypes.bool,
};

const useStyles = makeStyles(theme => ({
  root: ({ isAdmin }) => ({
    backgroundColor: isAdmin ? "#e20e0233" : "#f68a0433",
    padding: theme.spacing(0.5, 0),
    borderRadius: 8,
    minWidth: 80,
  }),
  label: ({ isAdmin }) => ({
    color: isAdmin ? theme.palette.error.dark : "#f68a04",
    fontWeight: 600,
  }),
}));
