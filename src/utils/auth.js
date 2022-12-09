import React, { Component } from "react";
import Router from "next/router";
import { PathConstant } from "const";

export const auth = ctx => {
  // const { token } = nextCookie(ctx); TODO: Remove comment when using authentication
  let token = "Fake token";
  if (ctx.req && !token) {
    ctx.res.writeHead(302, { Location: PathConstant.LOGIN });
    ctx.res.end();
    return;
  }

  if (!token) {
    Router.push(PathConstant.LOGIN);
  }

  return token;
};

// Gets the display name of a JSX component for dev tools
const getDisplayName = Component => Component.displayName || Component.name || "Component";

export const withAuthSync = WrappedComponent =>
  class extends Component {
    static displayName = `withAuthSync(${getDisplayName(WrappedComponent)})`;

    static async getInitialProps(ctx) {
      const token = auth(ctx);
      const componentProps = WrappedComponent.getInitialProps && (await WrappedComponent.getInitialProps(ctx));

      return { ...componentProps, token };
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  };
