import { useParams } from "react-router";
import teamMembers from "../teamMembers.json";

export function TeamMember() {
  const { memberId }  = useParams();
  console.log(memberId);
  const member = teamMembers.find((m) => m.id === memberId);  
  return (
    <div>
      <h2>Team Member - {member?.name}</h2>
      <p>{member?.role}</p>
    </div>
  );
}