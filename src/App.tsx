import { useEffect, useState } from "react";
import "./App.css";
import JavaScript from "./components/JavaScript";
import React from "./components/React";
import TodoApp from "./deliverables/todo-app-1";
function App() {
  const [state, setState] = useState<boolean>();

  setTimeout(() => {
    console.log("Hello");
  }, 1000);
  new Promise<void>((resolve, reject) => {
    console.log("SSS");
    resolve();
  }).then(() => {
    console.log("SSS");
  });

  return (
    <div className="App">
      <button className="display_btn" onClick={() => setState(!state)}>
        表示
      </button>
      <div className="container">{state ? <JavaScript /> : <React />}</div>
      <TodoApp />
    </div>
  );
}
export default App;


