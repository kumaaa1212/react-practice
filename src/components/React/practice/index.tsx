import { useState } from "react";
import Statetest from "./state";

export default function State() {
  const [firstState, setFirstState] = useState("firstState");
  const [secondState, setSecondState] = useState("secondState");
  const [thirdState, setThirdState] = useState("thirdState");

  const handleClick = () => {
    console.log("Clicked");
    // 実行した状態でイベントリスナに登録すると、undefinedが返ってくる
  };
  console.log(<Statetest />);

  return (
    <div>
      <h1>State</h1>
      <button onClick={handleClick}>Click</button>
    </div>
  );
}
