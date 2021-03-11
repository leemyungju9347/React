import React, { useState } from "react";

const setInput = (initValue, validator) => {
  const [value, setValue] = useState(initValue);
  const onChange = (event) => {
    const {
      target: { value }
    } = event;

    let willUpdate = true;
    console.log(typeof validator);

    if (typeof validator === "function") {
      validator(value); // value 값의 유효성검사를 체크

      willUpdate = validator(value);
    }

    if (willUpdate) {
      setValue(value);
    }
  };

  // 먼저 기본값을 리턴
  return { value, onChange };
};

export default function App() {
  const maxLen = (value) => value.length <= 10;
  // const valueInclude = (value) => !value.includes("@");

  const name = setInput("Mr.", maxLen);

  return (
    <div className="App">
      <h1>Hello</h1>
      <input placeholder="name" {...name} />
    </div>
  );
}
