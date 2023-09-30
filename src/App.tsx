import { gql, useQuery } from "@apollo/client";
import React from "react";
import { Outlet } from "react-router-dom";

const IS_LOGGED_IN = gql`
  query isLoggedIn {
    isLoggedIn @client
  }
`;

function App() {
  const { data } = useQuery(IS_LOGGED_IN);
  console.log(data);
  return (
    <>
      <Outlet />
    </>
  );
}

export default App;
