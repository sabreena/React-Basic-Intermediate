import { Name } from "./Name";
import { NameClass } from "./NameClass";
import { TodoListItem } from "./TodoListItem";
import { TodoListItemClass } from "./TodoListItemClass";
import "./user-card/user.css";
import user from "./user-card/user.json";
import { UserCard } from "./user-card/UserCard";
import { UserCardClass } from "./user-card/UserCardClass";

function App() {
  //return "Hello React!";

  return (
    <div>
      <Name />
      <TodoListItem isComplete>Child prop one</TodoListItem>
      <TodoListItem isComplete={false}>Child prop two</TodoListItem>
      <NameClass />
      <TodoListItemClass isComplete={false}>Child prop one</TodoListItemClass>
      <TodoListItemClass isComplete={true}>Child prop two</TodoListItemClass>
      <h1>User Card Example</h1>
      <UserCard
        name={user[0].name}
        age={user[0].age}
        phoneNumber={user[0].phoneNumber}
        address={user[0].address}
      />
      <h1>User Card Class Example</h1>
      <UserCardClass
        name={user[1].name1}
        age={user[1].age1}
        phoneNumber={user[1].phoneNumber1}
        address={user[1].address1}
      />
    </div>
  );
}

export default App;
