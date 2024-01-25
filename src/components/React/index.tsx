import FunctionalProgramming from "./ functionalProgramming";
import CustomHooks from "./customHooks";
import FundamentalKnowledge from "./fundamentalKnowledge";
import Performance from "./performance";
import State from "./state";
import UseEffect from "./useEffect";

export default function React() {
  return (
    <div>
      <h2>React</h2>
      <FundamentalKnowledge />
      <State />
      <FunctionalProgramming />
      <CustomHooks />
      <Performance />
      <UseEffect />
    </div>
  );
}
