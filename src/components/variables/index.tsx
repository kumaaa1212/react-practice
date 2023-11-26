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
  return (
    <div>
      <h3>Variables</h3>
      <VariablesPractice />
    </div>
  );
}
