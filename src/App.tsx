import { gql, useQuery } from "@apollo/client";
import LoggedOutRouter from "./routers/LoggedOutRouter";
import LoggedInRouter from "./routers/LoggedInRouter";

const IS_LOGGED_IN = gql`
  query isLoggedIn {
    isLoggedIn @client
  }
`;

function App() {
  const {
    data: { isLoggedIn },
  } = useQuery(IS_LOGGED_IN);
  return isLoggedIn ? <LoggedInRouter /> : <LoggedOutRouter />;
}

export default App;
