import Head from "next/head";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

import Header from "../src/components/Header.js";
import "../styles/styles.scss";

import rootReducer from "../src/slices/index.js";

const store = configureStore({ reducer: rootReducer });

const MyApp = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <div className="container">
        <Head>
          <title>Next market</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>

        <Header />
        <Component {...pageProps} />
      </div>
    </Provider>
  );
};

export default MyApp;
