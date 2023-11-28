import { useState } from "react";
import State2 from "./practice/state2";
import State1 from "./practice/state1";

export default function State() {
  const obj = {
    name: "Taro",
    age: "20",
  };
  // 表示用と更新用の二つを返す
  const [firstState, setFirstState] = useState(0);
  const [secondState, setSecondState] = useState(obj);
  const [display, setDisplay] = useState(true);
  const [component, setComponent] = useState(0);

  const handleClick = () => {
    console.log("Clicked");
    // 実行した状態でイベントリスナに登録すると、undefinedが返ってくる
  };

  console.log(<State1 component={component} />);
  // owner→fiber→stateの部分で保存されている
  // コンポーネントごとにmemo~の部分で保存されているから、if文とかで順番が変わるとエラーが出る

  const handleCount = () => {
    setFirstState((prev) => prev + 1);
    setFirstState((prev) => prev + 1);
    // これだとここでは0、外だと2が帰ってくる
    setFirstState(firstState + 1);
    setFirstState(firstState + 1);
    // これだと1が帰ってくる0 + 1を2回行っても1しか帰ってこない
    console.log(firstState);
  };
  console.log(firstState);
  // 中ではすぐ反映されないことがわかる。そして、外ではすぐ反映されることがわかる。
  // それはAPIと同じで非同期であるから、即座に反映されない

  const handleInput = (e: any) => {
    setSecondState({ ...secondState, name: e.target.value });
    setSecondState({ age: secondState.age, name: e.target.value });
    // 更新するときは違うものを入れる必要がある
  };
  console.log(secondState);

  const handleArr1 = () => {
    const arr = [1, 2, 3];
    const newArr1 = arr.map((num) => {
      return num + 1;
    });
    console.log(newArr1);
    console.log(arr);
    // mapは新しい配列を作るもの。
    // だからものと配列に影響を与えない
  };

  const handleArr2 = () => {
    const arr = [1, 2, 3];
    const handle = (arr: any) => {
      arr[0] = 100;
      return arr;
      // これはmapと違って新しい配列を作成していないから、もとの配列に影響を与える
    };
    const newArr2 = handle(arr);
    console.log(newArr2);
  };

  let a;

  return (
    <div>
      <h1>State</h1>
      <button onClick={handleClick}>Click</button>

      <button
        onChange={(e) => {
          // a = e.target.value;
          // ここでaに値を入れても、再レンダリングされないから画面の表示は変わらない
          // 再レンダリングされても、aはundefinedのまま
        }}
      >
        {a}が変わっているか
      </button>

      <button onClick={handleCount}>Click</button>

      <input type="text" onChange={handleInput} />

      <button onClick={handleArr1}>Arr1</button>

      <button onClick={handleArr2}>Arr2</button>

      {display ? (
        <State1 component={component} />
      ) : (
        <State2 component={component} />
      )}
      {/* keyをつければ解決する！ */}
      <button onClick={() => setDisplay(!display)}>Toggle</button>
      <button onClick={() => setComponent(component + 1)}>Component</button>
    </div>
  );
}
