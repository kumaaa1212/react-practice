import DataTypesPractice from "./practice";

export default function DataType() {
  // false
  const f = 0;
  const e = "";
  const a = null;
  const b = undefined;
  console.log(f, e, a, b);

  // true
  const c: string[] = [];
  const d = {};
  console.log( c, d);

  // データ型１ (プリミティブ)
  // 真偽値、文字列、数値、undefined、null

  {
    let a = 1;
    a = 2;
    console.log(a);
  }

  {
    let a = 1;
    let b = a;
    console.log(a, b);
    // この場合は、aのコピーがbに入る
  }

  {
    const a = 1;
    // a = 2;
    // const の場合一度目の参照がロックされる
    console.log(a);
  }

  // データ型２ (オブジェクト)
  // 配列、オブジェクト、関数
  {
    let a = {
      props: "S",
    };
    let b = a;
    console.log(a, b);
  }

  {
    const a = {
      props: "S",
    };
    console.log(a);
    // a ={}
    // constの場合は、一度目の参照がロックされる
  }

  {
    const a = {
      props: "S",
    };
    a.props = "T";
    // あくまで、参照先の値が変更されるだけ
  }

  {
    let a = 10;
    const aaa = (b: number) => {
      b = +1;
      console.log(a, b);
    };
    aaa(a);
  }

  {
    const a = 10;
    const aaa = (b: number) => {
      b = +1;
      console.log(a, b);
    };
    aaa(a);
  }

  {
    const a = 10;
    const b = a;
    console.log(a, b);
    // コピーされた値
    // プリミティブ型はそれぞれ独立している状態であるから、大丈夫。
  }

  {
    let a = { props: 10 };

    const aaa = (b: any) => {
      b.props = 20;
      console.log(a, b);
      //  {...}の中身の参照は同じ
    };

    aaa(a);
  }
  // 引数に渡したら、暗黙的に宣言される

  {
    const a = {
      props: {
        props: 10,
      },
      pro: 10,
    };
    let { props, pro } = a;
    // オブジェクトの場合は、参照先の値が変更されるだけ。同じ参照先を指している。
    props.props = 20;

    // プリミティブ型はそれぞれ独立している状態であるから、大丈夫。
    console.log("SSS");
    pro = 20;

    console.log(a, props, pro);
  }

  {
    const a = {
      name: "!!!!!",
    };

    const b = {
      name: "!!!!!",
    };
    console.log(a.name === b.name);
  }

  {
    const a = {
      name: "!!!!!",
    };

    const b = {
      name: "!!!!!",
    };
    console.log(a === b);
  }

  // truthyとfalsy
  {
    const handle = (a: number): void => {
      if (a) {
        console.log(a);
      }
    };
    handle(0);
    // 直接文字を入れないで、truthyとfalsyを入れる
  }

  {
    const a = 0;
    const b = 1;
    console.log("SSS");
    console.log(a && b);
    console.log(a || b);
    // 違いは、AND条件はtrueであれば次に進む。OR条件はtrueな時点でそれ自体を返す。
  }

  {
    const a = 0;
    const handle = () => {
      return 1;
    };
    a && handle();
  }

  return (
    <div>
      <h3>Data Type</h3>
      <DataTypesPractice />
    </div>
  );
}
