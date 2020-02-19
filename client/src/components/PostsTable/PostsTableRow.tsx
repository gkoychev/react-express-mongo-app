import React, { useCallback } from "react";
import { TableRow, TableCell, makeStyles } from "@material-ui/core";
import { Post } from "../../interfaces";

interface Props {
  onClick?: (id: number) => void;
  data: Post;
}

const useStyles = makeStyles({
  row: {
    cursor: "pointer"
  }
});

const PostsTableRow = ({ data, onClick }: Props) => {
  const classes = useStyles();

  const handleClick = useCallback(() => {
    onClick && onClick(data.postId);
  }, [onClick, data.postId]);

  return (
    <TableRow className={classes.row} onClick={handleClick}>
      <TableCell component="th" scope="row">
        {data.postId}
      </TableCell>
      <TableCell component="th" scope="row">
        {data.userId}
      </TableCell>
      <TableCell component="th" scope="row">
        {data.title}
      </TableCell>
    </TableRow>
  );
};

export default PostsTableRow;
