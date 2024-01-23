/** @jsxImportSource react */
import { qwikify$ } from "@builder.io/qwik-react";
import { useState } from "react";

const QwikReactCounter = () => {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(count + 1)}>Qwik-React {count}</button>
  );
};

export const QReactCounter = qwikify$(QwikReactCounter);
