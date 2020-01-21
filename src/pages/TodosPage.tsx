import React, { useState, useEffect } from "react";
import { TodoForm } from "./../components/TodoForm";
import { TodoList } from "./../components/TodoList";
import { ITodo } from "../interfaces";

export const TodosPage: React.FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("todos") || "[]") as ITodo[];
    setTodos(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

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
  const toggleHandler = (id: number) => {
    setTodos(prev =>
      prev.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    );
  };
  const deleteHandler = (id: number) => {
    setTodos(prev => prev.filter(todo => todo.id !== id));
  };
  return (
    <>
      <TodoForm onAdd={addHandler} />
      <TodoList
        todos={todos}
        onRemove={deleteHandler}
        onToggle={toggleHandler}
      />
    </>
  );
};
