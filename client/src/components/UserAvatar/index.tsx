import React from "react";
import cn from "classnames";
import {
  makeStyles,
  Avatar,
  withStyles,
  Theme,
  Tooltip,
  Typography
} from "@material-ui/core";

import { UserDataType } from "../../interfaces";

interface Props {
  className: string;
  user: UserDataType;
}

const useStyles = makeStyles({
  root: {
    cursor: "pointer"
  }
});

const HtmlTooltip = withStyles((theme: Theme) => ({
  tooltip: {
    backgroundColor: "#f5f5f9",
    color: "rgba(0, 0, 0, 0.87)",
    maxWidth: 220,
    fontSize: theme.typography.pxToRem(12),
    border: "1px solid #dadde9"
  }
}))(Tooltip);

const UserAvatar = ({ className, user }: Props) => {
  const classes = useStyles();

  return (
    <HtmlTooltip
      title={
        <React.Fragment>
          <Typography color="inherit">{user.name}</Typography>
          <div>
            <b>Phone: </b> {user.phone}
          </div>
          <div>
            <b>Email: </b> {user.email}
          </div>
        </React.Fragment>
      }
    >
      <Avatar className={cn(className, classes.root)} />
    </HtmlTooltip>
  );
};

export default UserAvatar;
