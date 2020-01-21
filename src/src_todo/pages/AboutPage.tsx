import React from "react";
import { useHistory } from "react-router-dom";

export const AboutPage: React.FC = () => {
  const history = useHistory();
  return (
    <>
      <h1>Info Page</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui minima
        ullam perferendis eum, accusantium dignissimos culpa. Sed explicabo
        quaerat dolorum.
      </p>
      <button className="btn" onClick={() => history.push("/")}>
        Back to todos
      </button>
    </>
  );
};
