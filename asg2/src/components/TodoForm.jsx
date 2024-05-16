import { useState } from "react";
import { v4 as uuid } from "uuid";

export default function TodoForm({ onAdd }) {
  const initialText = { title: "", content: "" };
  const [text, setText] = useState(initialText);
  const handleSubmit = (e) => {
    e.preventDefault();
    const { title, content } = text;
    if (title.trim === "" || content.trim() === "") {
      alert("123");
      return;
    }
    const newTodo = { id: uuid(), title, content, isDone: false };
    onAdd(newTodo);
    setText(initialText);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        value={text.title}
        onChange={(e) =>
          setText((prev) => ({ ...prev, title: e.target.value }))
        }
        type="text"
        placeholder="title"
      />
      <input
        value={text.content}
        onChange={(e) =>
          setText((prev) => ({ ...prev, content: e.target.value }))
        }
        type="text"
        placeholder="content"
      />
      <button>asd</button>
    </form>
  );
}
