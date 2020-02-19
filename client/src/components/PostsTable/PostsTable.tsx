import React, { useState } from "react";
import useSWR from "swr";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Alert, Pagination } from "@material-ui/lab";

import { getPostsUrl, fetcher } from "../../utils/apiUtils";
import { LinearProgress } from "@material-ui/core";
import PostsTableRow from "./PostsTableRow";
import history from "../../utils/history";

const useStyles = makeStyles({
  table: {
    minWidth: 650
  }
});

const PostsTable = () => {
  const classes = useStyles();
  const [page, setPage] = useState(1);

  const handleChange = (_e: Event, value: number) => {
    setPage(value);
  };
  const handleRowClick = (id: number) => {
    history.push(`/post/${id}`);
  };

  const { data, error } = useSWR(getPostsUrl({ page, limit: 10 }), fetcher);

  if (error) return <Alert severity="error">Failed to load data</Alert>;
  if (!data) return <LinearProgress />;

  const posts = data?.posts || [];

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
                page={page}
                count={10}
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

export default PostsTable;
