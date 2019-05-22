import React from "react";
import "./AnotherReactComponent.css";

function AnotherReactComponent({ receivedMsg, onSendMessage }) {
  return (
    <div className="AnotherReactComponent">
      <div>Another Component</div>
      <div>{receivedMsg}</div>
      <button onClick={onSendMessage}>Set state</button>
    </div>
  );
}

export default AnotherReactComponent;
