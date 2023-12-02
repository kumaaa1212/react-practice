interface Props {
  names: string;
  isMale: boolean;
  children: React.ReactNode;
  component : React.ReactNode;
}

export default function FundamentalKnowledgetest(props: Props) {
  const { names, isMale, children, component } = props;
  console.log(names, isMale);

  return (
    <>
    <div>{children}</div>
    <div>別の方法{component}</div>
    </>

  )
}
