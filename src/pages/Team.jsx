import { useOutletContext } from "react-router"

export function Team() {
  const value = useOutletContext();
  return (
    <>
      <div>
        <h1>Team</h1>
        <p>Learn more about our team! - { value }</p>
      </div>
    </>
  )
}