import { useState } from "react";

import "./App.css";
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([]);

  const handleAddTodo = (text) => {
    const todo = [...todos, { id: Date.now(), text: text }];
    setTodos(todo);
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <h2>My todos</h2>
      </header>

      <main className="app-card">
        <Form onSubmit={handleAddTodo} />
        <TodoList value={todos} />
      </main>
    </div>
  );
}

export default App;
