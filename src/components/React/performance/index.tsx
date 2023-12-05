import { useState } from "react";

type Obj = {
  a: number;
};

export default function Performance() {
  const obj = {
    a: 1,
  };
  // トリガー
   // レンダリングが予約されるタイミング
  // レンダリング
   //・初回レンダリング
  //・stateが更新されたとき
   // コミット


// この下の例だとレンダリングが起きているが、参照しているものが同じなので、レンダリングが起きていない。
  const [state, setState] = useState<Obj>(obj);
  const handle = () => {
    setState((prev) => {
      prev.a ++;
      console.log(prev);
      return prev;
    });
  };


  return (
    <div>
      <h1>Performance</h1>
      <button onClick={handle}>レンダリングの確認</button>
      <p>{state.a}</p>
    </div>
  );
}
