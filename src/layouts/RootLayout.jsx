import {
  Link,
  Outlet,
  ScrollRestoration,
  useNavigation,
} from "react-router-dom"

export function RootLayout() {
  // useNavigation() hook gives information of our state.
  const { state } = useNavigation()
  console.log(state)
  const isLoading = state === "loading"

  return (
    <>
      <nav className="top-nav">
        <div className="nav-text-large">My App</div>
        <ul className="nav-list">
          <li>
            <Link to="/posts">Posts</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
          <li>
            <Link to="/todos">Todos</Link>
          </li>
        </ul>
      </nav>
      {/* It controls the behavior of the scroll position when navigating between pages in the browser. */}
      <ScrollRestoration />
      {isLoading && <div className="loading-spinner" />}
      <div className={`container ${isLoading ? "loading" : ""}`}>
        <Outlet />
      </div>
    </>
  )
}
