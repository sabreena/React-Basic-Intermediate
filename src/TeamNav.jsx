import { Link } from "react-router-dom";

export function TeamNav() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="joe">Team - joe</Link>
        </li>
        <li>
          <Link to="sally">Team - Sally</Link>
        </li>
        <li>
          <Link to="..">..Route</Link> {/* Navigates to root */}
        </li>
        <li>
          <Link to=".." relative="path"> {/* Navigates to /team */}
            ..Path
          </Link>
        </li>
      </ul>
    </nav>
  )
}