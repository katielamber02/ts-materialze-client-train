import React, { useEffect, useState } from "react";

import { useForm } from "../useState/useForm";
// import HooksClosureProblemBefore from "./HooksClosureProblem/before";
// import HooksClosureProblemAfter from "./HooksClosureProblem/after";
import { Hello } from "./HelloForUnmount";

export const Main1 = () => {
  const [values, handleChange] = useForm({ email: "", password: "" });
  const [showHello, setHello] = useState(true);
  console.log("values:", values);
  useEffect(() => {
    console.log("render");
  }, [values.password]);
  // [] renders once when it mounts
  // shallow comparison. (created object or reference changed)

  return (
    <div>
      <input name="email" value={values.email} onChange={handleChange} />

      <input
        type="password"
        name="password"
        value={values.password}
        onChange={handleChange}
      />
      {/* <HooksClosureProblemBefore />
      <HooksClosureProblemAfter /> */}
      <button onClick={() => setHello(!showHello)}>
        {showHello ? "hide" : "show"}
      </button>
      {showHello && <Hello />}
    </div>
  );
};
