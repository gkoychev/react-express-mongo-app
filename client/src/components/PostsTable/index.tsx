import React from "react";
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

const useStyles = makeStyles({
  table: {
    minWidth: 650
  }
});

interface Props {
  items?: Array<any>;
}

const PostsTable = ({ items = [] }: Props) => {
  const classes = useStyles();

  const { data, error } = useSWR(getPostsUrl({ page: 1, limit: 200 }), fetcher);

  if (error) return <Alert severity="error">Failed to load data</Alert>;
  if (!data) return <LinearProgress />;

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>{items.length}</TableBody>
        <Pagination count={10} shape="rounded" />
      </Table>
    </TableContainer>
  );
};

export default PostsTable;
