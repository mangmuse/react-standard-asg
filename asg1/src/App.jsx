import { useState } from "react";
import "./App.css";

function App() {
  const initialState = [
    { id: 1, name: "John", age: 20 },
    { id: 2, name: "Doe", age: 21 },
  ];
  const initialUserInfo = { name: "", age: "" };

  const [users, setUsers] = useState(initialState);
  const [userInfo, setUserInfo] = useState(initialUserInfo);
  const handleChange = (e, key) =>
    setUserInfo((prev) => ({ ...prev, [key]: e.target.value }));

  const addUser = (e) => {
    e.preventDefault();
    if (userInfo.name.trim() === "" || userInfo.age.trim() === "") {
      alert("asd");
      return;
    }
    const { name, age } = userInfo;
    setUsers((prev) => [...prev, { id: Date.now(), name, age }]);
    setUserInfo(initialUserInfo);
  };

  const handleDelete = (id) => {
    setUsers((users) => users.filter((user) => user.id !== id));
  };

  return (
    <>
      <h1>사용자 리스트</h1>
      <form onSubmit={addUser}>
        <input
          onChange={(e) => handleChange(e, "name")}
          type="text"
          placeholder="이름"
          value={userInfo.name}
        />
        <input
          onChange={(e) => handleChange(e, "age")}
          type="number"
          placeholder="나이"
          value={userInfo.age}
        />
        <button type="submit">사용자 추가</button>
      </form>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <span>{`이름: ${user.name}`}</span>
            <span>{`나이: ${user.age}`}</span>
            <button onClick={() => handleDelete(user.id)}>삭제</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
