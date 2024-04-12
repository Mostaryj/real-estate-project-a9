import {
    createBrowserRouter,
  } from "react-router-dom";
import Root from "../layOut/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import Error from "../error/Error";
const routes = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <Error></Error>,
      children: [
        {
            path: '/',
            element: <Home></Home>,
        },
        {
          path: "/login",
          element: <Login></Login>,
        },
        {
          path: '/register',
          element: <Register></Register>,
        }
       
      ]
    },
  ]);
  export default routes;