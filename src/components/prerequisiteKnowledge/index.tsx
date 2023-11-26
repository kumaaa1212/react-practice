export default function PrerequisiteKnowledge() {
  // 【変数】
  // 繰り返し使うものを入れておくもの
  // 変数を宣言する
  const hoge = "aaaa";
  let fuga = "bbbb";

  const Handle = () => {
    return (
      <div>
        <h1>{hoge}</h1>
        <h1>{fuga}</h1>
      </div>
    );
  };
  Handle();

  // 【関数】
  // 一連の処理をまとめておくもの
  // 関数を宣言する
  // 実引数と仮引数
  const name = "hoge";
  let age = 20;

  function test(name: string, age: number): void {
    console.log(name, age);
  }
  test(name, age);

  // 【オブジェクト】
  // プロパティor keyとvalueをペアで管理するものである
  let obj = {
    name: "hoge",
    age: {
      a: 20,
    },
    address: function () {
      console.log("fuga");
    },
  };

  // ドット記法
  console.log(obj.name);
  // ブラケット記法
  console.log(obj["name"]);
  // 関数の呼び出し
  console.log(obj.address());
  console.log(obj);
  // consoleにobjと入力しても、中身を表示することができる
  
  return (
    <div>
      <h3>PrerequisiteKnowledge</h3>
      <PrerequisiteKnowledge />
    </div>
  );
}
