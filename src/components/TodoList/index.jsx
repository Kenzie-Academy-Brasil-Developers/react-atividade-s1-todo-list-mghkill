const TodoList = ({ todos, handleTodo }) => {
  return (
    <div>
      <ul>
        {todos.map((element, index) => (
          <li key={index}>
            {element}
            <button onClick={() => handleTodo(element)}>Concluir</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default TodoList;
