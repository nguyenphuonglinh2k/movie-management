import React from "react";
import { Box, Container, Typography } from "@mui/material";
import MainLayout from "layouts/MainLayout";
import { makeStyles } from "@mui/styles";
import { SearchBar, UserList } from "components";
import clsx from "clsx";

const Users = () => {
  const classes = useStyles();

  return (
    <MainLayout>
      <Container className={classes.container}>
        <Box className={classes.wrapper}>
          <Box className={clsx("space-between-root", classes.header)}>
            <Typography variant="h3" className={classes.title}>
              User Lists
            </Typography>
            <SearchBar />
          </Box>

          <UserList data={MOCK_USERS} className={classes.list} />
        </Box>
      </Container>
    </MainLayout>
  );
};

const MOCK_USERS = Array.from(new Array(7)).map(() => ({
  name: "Lilly Colin",
  email: "lilly@gmail.com",
  avatar: "https://templates.iqonic.design/streamit/dashboard/html/assets/images/user/05.jpg",
  isAdmin: true,
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
  list: {
    padding: theme.spacing(2.5),
  },
}));

export default Users;
