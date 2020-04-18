import Head from "next/head";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
// import rootReducer from "./slices";

import Header from "../src/components/Header.js";
import "../styles/styles.scss";

const MyApp = ({ Component, pageProps }) => {
  return (
    <div className="container">
      <Head>
        <title>Next market</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <Header />
      <Component {...pageProps} />
    </div>
  );
};

export default MyApp;
