import React from "react";
import { Router } from "react-router";
import { Provider } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { Container, Paper } from "@material-ui/core";

import history from "./utils/history";
import Routes from "./routes";
import store from "./redux/store";

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
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Router history={history}>
          <Container maxWidth="md">
            <Paper className={classes.app}>
              <Routes />
            </Paper>
          </Container>
        </Router>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
