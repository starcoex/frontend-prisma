import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import ErrorComponent from "../components/ErrorComponent";
import User from "../components/users/User";
import Followers from "../components/users/Followers";

const router = createBrowserRouter([
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
  {
    path: "/",
  },
]);

export default router;
