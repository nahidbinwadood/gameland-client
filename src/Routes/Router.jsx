import {createBrowserRouter} from "react-router-dom";
import MainLayout from './../Layouts/MainLayout';
import Login from "../Pages/Login";
import Register from "../Pages/Register";
export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
    },
    {path:"/login",element:<Login/>},
    {path:"/register",element:<Register/>},
  ]);