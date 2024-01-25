import { useEffect } from "react";

export default function UseEffect() {
  const a = 1;
  useEffect(() => {
    console.log("useEffect");
  }, [a]);

  return (
    <div>
      <h1>useEffect</h1>
    </div>
  );
}
