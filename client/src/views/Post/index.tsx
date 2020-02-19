import React, { Fragment } from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

import Breadcrumbs from "../../components/Breadcrumbs";
import { RootState } from "../../redux/reducers";
import { withRouter, match, Redirect } from "react-router-dom";
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
    minHeight: 500
  }
});

interface Params {
  postId?: string;
}
interface Props extends PostType {
  match: match<Params>;
  postNotFound: boolean;
}

const Post = ({ body, title, postNotFound }: Props) => {
  const classes = useStyles();

  if (postNotFound) {
    return <Redirect to="/" />;
  }

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

  return { ...post, postNotFound: !post };
};

export default withRouter(connect(mapStateToProps)(Post));
