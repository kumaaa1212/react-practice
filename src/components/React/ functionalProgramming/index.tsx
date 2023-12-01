export default function FunctionalProgramming() {
// 手続き型プログラミング(順番に書いていく)
  let num = [1, 2, 3];

  let doubleNums = [];

  for (let i = 0; i < num.length; i++) {
    doubleNums.push(num[i] * 2);
  }

// オブジェクト指向プログラミング(オブジェクトを使って書いていく)
  // 自分自身でデータを管理しておいて、自分自身でデータを加工するメソッドも保持する
  const obj = {
    name: "太郎",
    age: 20,
    greet: function () {
      console.log("こんにちは");
    },
  };
  console.log(obj.greet());

// 関数型プログラミング(関数を使って書いていく)
  // 状態の管理と処理を分離する

  // 状態の管理がnumで、処理がhandle
  const handle = (num: number) => {
    return num * 2;
  };
  handle(3);

  // 状態の管理がarrsで、処理がmap
  const arrs = [1, 2, 3];
  const a = arrs.map((arr: number) => {
    return arr + 1;
  });
  console.log(a);

// 関数型プログラミングの基本的な概念(純粋関数)
  // ・決まった引数→決まった戻り値→引数だけに依存する関数(2を引数に渡したら必ず4が返ってくる的な)
  // ・引数で渡ってきた値を変更してはいけない。propsで渡ってきた値を変更しない
  // ・関数外に影響を及ばさない(useeffectなどの副作用を起こさない)
  const num1 = { val: 2 };

  const dobule = (num: { val: number }) => {
    num.val = num.val * 2;
    return num;
  };
  const newnum = dobule(num1);

  console.log(newnum, num1);

  // これだと参照元が同じのために元も変わってしまう。
  // ↓
  const dobules = (num: { val: number }) => {
    const newnum = {
      val: 0,
    };
    newnum.val = num.val * 2;
    return newnum;
  };
  const nums = { val: 2 };
  const newnums = dobules(nums);
  console.log(newnums, nums);

  // mutableな値をimmutableにしている
  // オブジェクト自体を参照しているから、中身を変えることができてしまう

  // mutableを関数で変えてしまうと、全体に影響が及んでしまうことがある。
  // stateで管理している時は大丈夫だけど、変数で管理している時はだめ。

  // propsで渡す時も、stateに入れてしまうことがいい

  return <h1>FunctionalProgramming</h1>;
}
