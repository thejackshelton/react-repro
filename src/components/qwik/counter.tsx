import { component$, useSignal } from "@builder.io/qwik";

export const QCounter = component$((props) => {
  const counter = useSignal(0);

  return <button onClick$={() => counter.value++}>Qwik {counter.value}</button>;
});
