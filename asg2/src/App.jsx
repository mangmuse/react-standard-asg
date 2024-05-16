import { useState } from "react";
import "./App.css";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

function App() {
  const [todos, setTodos] = useState([]);
  const addTodo = (newTodo) => setTodos((prev) => [...prev, newTodo]);
  const handleUpdate = (updatedTodo) =>
    setTodos((todos) =>
      todos.map((todo) => (todo.id === updatedTodo.id ? updatedTodo : todo))
    );
  const handleDelete = (toBeDeleted) =>
    setTodos((todos) => todos.filter((todo) => todo.id !== toBeDeleted.id));
  return (
    <>
      <TodoForm onAdd={addTodo} />
      <TodoList
        isDone={false}
        onUpdate={handleUpdate}
        onDelete={handleDelete}
        todos={todos}
      />
      <TodoList
        isDone={true}
        onUpdate={handleUpdate}
        onDelete={handleDelete}
        todos={todos}
      />
    </>
  );
}

export default App;
