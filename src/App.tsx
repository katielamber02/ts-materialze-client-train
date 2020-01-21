import React, { useState } from "react";
import Navbar from "./components/Navbar";
import "materialize-css/dist/css/materialize.min.css";
import { TodoForm } from "./components/TodoForm";
import { TodoList } from "./components/TodoList";
import { ITodo } from "./interfaces";

const App: React.FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);

  const addHandler = (title: string) => {
    console.log("Add todo", title);
    const newTodo: ITodo = {
      title: title,
      id: Date.now(),
      completed: false
    };
    //setTodos([newTodo, ...todos]);
    setTodos(prev => [newTodo, ...prev]);
  };
  const toggleHandler = (id: number) => {};
  const deleteHandler = (id: number) => {};
  return (
    <>
      <Navbar />
      ME TEXT
      <div className="container">
        <TodoForm onAdd={addHandler} />
        <TodoList todos={todos} />
      </div>
    </>
  );
};

export default App;
