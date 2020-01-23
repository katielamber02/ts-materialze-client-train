import { useState } from "react";

export const useForm = (initialValues: any) => {
  const [values, setValues] = useState(initialValues);

  return [
    values,
    (e: any) => {
      setValues({
        ...values,
        [e.target.name]: e.target.value
      });
    }
  ];
};

// ES6 dynamic:

// const name = "firstName"

// { [name]: "ben" }

// is equivalent to

// { "firstName": "ben" }
