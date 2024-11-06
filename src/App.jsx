import { useState } from "react";
import { TodoItem } from "./TodoItem";
import "./styles.css";

function App() {
  const [newTodo, setNewTodo] = useState("");
  const [todos, setTodos] = useState([]);

  function addNewTodo() {
    if (newTodo === "") return;

    setTodos((currentTodos) => {
      return [
        ...currentTodos,
        { name: newTodo, completed: false, id: crypto.randomUUID() },
      ];
    });
    setNewTodo("");
  }

  function toggleTodo(todoId, completed) {
    setTodos((currentTodos) => {
      return currentTodos.map((todo) => {
        if (todo.id === todoId) return { ...todo, completed };

        return todo;
      });
    });
  }

  function deleteTodo(todoId) {
    setTodos((currentTodos) => {
      return currentTodos.filter((todo) => todo.id !== todoId);
    });
  }

  return (
    <>
      <ul id="list">
        {todos.map((todo) => {
          return (
            <TodoItem
              key={todo.id}
              {...todo}
              toggleTodo={toggleTodo}
              deleteTodo={deleteTodo}
            />
          );
        })}
      </ul>

      <div id="new-todo-form">
        <label htmlFor="todo-input">New Todo</label>
        <input
          type="text"
          id="todo-input"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button onClick={addNewTodo}>Add Todo</button>
      </div>
    </>
  );
}

export default App;
