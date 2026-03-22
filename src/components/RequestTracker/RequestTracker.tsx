import { useState } from "react";

function RequestTracker() {
  const [pending, setPending] = useState(0);
  const [completed, setCompleted] = useState(0);
  function handleBuy() {
    setPending(pending + 1);
    setTimeout(() => {
      setPending((p) => p - 1);
      setCompleted((c) => c + 1);
    }, 3000);
  }
  return (
    <>
      <h3>Pending : {pending}</h3>
      <h3>Completed : {completed}</h3>
      <button onClick={handleBuy}>Buy</button>
    </>
  );
}

export default RequestTracker;
