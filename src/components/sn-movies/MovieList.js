import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import PropTypes from "prop-types";
import Movie from "./Movie";
import clsx from "clsx";

const MovieList = ({ data, className, ...otherProps }) => {
  const classes = useStyles();

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    if (data.length) {
      setMovies(data);
    }
  }, [data]);

  return (
    <Box className={clsx(classes.list, className)} {...otherProps}>
      {movies.map((item, index) => (
        <Movie key={index} data={item} />
      ))}
    </Box>
  );
};

export default MovieList;

MovieList.propTypes = {
  data: PropTypes.array,
  className: PropTypes.string,
};

MovieList.defaultProps = {
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
