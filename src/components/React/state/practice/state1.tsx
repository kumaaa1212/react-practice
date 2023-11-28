interface Props {
  component: number;
}

export default function State1(props: Props) {
  const { component } = props;
  console.log("state1", component);

  return (
    <div>
      <h1>State1</h1>
      {component}
    </div>
  );
}
