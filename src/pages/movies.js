import React, { useState } from "react";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import clsx from "clsx";
import MainLayout from "layouts/MainLayout";
import { CreateUserDialog, MovieList, SearchBar } from "components";

const Movies = () => {
  const classes = useStyles();

  const [openDialog, setOpenDialog] = useState(false);

  return (
    <MainLayout>
      <Container className={classes.container}>
        <Box className={classes.wrapper}>
          <Box className={clsx("space-between-root", classes.header)}>
            <Typography variant="h3" className={classes.title}>
              Movie Lists
            </Typography>
            <Stack direction="row" alignItems="center" spacing={2}>
              <SearchBar />
              <Button variant="contained" className={classes.button} onClick={() => setOpenDialog(true)}>
                Add Movie
              </Button>
            </Stack>
          </Box>

          <MovieList data={MOCK_MOVIES} p={2.5} />
        </Box>
      </Container>

      <CreateUserDialog open={openDialog} onClose={() => setOpenDialog(false)} />
    </MainLayout>
  );
};

const MOCK_MOVIES = Array.from(new Array(7)).map(() => ({
  img: "https://www.filmofilia.com/wp-content/uploads/2013/02/Inception-Banner.jpg",
  name: "INCEPTION",
  type: "Home",
  video:
    "https://firebasestorage.googleapis.com/v0/b/movie-streaming-91d94.appspot.com/o/Skyscrapers%20-%2091744.mp4?alt=media&token=e7cbcb72-7209-4290-b483-7817f7b6e2fc",
}));

const useStyles = makeStyles(theme => ({
  container: {
    height: "100%",
    width: "100%",
    paddingTop: theme.spacing(3.75),
    paddingBottom: theme.spacing(3.75),
  },
  wrapper: {
    width: "100%",
    background: theme.palette.background.dark,
  },
  header: {
    padding: theme.spacing(2.5),
    borderBottom: `1px solid ${theme.palette.common.black}`,
  },
  title: {
    fontWeight: 600,
  },
  button: {
    minWidth: 40,
    height: 40,
  },
}));

export default Movies;
