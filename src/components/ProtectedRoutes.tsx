import { gql, useQuery } from "@apollo/client";
import { ReactNode, useEffect } from "react";
import LoggedInRouter from "../routers/LoggedInRouter";
import LoggedOutRouter from "../routers/LoggedOutRouter";

const IS_LOGGED_IN = gql`
  query isLoggedIn {
    isLoggedIn @client
  }
`;
function ProtectedRoutes({ children }: { children: ReactNode }) {
  const {
    data: { isLoggedIn },
  } = useQuery(IS_LOGGED_IN);
  useEffect(() => {
    isLoggedIn ? <LoggedInRouter /> : <LoggedOutRouter />;
  }, [isLoggedIn]);
  return children;
}

export default ProtectedRoutes;
