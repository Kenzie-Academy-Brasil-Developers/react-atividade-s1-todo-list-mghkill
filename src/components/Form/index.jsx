import { useState } from "react";
import "./style.css";
const Form = ({ addTodo }) => {
  const [inputValue, setInputValue] = useState("");

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        placeholder="Insira uma tarefa"
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button
        onClick={() => {
          addTodo(inputValue);
          setInputValue("");
        }}
      >
        Adicionar
      </button>
    </div>
  );
};
export default Form;
