import { Link } from "react-router-dom";

export function TeamMember( { name }) {
  return (
    <>
      <div>
        <h1>Team Member - { name }</h1>
          <ul>
            <li>
              <Link to=".." relative="path">
                ..Relative to Path - { name }
              </Link>
          </li>
          <li>
            <Link to="..">
              ..Relative to Route - { name }
            </Link>
          </li>
          </ul>
      </div>
    </>
  )
}