
interface ObjData {
  id: number;
  a: number;
  b: number;
  title: string;
  description: string;
  isDone: boolean;
  metod: () => void;
  metods: () => void;
}

export default function TodoAppReview() {
{
  const testData = {
    id: 1,
    a: 1,
    b: 2,
    title: "title",
    description: "description",
    isDone: false,
    metod: function () {
      console.log("hello");
    },
    metods() {
      console.log("hello");
    },
  };

  const testNumber = 10;

  const handle = (objState: ObjData) => {
    objState.a = 10;
  };
  handle(testData);

  const handle2 = (testNumbers: number) => {
    testNumbers = 20;
  };
  handle2(testNumber);
}

{
  
}

  return (
    <div>
      <h1>Todo App Review</h1>
    </div>
  );
}
