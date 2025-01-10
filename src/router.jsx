import { createBrowserRouter, Navigate, Outlet } from "react-router-dom";
import { Home } from "./pages/Home";
import { Store } from "./pages/Store";
import { About } from "./pages/About";
import { Team } from "./pages/Team";
import { TeamMember } from "./pages/TeamMember";
import { NewTeamMember } from "./pages/NewTeamMember";
import { Navbar } from "./Navbar";
import { TeamNav } from "./TeamNav";
import "./styles.css";


export const router = createBrowserRouter(
  [
    {
      element: <NavLayout />,
      errorElement: <h1>Error</h1>,
      children: [
       // { path: "*", element: <h1>404</h1> },
        { path: "*", element: <Navigate to="/" /> },
        { path: "/", element: <Home /> },
        { path: "/about", element: <About /> },
        { path: "/store", element: <Store /> },
        {
          path: "/team",
          element: <TeamNavLayout />,
          children: [
            { index: true, element: <Team /> },
            { path: ":memberId", element: <TeamMember /> },
            { path: "new", element: <NewTeamMember /> },
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
      <Outlet/>
    </>
  )
}