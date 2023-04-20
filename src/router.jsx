import React from "react";
import { createBrowserRouter } from "react-router-dom";
import HeaderCompo from "./commonCompo/header";
import HomeCompo from "./Home.jsx";
import About from "./about.jsx";
import LogInCompo from "./login.jsx";
import RegistrationCompo from "./registrationPage.jsx";

// const ClassCompoRoute = React.lazy(()=>{return import('./Component/ClassComponent/ClassCompoRouter')})
// const ClassCompoRoute = React.lazy(()=>  import('./Component/ClassComponent/ClassCompoRouter'))
// const FunctionalCompoRoute = React.lazy(()=>  import('./Component/Functional Component/FunctionalCompoRouter'))
const MainRouter = createBrowserRouter([
  {
    path: "/",
    element: <><HeaderCompo /><HomeCompo /></>,
  },
  {
    path: "/home",
    element: <><HeaderCompo /><HomeCompo /></>,
  },
  {
    path: "/about",
    element: <><HeaderCompo /><About /></>,
  },
  {
    path: "/login",
    element: <><LogInCompo/></>,
  },
  {
    path: "/register",
    element: <><RegistrationCompo/></>,
  }
]);

export default MainRouter;