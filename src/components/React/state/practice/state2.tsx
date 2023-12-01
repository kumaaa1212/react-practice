interface Props {
  component: number;
}

export default function State2(props: Props) {
  const { component } = props;
  console.log("state2", component);

  return (
    <div>
      <h3>State2</h3>
      {component}
    </div>
  );
}
