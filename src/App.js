import { useState } from "react";
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (newTodo) => {
    newTodo && setTodos([...todos, newTodo]);
  };

  const handleTodo = (element) => {
    setTodos(todos.filter((todo) => todo !== element));
  };

  return (
    <div className="App">
      <main className="App-main">
        <Form addTodo={addTodo} />
        <TodoList todos={todos} handleTodo={handleTodo} />
      </main>
    </div>
  );
}

export default App;
