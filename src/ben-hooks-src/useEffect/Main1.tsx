import React, { useEffect } from "react";

import { useForm } from "../useState/useForm";
import HooksClosureProblemBefore from "./HooksClosureProblem/before";
import HooksClosureProblemAfter from "./HooksClosureProblem/after";

export const Main1 = () => {
  const [values, handleChange] = useForm({ email: "", password: "" });
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
      <HooksClosureProblemBefore />
      <HooksClosureProblemAfter />
    </div>
  );
};
