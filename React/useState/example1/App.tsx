import { useState } from "react";

type Todo = {
  id: number;
  title: string;
  description: string;
};

const App = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAddTodo = () => {
    const nextTodosLength = todos.length + 1;
    const newTodo: Todo = {
      id: nextTodosLength,
      title: `Todo ${nextTodosLength}`,
      description: `description ${nextTodosLength}`,
    };

    setTodos((prevState) => [...prevState, newTodo]);
  };

  return (
    <div>
      <ul>
        {todos.map((todo) => {
          return (
            <div key={todo.id}>
              <h1>{todo.title}</h1>
              <p>{todo.description}</p>
            </div>
          );
        })}
      </ul>

      <button onClick={handleAddTodo}>Add Todo</button>
    </div>
  );
};

export default App;
