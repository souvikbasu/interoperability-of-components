import React from "react";
import "./ReactComponent.css";

function ReactComponent({ onSendMessage }) {
  return (
    <div className="ReactComponent">
      <div>React Component</div>
      <button onClick={onSendMessage}>Set state</button>
    </div>
  );
}

export default ReactComponent;
