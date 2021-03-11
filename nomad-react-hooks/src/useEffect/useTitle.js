import React, { useState, useEffect } from "react";

const useTitle = (initTitle) => {
  const [title, setTitle] = useState(initTitle);
  const updateTitle = () => {
    const htmlTitle = document.querySelector("title");
    htmlTitle.innerHTML = title;
  };

  useEffect(updateTitle, [title]); // title이 업데이트될때 updateTitle실행

  return setTitle;
};

export default function App() {
  const titleUpdate = useTitle("loading...");

  setTimeout(() => {
    titleUpdate("HOME");
  }, 5000);
  return (
    <div className="App">
      <div>hi</div>
    </div>
  );
}
