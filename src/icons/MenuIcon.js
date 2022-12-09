import React, { memo } from "react";
import PropTypes from "prop-types";
import { SvgIcon } from "@mui/material";
import { palette } from "public/material";

const MenuIcon = ({ sx, color, ...otherProps }) => {
  return (
    <SvgIcon viewBox="0 0 30 30" sx={{ fontSize: "inherit", ...sx }} {...otherProps}>
      <path
        d="M0 5.625C0 4.58789 0.957589 3.75 2.14286 3.75H27.8571C29.0424 3.75 30 4.58789 30 5.625C30 6.66211 29.0424 7.5 27.8571 7.5H2.14286C0.957589 7.5 0 6.66211 0 5.625ZM0 15C0 13.9629 0.957589 13.125 2.14286 13.125H27.8571C29.0424 13.125 30 13.9629 30 15C30 16.0371 29.0424 16.875 27.8571 16.875H2.14286C0.957589 16.875 0 16.0371 0 15ZM30 24.375C30 25.4121 29.0424 26.25 27.8571 26.25H2.14286C0.957589 26.25 0 25.4121 0 24.375C0 23.3379 0.957589 22.5 2.14286 22.5H27.8571C29.0424 22.5 30 23.3379 30 24.375Z"
        fill={color}
      />
    </SvgIcon>
  );
};

MenuIcon.propTypes = {
  sx: PropTypes.object,
  color: PropTypes.string,
};

MenuIcon.defaultProps = {
  sx: {},
  color: palette.error.dark,
};

export default memo(MenuIcon);
