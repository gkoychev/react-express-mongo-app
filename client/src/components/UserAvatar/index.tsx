import React from "react";
import cn from "classnames";
import { makeStyles, Avatar } from "@material-ui/core";

interface Props {
  className: string;
}

const useStyles = makeStyles({
  root: {
    cursor: "pointer"
  }
});

const UserAvatar = ({ className }: Props) => {
  const classes = useStyles();

  return <Avatar className={cn(className, classes.root)} />;
};

export default UserAvatar;
