import { memo } from "react";

const Performance1 = memo(() => {
  return (
    <div>
      <h3>Performance1</h3>
    </div>
  );
});
export default Performance1;


export const Performance2 = memo(() => {
  return (
    <div>
      <h3>Performance1</h3>
    </div>
  );
});
