import React from "react";
import { TableRow, TableCell } from "@material-ui/core";

interface Props {
  data: {
    postId: number;
    userId: number;
    title: string;
  };
}

const PostsTableRow = ({ data }: Props) => {
  return (
    <TableRow key={data.postId}>
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
