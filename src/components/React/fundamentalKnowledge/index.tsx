import FundamentalKnowledgetest2 from "./FundamentalKnowledgetest2";
import FundamentalKnowledgetest from "./fundamentalKnowledge";

export default function FundamentalKnowledge() {
  // コンポーネント→仮想DOM
  // それぞれを疎結合にして、再利用性を高める
  // babelでJSXをJSに変換する。その目印

  // namesがプロパティで、nameがプロパティの値になる
  const name = "yamada";

  // children
  // 配列でオブジェクトのvalueで渡すことができる

  return (
    <div>
      <h1>fundamentalKnowledge</h1>
      <FundamentalKnowledgetest
        names={name}
        isMale
        children={[
          <FundamentalKnowledgetest2 />,
          <FundamentalKnowledgetest2 />,
        ]}
        test={[
          <h1>
            <p>ssssss</p>
          </h1>,
          <h1>
            <p>ssssss</p>
          </h1>
        ]}
        component={<FundamentalKnowledgetest2 />}
      />
    </div>
  );
}
