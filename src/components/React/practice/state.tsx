import { useState } from "react";

export default function Statetest() {
  const [insideFirstState, setInsideFirstState] = useState("firstState");
  return (
    <div>
      <h1>State</h1>
      <button>Click</button>
    </div>
  );
}
