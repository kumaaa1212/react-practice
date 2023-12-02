import useTest from "./hooks/usetest";

export default function CustomHooks() {
  const { countState, handleCount } = useTest();

  const handelClick = () => {
    console.log("handelClick");
    handleCount(1);
  }
  return (
    <div>
      <h1>CustomHooks</h1>
      <button onClick={handelClick}>カスタムフックのテスト</button>
      <p>{countState}</p>
    </div>
  );
}