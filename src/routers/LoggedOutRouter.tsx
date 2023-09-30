import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import NotFound from "../pages/NotFound";
import Home from "../pages/Home";
import ErrorComponent from "../components/ErrorComponent";
import User from "../components/users/User";
import Followers from "../components/users/Followers";
const LoggedOutRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        path: "",
        element: <Home />,
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
export default LoggedOutRouter;
