import React, { useEffect } from "react";

export const Hello = () => {
  useEffect(() => {
    console.log("render");
    return () => {
      console.log("unmount");
    };
  }, []);
  // [dependable on different values]
  return <div>Hello Component to show unmount</div>;
};
