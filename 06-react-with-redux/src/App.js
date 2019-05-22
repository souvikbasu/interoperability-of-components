import React from "react";

import "./App.css";
import Talkative from "./containers/Talkative";
import Listener from "./containers/Listener";

function App() {
  return (
    <div className="App">
      <div>React App</div>
      <Talkative />
      <Listener />
    </div>
  );
}

export default App;
