import {
    createBrowserRouter,
  } from "react-router-dom";
import Root from "../layOut/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import Error from "../error/Error";
import Details from "../pages/detailsCard/Details";
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
        element: <Details></Details>,
         loader: () => fetch("/fakeData/fakeData.json"),
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