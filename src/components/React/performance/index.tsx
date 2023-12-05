import { useCallback, useMemo, useState } from "react";

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
  // だから他のところでレンダリングが起きたタイミングで表示が一気に変わる
  const [state, setState] = useState<Obj>(obj);
  const handle = () => {
    setState((prev) => {
      prev.a++;
      console.log(prev);
      return prev;
    });
  };

  // useCallback

  const [count, setCount] = useState(0);
  const handleClick = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);
  // const handleClick = useCallback(() => {
  //   setCount(count + 1);
  // }, [count]);
  // prevという文字が変わっていないから大丈夫。
  // countを入れてしまうと、更新が必要になる


  // usememo
  // メモ化→キャッシュ化→値を再計算せずに、値をどこかに保存してそれを使う。
  const [number, setNumber] = useState(0);
  const double = (number: number) => {
    let i = 0;
    i = number * 2;
    return i
  };

  const doubledCount = useMemo(() => double(number), [number]);

  return (
    <div>
      <h1>Performance</h1>
      <button onClick={handle}>レンダリングの確認</button>
      <p>{state.a}</p>
      <button onClick={handleClick}>useCallbackの確認</button>
      <p>{count}</p>
    </div>
  );
}
