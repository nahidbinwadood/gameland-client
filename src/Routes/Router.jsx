import {createBrowserRouter} from "react-router-dom";
import MainLayout from './../Layouts/MainLayout';
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Homepage from "../Pages/Homepage/Homepage";
export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children:[
        {
          index:true,
          element:<Homepage/>
        }
      ]
    },
    {path:"/login",element:<Login/>},
    {path:"/register",element:<Register/>},
  ]);