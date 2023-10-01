import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { client } from "./utils/apolloClient";
import { ApolloProvider } from "@apollo/client";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>
);
