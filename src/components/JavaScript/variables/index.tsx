import VariablesPractice from "./practice";

export default function Variables() {
  const obj = {
    a: "aaaa",
    b: 20,
    c: function () {
      console.log("cccc");
    },
  };
  obj.a = "bbbb";
  console.log(obj);

  const handleData = (data: string): void => {
    data = "bbbb";
    // ここでは、dataは"bbbb"になる

    // この前にconstかletをつけるとエラーになる。
    // これは関数の引数として暗黙的に宣言されているから、再度宣言することはできない。(再代入はletでできる)
  };
  handleData("aaaa");

  return (
    <div>
      <h3>Variables</h3>
      <VariablesPractice />
    </div>
  );
}
