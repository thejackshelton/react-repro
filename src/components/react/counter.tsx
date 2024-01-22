// This pragma is required so that React JSX is used instead of Qwik JSX

/** @jsxImportSource react */
import { qwikify$ } from "@builder.io/qwik-react";
import { useState } from "react";

const ReactCounter = () => {
  const [count, setCount] = useState(0);

  return <button onClick={() => setCount(count + 1)}>React {count}</button>;
};

// Qwik component wrapping the React component
export const QReactCounter = qwikify$(ReactCounter);
