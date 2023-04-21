import React, { Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import HeaderCompo from "./commonCompo/header";
import HomeCompo from "./Home.jsx";
import About from "./about.jsx";
import LogInCompo from "./login.jsx";
import RegistrationCompo from "./registrationPage.jsx";

const AdminRoute = React.lazy(()=>{return import('./Admin/AdminDashboard.jsx')})
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
  },
  {
    path: "/admin/*",
    element: <><Suspense Suspense fallback={<h2>Loading...</h2>}><AdminRoute/></Suspense></>,
    // children: [
    //   {
    //     path: "classcompo/*",
    //     element: <Suspense fallback={<h2>Loading...</h2>}><ClassCompoRoute/></Suspense>
    //   },
    //   {
    //     path: "functionalcompo/*",
    //     element: <Suspense fallback={<h2>Loading...</h2>}><FunctionalCompoRoute/></Suspense>
    //   }
    // ]

  }
]);

export default MainRouter;