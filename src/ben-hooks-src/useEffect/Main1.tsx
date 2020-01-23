import React, { useEffect, useState } from "react";

import { useForm } from "../useState/useForm";
// import HooksClosureProblemBefore from "./HooksClosureProblem/before";
// import HooksClosureProblemAfter from "./HooksClosureProblem/after";
import { Hello } from "./HelloForUnmount";

import { useFetch } from "./useFetch";

type urlCounter = {
  urlcount: string;
};

export const Main1 = () => {
  const [values, handleChange] = useForm({ email: "", password: "" });
  const [showHello, setHello] = useState(true);
  // const [urlcount, setUrlCount] = useState(0);
  const [urlcount, setUrlCount] = useState(() =>
    JSON.parse(localStorage.getItem("todos") || "0")
  );
  const { data, loading } = useFetch(
    `http://numbersapi.com/${urlcount}/trivia`
  );
  useEffect(() => {
    localStorage.setItem("urlcount", JSON.stringify(urlcount));
  }, [urlcount]);
  console.log("values:", values);
  useEffect(() => {
    console.log("render");
  }, [values.password]);
  // [] renders once when it mounts
  // shallow comparison. (created object or reference changed)

  return (
    <div>
      <p>{loading ? "Loading ..." : <p>Fetch reponse:</p> && data}</p>
      <button onClick={() => setUrlCount((c: string) => c + 1)}>
        increment {urlcount as urlCounter}
      </button>
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
