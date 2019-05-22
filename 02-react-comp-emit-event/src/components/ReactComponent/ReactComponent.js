import React from "react";
import "./ReactComponent.css";

function ReactComponent() {
  let domRef = React.createRef();

  const emitEvent = () => {
    var event = new CustomEvent("sendMessage", {
      detail: { msg: "Hi from React!! This is custom event" },
      bubbles: true
    });
    domRef.current.dispatchEvent(event);
  };

  const postMessage = () => {
    window.postMessage(
      {
        msg: "Hi again from React!! This is window.postMessage"
      },
      "*"
    );
  };

  return (
    <div ref={domRef} className="ReactComponent">
      <div>React Component</div>
      <button onClick={emitEvent}>Emit Event</button>
      <button onClick={postMessage}>Post Message</button>
    </div>
  );
}

export default ReactComponent;
