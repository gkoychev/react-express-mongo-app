import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

import PostsTable from "../../components/PostsTable";
import Breadcrumbs from "../../components/Breadcrumbs";
import { RootState } from "../../redux/reducers";
import { fetchPosts } from "../../redux/actions/postsActions";

const useStyles = makeStyles({
  header: {
    marginLeft: 10,
    marginBottom: 10
  }
});

interface Props {
  fetchPosts: Function;
  currentPage: number;
}

const Home = ({ fetchPosts, currentPage }: Props) => {
  const classes = useStyles();

  useEffect(() => {
    fetchPosts({ page: currentPage });
  }, [fetchPosts, currentPage]);

  return (
    <Fragment>
      <Breadcrumbs />
      <Typography variant="h5" className={classes.header}>
        Blog Posts
      </Typography>
      <PostsTable />
    </Fragment>
  );
};

const mapStateToProps = ({ posts }: RootState) => ({
  currentPage: posts.currentPage
});

export default connect(mapStateToProps, {
  fetchPosts
})(Home);
