import { useState } from "react";
import "./App.css";
import JavaScript from "./components/JavaScript";
import React from "./components/React";
function App() {
  const [state, setState] = useState<boolean>();
  return (
    <div className="App">
      <button className="display_btn" onClick={() => setState(!state)}>表示</button>
      <div className="container">
      {state ? <JavaScript /> : <React />}
      </div>
    </div>
  );
}
export default App;
