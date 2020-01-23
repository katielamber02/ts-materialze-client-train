import React, { useState, useRef, useEffect } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);

  countRef.current = count;

  useEffect(() => {
    setTimeout(() => {
      alert("AFTER You clicked on: " + countRef.current); // we are grabbing the reference
    }, 3000);
  }, []);
  // // clicked 1 => 2
  // // alert 2  (last alert)

  // useEffect(() => {
  //   setTimeout(() => {
  //     alert("AFTER You clicked on: " + count);
  //   }, 3000);
  // }, [count]);
  // // clicked 1 => 2
  // // alert 1 => alert 2

  // or clean up function
  // useEffect(() => {
  //   const t = setTimeout(() => {
  //    alert('You clicked on: ' + count);
  //   }, 3000);
  //   return () => { clearTimeout(t); };
  //  }, [count]);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      {/* <button onClick={handleAlertClick}>Show alert</button> */}
    </div>
  );
}
