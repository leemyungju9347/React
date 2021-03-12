import React from "react";

const usePreventLeave = () => {
  const listener = (event) => {
    event.preventDefault();

    event.returnValue = "";
  };
  
  const enablePrevent = () => window.addEventListener("beforeunload", listener);
  const unenablePrevent = () =>
    window.removeEventListener("beforeunload", listener);

  return { enablePrevent, unenablePrevent };
};

export const App = () => {
  const { enablePrevent, unenablePrevent } = usePreventLeave();
  return (
    <div className="App">
      <button onClick={enablePrevent}>Protect</button>
      <button onClick={unenablePrevent}>Unprotect</button>
    </div>
  );
};
