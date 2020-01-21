import React, { useState } from "react";

export const TodoForm: React.FC = () => {
  const [title, setTitle] = useState<string>("");
  const change = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };
  const keyPressHandler = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      console.log(title);
    }
  };
  return (
    <div className="input-field mt2">
      <input
        value={title}
        onChange={change}
        type="text"
        id="title"
        placeholder="put some text here"
        onKeyPress={keyPressHandler}
      />
      <label htmlFor="title" className="active">
        Enter the todo item
      </label>
    </div>
  );
};
