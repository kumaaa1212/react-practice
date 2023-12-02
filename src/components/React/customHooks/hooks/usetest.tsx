import { useState } from "react";

export default function useTest() {
  const [countState, setCountState] = useState(0);

  const handleCount = (count: number) => {
    setCountState(countState + count);
  };
  return { countState, handleCount };
}
