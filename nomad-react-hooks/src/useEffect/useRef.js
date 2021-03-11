import "./styles.css";
import React, { useState, useEffect, useRef } from "react";

export default function App() {
  const potato = useRef();

  setTimeout(() => {
    console.log(potato);
  }, 5000);

  return (
    <div className="App">
      <div>hi</div>
      <input ref={potato} placeholder="hey" />
    </div>
  );
}
