import React from 'react'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from '../Pages/Root';
import Errormessege from '../Pages/Errormessege';
import Home from '../Pages/Home';

export const router = createBrowserRouter([
  {
    path: "/",
    Component:Root,
    errorElement:<Errormessege></Errormessege>,
    children:[
        {
            index: true,
            path: "/",
            Component:Home
        }
    ]
  },
]);
export default function Routes() {
  return (
    <div>Routes</div>
  )
}
