import React, { useState } from "react";

export default function useStateBasic() {
  const [item, setItem] = useState(1);
  const increamentItem = () => setItem(item + 1);
  const decreamentItem = () => setItem(item - 1);

  return (
    <div>
      <h1>{item}</h1>
      <button onClick={increamentItem}>Increament</button>
      <button onClick={decreamentItem}>Decreament</button>
    </div>
  );
}
