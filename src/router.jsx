import { createBrowserRouter, Outlet } from "react-router-dom";
import { Home } from "./pages/Home";
import { Store } from "./pages/Store";
import { About } from "./pages/About";
import { Team } from "./pages/Team";
import { TeamMember } from "./pages/TeamMember";
import { Navbar } from "./Navbar";
import { TeamNav } from "./TeamNav";
import "./styles.css";


export const router = createBrowserRouter(
  [
    {
      element: <NavLayout />,
      errorElement: <h1>Error</h1>,
      children: [
        { path: "/", element: <Home /> },
        { path: "/about", element: <About /> },
        { path: "/store", element: <Store /> },
        {
          path: "/team",
          element: <TeamNavLayout />,
          children: [
            { index: true, element: <Team /> },
            { path: "joe", element: <TeamMember name="joe" /> },
            { path: "sally", element: <TeamMember name="sally" /> },
          ],
        },
      ],
    },
  ],
);

function NavLayout() {
  return (
    <>
      {/* Renders navbar */}
      <Navbar />
      {/* Renders child that matches the route */}
      <Outlet /> 
    </>
  )
}


function TeamNavLayout() {
  return (
    <>
      <TeamNav />
      <Outlet context="Hi from outlet"/>
    </>
  )
}