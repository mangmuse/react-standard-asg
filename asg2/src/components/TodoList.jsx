import TodoItem from "./TodoItem";

export default function TodoList({ todos, onUpdate, onDelete, isDone }) {
  const filteredTodos = filterTodos(todos, isDone);
  return (
    <ul>
      <span>{isDone ? "완료" : "진행중"}</span>
      {filteredTodos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onUpdate={onUpdate}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
}

function filterTodos(todos, isDone) {
  return todos.filter((todo) => todo.isDone === isDone);
}
