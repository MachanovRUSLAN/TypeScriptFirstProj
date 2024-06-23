import React, { useState } from "react";
import Input from "./Index"; // Ensure this path is correct
import { Todos } from "./type"; // Ensure this path is correct
import Message from "./Message";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todos[]>([]);

  console.log(todo);

  const atMessage = () => {
    if (todo) {
      setTodos([...todos, { message: todo, id: todos.length + 1 }]);
      setTodo(""); // Clear the input after adding
    }
  };


  const deleteMessage = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  console.log(todos);

  return (
    <div className="App">
      <Input atMessage={atMessage} todo={todo} setTodo={setTodo} />
      <Message todos={todos} deleteMessage={deleteMessage} />
    </div>
  );
};

export default App;
