import { createBrowserRouter } from "react-router";
import Root from "../Pages/Root.jsx";
import Home from "../Pages/Home.jsx";
import About from "../Pages/About.jsx";
import Skills from "../Pages/Skills.jsx";
import Projects from "../Pages/Projects.jsx";
import Contact from "../Pages/Contact.jsx";
import Errormessege from "../Pages/Errormessege.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Errormessege message="Page not found" />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "skills", element: <Skills /> },
      { path: "projects", element: <Projects /> },
      { path: "contact", element: <Contact /> },
    ],
  },
]);