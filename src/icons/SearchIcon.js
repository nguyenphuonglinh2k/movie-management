import React, { memo } from "react";
import PropTypes from "prop-types";
import { SvgIcon } from "@mui/material";
import { palette } from "public/material";

const SearchIcon = ({ sx, color, ...otherProps }) => {
  return (
    <SvgIcon viewBox="0 0 25 24" sx={{ fontSize: "inherit", ...sx }} {...otherProps}>
      <path
        d="M11.7198 21.75C6.06985 21.75 1.46985 17.15 1.46985 11.5C1.46985 5.85 6.06985 1.25 11.7198 1.25C17.3698 1.25 21.9698 5.85 21.9698 11.5C21.9698 17.15 17.3698 21.75 11.7198 21.75ZM11.7198 2.75C6.88985 2.75 2.96985 6.68 2.96985 11.5C2.96985 16.32 6.88985 20.25 11.7198 20.25C16.5498 20.25 20.4698 16.32 20.4698 11.5C20.4698 6.68 16.5498 2.75 11.7198 2.75Z"
        fill={color}
      />
      <path
        d="M22.2199 22.75C22.0299 22.75 21.8399 22.68 21.6899 22.53L19.6899 20.53C19.3999 20.24 19.3999 19.76 19.6899 19.47C19.9799 19.18 20.4599 19.18 20.7499 19.47L22.7499 21.47C23.0399 21.76 23.0399 22.24 22.7499 22.53C22.5999 22.68 22.4099 22.75 22.2199 22.75Z"
        fill={color}
      />
    </SvgIcon>
  );
};

SearchIcon.propTypes = {
  sx: PropTypes.object,
  color: PropTypes.string,
};

SearchIcon.defaultProps = {
  sx: {},
  color: palette.common.white,
};

export default memo(SearchIcon);
