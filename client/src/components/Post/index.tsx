import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TableContainer from "@material-ui/core/TableContainer";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
  table: {
    minWidth: 650
  }
});

interface Props {
  items?: Array<any>;
}

const Posts = ({ items = [] }: Props) => {
  const classes = useStyles();

  return <TableContainer component={Paper}></TableContainer>;
};

export default Posts;
