import React from "react";
import Navbar from "./components/Navbar";
import "materialize-css/dist/css/materialize.min.css";
import { TodoForm } from "./components/TodoForm";

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      ME TEXT
      <div className="container">
        <TodoForm />
      </div>
    </>
  );
};

export default App;
