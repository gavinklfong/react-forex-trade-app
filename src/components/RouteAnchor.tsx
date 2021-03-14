/**
 * This source code is the orignal idea of @atoy40 who posted in
 * https://github.com/grommet/grommet/issues/2855
 *
 */

import * as React from "react";
import { RouteComponentProps, withRouter } from "react-router";

import { Anchor, AnchorProps, Button, ButtonProps } from "grommet";

interface RouterLinkProps {
  path: string;
}
const RouterAnchorBase = (
  props: RouteComponentProps & RouterLinkProps & AnchorProps
) => {
  const anchorProps = props as AnchorProps;
  return (
    <Anchor {...anchorProps} onClick={() => props.history.push(props.path)} />
  );
};

const RouterAnchor = withRouter(RouterAnchorBase);

const RouterButtonBase = (
  props: RouteComponentProps & RouterLinkProps & ButtonProps
) => {
  const buttonProps = props as ButtonProps;
  return (
    <Button {...buttonProps} onClick={() => props.history.push(props.path)} />
  );
};

const RouterButton = withRouter(RouterButtonBase);

export { RouterAnchor, RouterButton };
