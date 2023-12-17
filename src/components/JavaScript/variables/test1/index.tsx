export default function Test1() {
  const obj1 = {
    a: "aaaa",
    b: 20,
    c: function () {
      console.log("cccc");
    },
  };
  obj1["a"] = "bbbb";
  const obj2 = {
    a: "aaaa",
    b: 20,
    c() {
      console.log("cccc");
      // アロー関数のときはthisなどを使うことはできない。
    },
  };
  obj2["a"] = "bbbb";

  const aaa = 1000000000000;

  const handle = (a: number) => {
    // let a
    a = 10;
    console.log(a);
    console.log(aaa);
  };
  handle(aaa);

  return (
    <div>
      <h3>Test1</h3>
    </div>
  );
}
