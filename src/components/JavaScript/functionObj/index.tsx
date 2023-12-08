export default function FunctionObj1() {
  // メソッド
  const obj = {
    name: "Tom",
    age: 18,
    sayHi: function () {
      console.log("Hi");
    },
  };
  console.log(obj.sayHi());
  // オブジェクトのプロパティに格納された関数のことをメソッドと呼ぶ。
  // 無名関数となっている
  // 関数とオブジェクトの関係性
  // プリミティブ以外はオブジェクト→つまり関数もオブジェクト

  // 引数の順番
  const handle1 = (a: number | null, b: number) => {
    console.log("handle1");
  };
  handle1(null, 2);

  // arguments
  const handle2 = function (...args: number[]) {
    const a = args[0];
    const b = args[1];
    console.log(a, b);
  };
  handle2(1, 2);

  // コールバック関数
  const handle3 = (fn: () => void) => {
    console.log("handle3");
    fn();
  };
  const handle4 = () => {
    console.log("handle4");
  };
  handle3(handle4);

  // this
  // 呼び出し元のオブジェクトへの参照を保持するキーワード
  // 関数として実行している時はグローバルオブジェクトを参照する
  window.name = "John";
  const person = {
    name: "TOM",
    hello: function (name: string) {
      console.log("hello" + name);
    },
  };
  const fn = (ref: (name: string) => void) => {
    ref("bog");
  };
  fn(person.hello);



  const fn1 = (name: string) => {
    console.log("fn1" + name);
  };
  const a = fn1.bind(null, "tom");
  a();



  const obj2 = {
    name: "Tom",
    hello(name: string) {
      console.log("hello" + name);
    },
  };
  console.log(obj2.hello("Bob"));

  return (
    <>
      <h2>FunctionObj1</h2>
    </>
  );
}
