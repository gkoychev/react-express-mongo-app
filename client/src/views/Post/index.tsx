import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import { withRouter, match, Redirect } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, LinearProgress } from "@material-ui/core";

import Breadcrumbs from "../../components/Breadcrumbs";
import { RootState } from "../../redux/reducers";
import { getPostById, getUser, getUserIsLoading } from "../../redux/selectors";
import { Post as PostType } from "../../interfaces";
import { fetchUser } from "../../redux/actions/usersActions";
import UserAvatar from "../../components/UserAvatar";

const useStyles = makeStyles({
  wrapper: {
    minHeight: 500
  },
  header: {
    marginLeft: 10,
    marginTop: 20,
    marginBottom: 20
  },
  body: {
    marginLeft: 10
  },
  avatar: {
    position: "absolute",
    top: 10,
    right: 10
  }
});

interface Props extends PostType {
  fetchUser: Function;

  match: match<{
    postId?: string;
  }>;

  postNotFound: boolean;
  userIsloading: boolean;
}

const Post = ({
  body,
  title,
  postNotFound,
  userIsloading,
  fetchUser,
  userId
}: Props) => {
  const classes = useStyles();

  useEffect(() => {
    if (userId) {
      fetchUser(userId);
    }
  }, [fetchUser, userId]);

  if (postNotFound) {
    return <Redirect to="/" />;
  }

  return (
    <Fragment>
      <Breadcrumbs />
      <div className={classes.wrapper}>
        {userIsloading && <LinearProgress />}
        {!userIsloading && (
          <div>
            <UserAvatar className={classes.avatar} />
            <Typography variant="h5" className={classes.header}>
              {title}
            </Typography>
            <div className={classes.body}>{body}</div>
          </div>
        )}
      </div>
    </Fragment>
  );
};

const mapStateToProps = (state: RootState, { match: { params } }: any) => {
  const postId = params.postId;
  const post = getPostById(state, postId);
  const user = getUser(state);
  const userIsloading = getUserIsLoading(state);

  return { ...post, user, userIsloading, postNotFound: !post };
};

export default withRouter(connect(mapStateToProps, { fetchUser })(Post));
