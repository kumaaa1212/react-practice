import DataType from "./dataType";
import PrerequisiteKnowledge from "./prerequisiteKnowledge";
import Scope from "./scope";
import Variables from "./variables";

export default function JavaScript() {
  return (
    <div>
      <h2>JavaScript</h2>
      <PrerequisiteKnowledge />
      <Variables />
      <DataType />
      <Scope />
    </div>
  );
}
