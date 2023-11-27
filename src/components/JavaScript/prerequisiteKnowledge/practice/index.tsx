export default function PrerequisiteKnowledgePractice() {
  {
    const a = 10;
    let b = 20;
    b = 30;
    console.log(a, b);
  }

  {
    const a = {
      name: "John",
      age: 20,
    };
    const b = a;
    b.name = "Mike";
    console.log(a, b);
  }

  {
    const handle = (a: number, b: string) => {
      b = "S";
      console.log(a, b);
    };
    handle(10, "S");
  }

  {
    const a = {
      name: "John",
      age: 20,
      a: function () {
        console.log("hello");
      },
    };
    console.log(a.a());
  }

  {
    const handle = (a: number, b: number) => {
      return a + b;
    };
    console.log(handle(1, 2));
  }

  {
    const obj = {
      name: "John",
      age: 20,
      a: function () {
        console.log("hello");
      },
    };
   console.log(obj["name"])
   obj['name'] = 'Mike'
  }
  return (
    <div>
      <h3>PrerequisiteKnowledge Practice</h3>
    </div>
  );
}
