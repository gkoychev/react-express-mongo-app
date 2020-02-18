import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { Container, Typography, Paper } from "@material-ui/core";

import PostsTable from "./components/PostsTable";

const theme = createMuiTheme({
  palette: {
    type: "dark"
  }
});

const useStyles = makeStyles({
  app: {
    marginTop: 20,
    padding: 10
  },
  header: {
    marginLeft: 10,
    marginBottom: 10
  }
});

function App() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="md">
        <Paper className={classes.app}>
          <Typography variant="h5" className={classes.header}>
            Blog Posts
          </Typography>
          <PostsTable />
        </Paper>
      </Container>
    </ThemeProvider>
  );
}

export default App;
