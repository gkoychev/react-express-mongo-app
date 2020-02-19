import React from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { LinearProgress } from "@material-ui/core";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Alert, Pagination } from "@material-ui/lab";

import PostsTableRow from "./PostsTableRow";
import history from "../../utils/history";
import { postsSetPage } from "../../redux/actions/postsActions";
import { PostsState } from "../../redux/reducers/posts";
import { RootState } from "../../redux/reducers";

const useStyles = makeStyles({
  table: {
    minWidth: 650
  }
});

interface Type extends PostsState {
  postsSetPage: Function;
}
const PostsTable = ({
  postsSetPage,
  currentPage,
  pages,
  error,
  posts,
  ready,
  loading
}: Type) => {
  const classes = useStyles();

  const handleChange = (_e: Event, value: number) => {
    postsSetPage(value);
  };

  const handleRowClick = (id: number) => {
    history.push(`/post/${id}`);
  };

  if (error) return <Alert severity="error">Failed to load data</Alert>;
  if (!ready || loading) return <LinearProgress />;

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>User Id</TableCell>
            <TableCell>Title</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {posts.map((post: any) => (
            <PostsTableRow
              key={post.postId}
              data={post}
              onClick={handleRowClick}
            />
          ))}
          <TableRow>
            <TableCell colSpan={3}>
              <Pagination
                page={currentPage}
                count={pages}
                shape="rounded"
                onChange={handleChange}
              />
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

const mapStateToProps = ({ posts }: RootState) => {
  return posts;
};

export default connect(mapStateToProps, {
  postsSetPage
})(PostsTable);
