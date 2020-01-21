import React, { useRef } from "react";

// without interface
// const App: React.FC<{ onAdd(title: string): void }> = props => {

//with interface:

interface TodoFormProps {
  onAdd(title: string): void;
}

export const TodoForm: React.FC<TodoFormProps> = props => {
  // const [title, setTitle] = useState<string>("");
  // const change = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setTitle(event.target.value);
  // };

  const myref = useRef<HTMLInputElement>(null);

  const keyPressHandler = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      // console.log(title);
      // setTitle("");

      props.onAdd(myref.current!.value);
      console.log(myref.current!.value);
      myref.current!.value = "";
    }
  };
  return (
    <div className="input-field mt2">
      <input
        // value={title}
        // onChange={change}
        ref={myref}
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
