export default function PrerequisiteKnowledgePractice() {
  const hoge = "ssss";
let fuga = "aaaa";

const Handle = (hoge: string, fuga: string): void => {
  console.log(hoge, fuga);
};
Handle(hoge, fuga);

const obj = {
  a : "aaaa",
  b : 20,
  c : function(){
    console.log("cccc");
  }
}

console.log(obj.a);
console.log(obj['a'])

  return (
    <div>
      <h3>PrerequisiteKnowledge</h3>
    </div>
  );
}
