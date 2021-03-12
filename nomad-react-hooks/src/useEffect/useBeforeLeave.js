import React, { useState, useEffect, useRef } from "react";

const useBeforeLeave = (onBefore) => {
  if (typeof onBefore !== "function") return;

  const handleLeave = (event) => {
    const { clientY } = event;
    if (clientY <= 0) {
      onBefore();
    }
  };

  useEffect(() => {
    document.addEventListener("mouseleave", handleLeave);

    return () => document.removeEventListener("mouseleave", handleLeave);
  }, []);
};

export const App = () => {
  const begForLife = () => console.log("pls dont leave");
  useBeforeLeave(begForLife);

  return (
    <div className="App">
      <h1>Hello</h1>
    </div>
  );
};
