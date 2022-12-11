import React, { memo } from "react";
import PropTypes from "prop-types";
import { SvgIcon } from "@mui/material";

const ArrowDownIcon = ({ sx, color, ...otherProps }) => {
  return (
    <SvgIcon viewBox="0 0 13 9" sx={{ fontSize: "inherit", ...sx }} {...otherProps}>
      <path
        d="M1.35625 0.893753L0.25 2L6.5 8.25001L12.75 2L11.6437 0.893753L6.5 6.0375L1.35625 0.893753Z"
        fill={color}
      />
    </SvgIcon>
  );
};

ArrowDownIcon.propTypes = {
  sx: PropTypes.object,
  color: PropTypes.string,
};

ArrowDownIcon.defaultProps = {
  sx: {},
  color: "white",
};

export default memo(ArrowDownIcon);
