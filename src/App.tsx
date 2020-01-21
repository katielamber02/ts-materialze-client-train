import React, { useState } from "react";
import Navbar from "./components/Navbar";
import "materialize-css/dist/css/materialize.min.css";
import { TodoForm } from "./components/TodoForm";

const App: React.FC = () => {
  const [todos, setTodos] = useState([]);

  const addHandler = (title: string) => {
    console.log("Add todo", title);
  };
  return (
    <>
      <Navbar />
      ME TEXT
      <div className="container">
        <TodoForm onAdd={addHandler} />
      </div>
    </>
  );
};

export default App;
