import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ApolloProvider } from "@apollo/client";
import client from "./utils/apolloClient";
import { RouterProvider } from "react-router-dom";
import LoggedOutRouter from "./routers/LoggedOutRouter";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <RouterProvider router={LoggedOutRouter} />
      <App />
    </ApolloProvider>
  </React.StrictMode>
);
