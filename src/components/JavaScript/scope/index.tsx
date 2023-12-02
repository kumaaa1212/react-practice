export default function Scope() {
  // スコープについて
  const obj = {
    name: "hoge",
    age: {
      a: 20,
    },
    address: function () {
      console.log("fuga");
    },
  };

  function test() {
    let a = 1;
    console.log(a);
    function test2() {
      let b = 2;
      console.log(b, obj);
    }
    test2();
  }
  test();

  // プライベート変数
  function incrementFactory() {
    let num = 0;
    function increment() {
      num = num + 1;
      console.log(num);
    }
    // 関数をreturnすることもできる
    return increment;
  }

  // これだけだと、実行されず、関数自体が実行されていしまう。
  const increment = incrementFactory();
  increment();
  increment();
  // 戻り値で、実行されていない関数が返される。
  // const increment = incrementFactory();この行でnumが0になる。
  // だから数字が上がっていく

  function incrementFactory1(num: number) {
    function increment(value: number) {
      num = num + value;
      console.log(num);
    }
    return increment;
  }
  const increment1 = incrementFactory1(10);
  increment1(10);

  (function () {
    let num = 0;
    return function () {
      num = num + 1;
      console.log(num);
    };
  })();

  function incrementFactory2(a: number) {
    let num = a;
    return function () {
      num = num + 1;
      console.log(num);
    };
  }
  incrementFactory2(10);

  let c = (function () {
    let a = 0;
    let b = 10;
    // このように書くと、aが変更されることはあるが、bはincrement1が実行されない限り変更されることはない。

    function increment1() {
      console.log(a, b++);
    }

    function increment2() {
      console.log("表示さされる");
    }
    increment2();

    return {
      increment1,
      a,
    };
  })();

  console.log(c.increment1());
  console.log(c.a);

  return (
    <div>
      <h3>Scope</h3>
    </div>
  );
}
