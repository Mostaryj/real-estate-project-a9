import {
    createBrowserRouter,
  } from "react-router-dom";
import Root from "../layOut/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import Error from "../error/Error";
import Details from "../pages/detailsCard/Details";
import UserProfile from "../profile/UserProfile";
import UPdateProfile from "../profile/UPdateProfile";
import About from "../pages/about/About";
import PrivateRoute from "../privateRoute/PrivateRoute";
const routes = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <Error></Error>,
      children: [
        {
            path: '/',
            element: <Home></Home>,
            loader: () => fetch("/fakeData/fakeData.json"),
        },
        {
        path: '/details/:id',      
        element: <PrivateRoute><Details></Details></PrivateRoute>,
         loader: () => fetch("/fakeData/fakeData.json"),
        },
        {
          path: "/login",
          element: <Login></Login>,
        },
        {
          path: '/register',
          element: <Register></Register>,
        },
        {
          path: "/user",
          element: <UserProfile></UserProfile>,
        },
        {
          path: "/update",
          element: <PrivateRoute><UPdateProfile></UPdateProfile></PrivateRoute>,
        },
        {
          path: "/about",
          element:<PrivateRoute> <About></About></PrivateRoute>,
        }
       
      ]
    },
  ]);
  export default routes;