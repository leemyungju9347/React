import React, { useState, useEffect, useRef } from "react";

const useClick = (clickEvent) => {
  if (typeof clickEvent !== "function") return;

  const element = useRef();
  useEffect(() => {
    if (element.current) {
      element.current.addEventListener("click", clickEvent);
    }

    return () => {
      if (element.current) {
        element.current.removeEventListener("click", clickEvent);
      }
    };
  }, []);

  return element;
};

export default function App() {
  const sayHello = () => {
    console.log("hello!");
  };
  const title = useClick(sayHello);
  return (
    <div className="App">
      <h1 ref={title}>hi</h1>
    </div>
  );
}
