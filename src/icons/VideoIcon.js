import React, { memo } from "react";
import PropTypes from "prop-types";
import { SvgIcon } from "@mui/material";

const VideoIcon = ({ sx, color, ...otherProps }) => {
  return (
    <SvgIcon viewBox="0 0 24 24" sx={{ fontSize: "inherit", ...sx }} {...otherProps}>
      <path
        d="M22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22H15C20 22 22 20 22 15Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M2.52 17.11H21.48" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M2.52 7.11H21.48" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M6.97 17.11V21.46" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 17.11V21.97" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M16.97 17.11V21.52" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M6.97 2.11V6.46" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 2.11V6.97" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 7.03V18.03" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M16.97 2.11V6.52" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </SvgIcon>
  );
};

VideoIcon.propTypes = {
  sx: PropTypes.object,
  color: PropTypes.string,
};

VideoIcon.defaultProps = {
  sx: {},
  color: "#292D32",
};

export default memo(VideoIcon);
