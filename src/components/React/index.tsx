import FunctionalProgramming from "./ functionalProgramming";
import CustomHooks from "./customHooks";
import FundamentalKnowledge from "./fundamentalKnowledge";
import Performance from "./performance";
import State from "./state";

export default function React() {
  return (
    <div>
      <h2>React</h2>
      <FundamentalKnowledge />
      <State />
      <FunctionalProgramming />
      <CustomHooks />
      <Performance />
    </div>
  );
}
