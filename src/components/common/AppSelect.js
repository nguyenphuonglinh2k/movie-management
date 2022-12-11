import React from "react";
import { FormControl, NativeSelect, InputBase, Typography } from "@mui/material";
import { makeStyles, withStyles } from "@mui/styles";
import PropTypes from "prop-types";
import { ArrowDownIcon } from "icons";

const AppSelect = ({ label, data, ...props }) => {
  const classes = useStyles();

  const isObject = obj => {
    return Object.prototype.toString.call(obj) === "[object Object]";
  };

  return (
    <FormControl className={classes.root}>
      {label && (
        <Typography gutterBottom className={classes.label}>
          {label}
        </Typography>
      )}
      <NativeSelect
        input={<InputBaseStyled />}
        classes={{ select: classes.nativeRoot }}
        IconComponent={() => <ArrowDownIcon className={classes.icon} />}
        {...props}
      >
        <option value="" />
        {data.map((item, index) => {
          return (
            <option key={index} value={isObject(item) ? item?.value : item}>
              {isObject(item) ? item?.label : item}
            </option>
          );
        })}
      </NativeSelect>
    </FormControl>
  );
};

export default AppSelect;

AppSelect.propTypes = {
  label: PropTypes.string,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.number,
      label: PropTypes.string,
    }),
  ),
  required: PropTypes.bool,
};
AppSelect.defaultProps = {
  data: [],
};

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
  },
  nativeRoot: {
    backgroundColor: theme.palette.common.black,
  },
  label: {
    fontWeight: 700,
  },
  icon: {
    position: "absolute",
    right: 12,
  },
}));

const InputBaseStyled = withStyles(theme => ({
  input: {
    height: 32,
    padding: theme.spacing(1, 1.5),
    width: "100%",
    borderRadius: 6,
  },
  focused: {
    borderColor: theme.palette.error.dark,
  },
}))(InputBase);
