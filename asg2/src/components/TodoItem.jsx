export default function TodoItem({ todo, onUpdate, onDelete }) {
  const { id, title, content } = todo;
  const handleUpdate = () => onUpdate({ ...todo, isDone: !todo.isDone });
  const handleDelete = () => onDelete(todo);
  return (
    <li>
      <span>{title}</span>
      <span>{content}</span>
      <button onClick={handleUpdate}>{todo.isDone ? "취소" : "완료"}</button>
      <button onClick={handleDelete}>삭제</button>
    </li>
  );
}
