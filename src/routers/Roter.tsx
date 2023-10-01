import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import NotFound from "../pages/NotFound";
import ErrorComponent from "../components/errors/ErrorComponent";
import User from "../components/users/User";
import Followers from "../components/users/Followers";
import LoggedInRouter from "./LoggedInRouter";
import LoggedOutRouter from "./LoggedOutRouter";
import Login from "../pages/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        path: "",
        element: <Login />,
        errorElement: <ErrorComponent />,
      },
      {
        path: "logout",
        element: <LoggedOutRouter />,
        errorElement: <ErrorComponent />,
      },
      {
        path: "users/:id",
        element: <User />,
        children: [
          {
            path: "followers",
            element: <Followers />,
          },
        ],
      },
    ],
  },
]);

export default router;
