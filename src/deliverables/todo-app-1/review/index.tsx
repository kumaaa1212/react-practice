interface ObjData1 {
  id: number;
  a: number;
  b: number;
  title: string;
  description: string;
  isDone: boolean;
  metod: () => void;
  metods: () => void;
}

interface ObjData2 {
  id: number;
  a: number;
  b: number;
  title: string;
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

    const handle = (objState: ObjData1) => {
      objState.a = 10;
    };
    handle(testData);

    const handle2 = (testNumbers: number) => {
      testNumbers = 20;
    };
    handle2(testNumber);
  }

  {
    const obj = {
      id: 1,
      a: 1,
      b: 2,
      title: "title",
    };

    const handle = (objtest: ObjData2) => {
      objtest.a = 10;
    };
    handle(obj);
  }

  // ここ重要になる
  {
    let a = {
      props: "S",
    };
    let b = a;
    let c = {
      props: "S",
    };
    console.log(a, b);
    if (a === b) {
      // console.log("true");
    } else {
      // console.log("false");
    }

    if (a === c) {
      // console.log("true");
    } else {
      // console.log("false");
    }
  }

  {
    const stringtest = "hello";
    const handle = (str: string) => {
      str = "world";
      console.log(str, stringtest);
    };
    handle(stringtest);
  }

  {
    const handle = () => {
      let num = 0;
      const handles = () => {
        num = num + 1;
      };
      return handles;
    };
    const increment = handle();
    increment();
  }

  {
    const handle = (number: number) => {
      let num = 0;
      const handles = () => {
        num = num + 1;
      };
      return handles;
    };
    const increment = handle(10);
    increment();
  }

  {
    const handle = (...args: (number | string)[]) => {
      const a = args[0];
      const b = args[1];
    };
    handle(10, 20, "AAAA");
  }
  {
    const handle = (fn: () => void) => {
      console.log("handle");
      fn();
    };
    const handleTest = () => {
      console.log("hello");
    };
    handle(handleTest);
  }
  return (
    <div>
      <h1>Todo App Review</h1>
    </div>
  );
}
