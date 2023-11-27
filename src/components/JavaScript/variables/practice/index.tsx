export default function VariablesPractice() {
  const obj = {
    a: "aaaa",
    b: 20,
    c: function () {
      console.log("cccc");
    },
  };
  obj.a = "bbbb";
  obj["a"] = "bbbblll";

  const handle = (data: string): void => {
    data = "bbbbcdddd";
    // 再宣言はできない
  };
  handle("aaaa");

  return (
    <div>
      <h3>Variables Practice</h3>
    </div>
  );
}
