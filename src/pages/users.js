import React, { useState } from "react";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import clsx from "clsx";
import MainLayout from "layouts/MainLayout";
import { CreateUserDialog, SearchBar, UserList } from "components";

const Users = () => {
  const classes = useStyles();

  const [openDialog, setOpenDialog] = useState(false);

  return (
    <MainLayout>
      <Container className={classes.container}>
        <Box className={classes.wrapper}>
          <Box className={clsx("space-between-root", classes.header)}>
            <Typography variant="h3" className={classes.title}>
              User Lists
            </Typography>
            <Stack direction="row" alignItems="center" spacing={2}>
              <SearchBar />
              <Button variant="contained" className={classes.button} onClick={() => setOpenDialog(true)}>
                Add User
              </Button>
            </Stack>
          </Box>

          <UserList data={MOCK_USERS} className={classes.list} />
        </Box>
      </Container>

      <CreateUserDialog open={openDialog} onClose={() => setOpenDialog(false)} />
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
  button: {
    minWidth: 40,
    height: 40,
  },
}));

export default Users;
