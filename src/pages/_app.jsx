import App, { Container } from "next/app";
import React from "react";
import { Provider } from "react-redux";
import Head from "next/head";
import { withReduxStore } from "../store";
import { CssBaseline } from "../display";

class MyApp extends App {
  render() {
    const { Component, pageProps, reduxStore } = this.props;
    return (
      <Container>
        <Head>
          <link
            href="https://fonts.googleapis.com/css?family=Roboto"
            rel="stylesheet"
          />
          <script src="https://use.fontawesome.com/b75bd924b5.js" />
        </Head>
        <Provider store={reduxStore}>
          <CssBaseline />

          <Component {...pageProps} />
        </Provider>
      </Container>
    );
  }
}

export default withReduxStore(MyApp);
