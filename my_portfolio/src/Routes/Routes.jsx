import React, { Component } from 'react'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from '../Pages/Root';
import Errormessege from '../Pages/Errormessege';
import Home from '../Pages/Home';
import About from '../Pages/About';
import Skills from '../Pages/Skills';
import Contact from '../Pages/Contact';

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
        },
        {path:"/about",
        Component:About
        },
        {path:"/skills",
        Component:Skills
        },
        {path:"/contact",
        Component:Contact
        },
    ]
  },
]);
export default function Routes() {
  return (
    <div>Routes</div>
  )
}
