interface Props {
  component: number;
}

export default function State1(props: Props) {
  const { component } = props;
  console.log("state1", component);

  return (
    <div>
      <h3>State1</h3>
      {component}
    </div>
  );
}
