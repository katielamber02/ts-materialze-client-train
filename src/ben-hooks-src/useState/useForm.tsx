import { useState } from "react";

export const useForm = (initialValues: object) => {
  const [values, setValues] = useState(initialValues);
  console.log([
    values,
    (event: any) =>
      setValues({
        ...values,
        [event.target.name]: event.target.value
      })
  ]);

  return [
    values,
    (event: any) =>
      setValues({
        ...values,
        [event.target.name]: event.target.value
      })
  ];
};

// ES6 dynamic:

// const name = "firstName"

// { [name]: "ben" }

// is equivalent to

// { "firstName": "ben" }
