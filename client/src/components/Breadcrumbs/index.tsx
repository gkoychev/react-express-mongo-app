import React from "react";
import { Breadcrumbs, makeStyles } from "@material-ui/core";
import Link, { LinkProps } from "@material-ui/core/Link";

import { Link as RouterLink, withRouter, match } from "react-router-dom";

interface LinkRouterProps extends LinkProps {
  to: string;
  replace?: boolean;
}
const LinkRouter = (props: LinkRouterProps) => (
  <Link {...props} component={RouterLink as any} />
);

interface Params {
  postId?: string;
}
interface Props {
  match: match<Params>;
}

const useStyles = makeStyles({
  breadcrumbs: {
    marginLeft: 10,
    marginBottom: 10
  }
});

const AppBreadcrumbs = ({ match }: Props) => {
  const classes = useStyles();

  const links = [
    <LinkRouter key="/" color="inherit" to="/">
      Home
    </LinkRouter>
  ];

  if (match.path !== "/" && match.params.postId) {
    const url = `/post/${match.params.postId}`;
    links.push(
      <LinkRouter color="inherit" to={url} key={url}>
        Post #{match.params.postId}
      </LinkRouter>
    );
  }

  return (
    <Breadcrumbs aria-label="breadcrumb" className={classes.breadcrumbs}>
      {links}
    </Breadcrumbs>
  );
};

export default withRouter(AppBreadcrumbs);
