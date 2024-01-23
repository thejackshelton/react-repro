/** @jsxImportSource react */
import { useState } from "react";

export const AstroJSReactCounter = () => {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(count + 1)}>@astrojs/react {count}</button>
  );
};
