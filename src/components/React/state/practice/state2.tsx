interface Props {
  component: number;
}

export default function State2(props: Props) {
  const { component } = props;
  console.log("state2", component);

  return (
    <div>
      <h1>State2</h1>
      {component}
    </div>
  );
}
