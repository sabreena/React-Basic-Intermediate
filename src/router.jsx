import { createBrowserRouter, Navigate, Outlet, redirect, useNavigation } from "react-router-dom";
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
          loader: ({ request: { signal } }) => {
            return fetch("https://jsonplaceholder.typicode.com/users?_limit=4", { signal } )
          },
          children: [
            { index: true, element: <Team /> },
            { path: ":memberId", loader: ({ params, request: { signal } }) => { return fetch(`https://jsonplaceholder.typicode.com/users/${params.memberId}`, { signal })
             .then (res => {
              if (res.status === 200 ) return res.json();
              throw redirect("/team");
            }) },
            element: <TeamMember /> },
            { path: "new", element: <NewTeamMember /> },
          ],
        },
      ],
    },
  ],
);

function NavLayout() {
  const { state } = useNavigation();
  console.log(state);
  return (
    <>
      <Navbar />
      {state === "loading" ? <h1>Loading</h1> : <Outlet />}
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