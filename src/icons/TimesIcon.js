import React, { memo } from "react";
import PropTypes from "prop-types";
import { SvgIcon } from "@mui/material";
import { palette } from "public/material";

const TimesIcon = ({ sx, color, ...otherProps }) => {
  return (
    <SvgIcon viewBox="0 0 15 14" sx={{ fontSize: "inherit", ...sx }} {...otherProps}>
      <line
        y1="-0.5"
        x2="18.3689"
        y2="-0.5"
        transform="matrix(-0.707719 -0.706494 0.707719 -0.706494 14 13)"
        stroke={color}
      />
      <line
        y1="-0.5"
        x2="18.3689"
        y2="-0.5"
        transform="matrix(-0.707719 0.706494 -0.707719 -0.706494 14 0)"
        stroke={color}
      />
    </SvgIcon>
  );
};

TimesIcon.propTypes = {
  sx: PropTypes.object,
  color: PropTypes.string,
};

TimesIcon.defaultProps = {
  sx: {},
  color: palette.common.white,
};

export default memo(TimesIcon);
