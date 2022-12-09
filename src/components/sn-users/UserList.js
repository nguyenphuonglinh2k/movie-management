import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import PropTypes from "prop-types";
import User from "./User";
import clsx from "clsx";

const UserList = ({ data, className }) => {
  const classes = useStyles();

  const [members, setMembers] = useState([]);

  useEffect(() => {
    const sortedMembers = data.sort(a => (a.isAdmin ? -1 : 1));
    setMembers(sortedMembers);
  }, [data]);

  return (
    <Box className={clsx(classes.list, className)}>
      {members.map((item, index) => (
        <User key={index} data={item} />
      ))}
    </Box>
  );
};

export default UserList;

UserList.propTypes = {
  data: PropTypes.array,
  className: PropTypes.string,
};

UserList.defaultProps = {
  data: [],
};

const useStyles = makeStyles(() => ({
  list: {
    width: "100%",
    display: "grid",
    gridTemplateColumns: "repeat(5, 1fr)",
    gap: 24,
  },
}));
