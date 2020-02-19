import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import Breadcrumbs from "../../components/Breadcrumbs";

const useStyles = makeStyles({
  header: {
    marginLeft: 10,
    marginBottom: 10
  }
});

export default () => {
  const classes = useStyles();

  return (
    <Fragment>
      <Breadcrumbs />
      <Typography variant="h5" className={classes.header}>
        Post
      </Typography>
      post will be here
    </Fragment>
  );
};
