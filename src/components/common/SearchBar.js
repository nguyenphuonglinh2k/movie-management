import React, { useState, useCallback } from "react";
import { InputAdornment, InputBase } from "@mui/material";
import { makeStyles } from "@mui/styles";
import PropTypes from "prop-types";
import { SearchIcon } from "icons";
import { debounce } from "utils";
import { AppConstant } from "const";

const SearchBar = ({ placeholderText, onSearch, ...props }) => {
  const classes = useStyles();
  const [value, setValue] = useState();

  const onChange = e => {
    const value = e.target.value;
    setValue(value);
    onDebounceSearch(value);
  };

  const onDebounceSearch = useCallback(
    debounce(value => {
      Boolean(onSearch) && onSearch(value);
    }, AppConstant.TYPING_WAIT_TIME),
    [onSearch],
  );

  return (
    <InputBase
      value={value}
      onChange={onChange}
      placeholder={placeholderText}
      className={classes.input}
      startAdornment={
        <InputAdornment position="start">
          <SearchIcon />
        </InputAdornment>
      }
      {...props}
    />
  );
};

export default SearchBar;

SearchBar.propTypes = {
  placeholderText: PropTypes.string,
  onSearch: PropTypes.func,
};
SearchBar.defaultProps = {
  placeholderText: "Search Here...",
};

const useStyles = makeStyles(theme => ({
  input: {
    borderRadius: 6,
    padding: theme.spacing(1, 1.5),
    height: 40,
    background: theme.palette.common.black,
  },
}));
