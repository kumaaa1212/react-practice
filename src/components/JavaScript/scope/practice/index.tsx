export default function ScopePractice() {
  // プライベート変数
  function test() {
    let a = 1;
    console.log(a);
    function test2() {
      let b = 2;
      console.log(b);
    }
    return {
      test2,
    };
  }
  const { test2 } = test();
  test2();

  let a = (function () {
    let test2 = 10;
    let test3 = 20;

    function test4() {
      console.log('test4' + test2++);
    }

    function test5() {
      console.log('test5');
    }
    test5()

    return {
      test3,
      test4,
    };
  })();
  console.log(a);

  return <div></div>;
}
