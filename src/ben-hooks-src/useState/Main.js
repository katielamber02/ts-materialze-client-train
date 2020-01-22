import React, { useState } from "react";

// [___1___]
export const Main = () => {
  const [count, setCount] = useState(10);
  console.log(count);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count + 1)}>+</button>

      {/* <button onClick={() => setCount(c => c + 1)}>+</button>
      <button onClick={() => setCount(c => c + 1)}>+</button>
      */}
      {count}
    </div>
  );
};

// [___2___]
// export const Main = () => {
//   const [{ count1, count2 }, setCount] = useState({ count1: 1, count2: 2 });
//   console.log({ count1, count2 });
//   return (
//     <div>
//       <button
//         onClick={
//           () =>
//             // setCount(currentState => ({ count1: currentState.count1 + 1 })) // count2:undefined because no merge
//             setCount(currentState => ({
//               // to avoid this merge objects
//               ...currentState,
//               count1: currentState.count1 + 1
//             }))
//           // OR:
//           // count1: currentState.count1 + 1,
//           // count2: currentState.count2
//         }
//       >
//         add
//       </button>
//       <div>count1:{count1}</div>
//       <div>count2:{count2}</div>
//     </div>
//  );
// };

// [___3___]
// export const Main = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   console.log(email, password);
//   return (
//     <div>
//       <input
//         name="email"
//         value={email}
//         onChange={e => setEmail(e.target.value)}
//       />
//       <input
//         type="password"
//         value={password}
//         onChange={e => setPassword(e.target.value)}
//       />

//     </div>
//   );
// };

// [___4___]

// import { useForm } from "./useForm";
// export const Main = () => {
//   const [values, handleChange] = useForm({ email: "", password: "" });
//   console.log("values:", values);
//   return (
//     <div>
//       <input name="email" value={values.email} onChange={handleChange} />
//       <input type="password" value={values.password} onChange={handleChange} />
//     </div>
//   );
// };
