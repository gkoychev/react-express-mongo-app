import React, { Fragment } from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

import Breadcrumbs from "../../components/Breadcrumbs";
import { RootState } from "../../redux/reducers";
import { withRouter, match } from "react-router-dom";
import { getPostById } from "../../redux/selectors";
import { Post as PostType } from "../../interfaces";

const useStyles = makeStyles({
  header: {
    marginLeft: 10,
    marginTop: 20,
    marginBottom: 20
  },
  body: {
    marginLeft: 10,
    minHeight: "100vh"
  }
});

interface Params {
  postId?: string;
}
interface Props extends PostType {
  match: match<Params>;
}

const Post = ({ body, title }: Props) => {
  const classes = useStyles();

  return (
    <Fragment>
      <Breadcrumbs />
      <Typography variant="h5" className={classes.header}>
        {title}
      </Typography>
      <div className={classes.body}>{body}</div>
    </Fragment>
  );
};

const mapStateToProps = (state: RootState, { match: { params } }: any) => {
  const postId = params.postId;
  const post = getPostById(state, postId);

  return { ...post };
};

export default withRouter(connect(mapStateToProps)(Post));
