import { useLoaderData } from "react-router";

export function TeamMember() {
  const member  = useLoaderData();
  console.log(member);
  return (
    <h2>Team Member - {member?.name}</h2>
  );
}