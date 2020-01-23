import React, { useState, useRef, useEffect } from "react";

// the problem with this code: when you click Alert
// and counter after that
// alert will show the counter at the moment it was clicked
// not the actual one

export default function App() {
  const [count, setCount] = useState(0);

  // because react state is a new object every time setState is called?

  // useEffect(() => {
  //   setTimeout(() => {
  //     alert("AFTER You clicked on: " + count);
  //   }, 3000);
  // }, []);

  function handleAlertClick() {
    setTimeout(() => {
      alert(" BEFORE You clicked on: " + count);
    }, 3000);
  }

  return (
    <div>
      <p>Before: press alert than counter to see the problem</p>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <button onClick={handleAlertClick}>Show alert</button>
      <p>After:</p>
    </div>
  );
}
