import React from "react";
import ReactDOM from "react-dom";
import ReactComponent from "../ReactComponent/ReactComponent";

class ReactElement extends HTMLElement {
  connectedCallback() {
    const mountPoint = document.createElement("span");
    this.attachShadow({ mode: "open" }).appendChild(mountPoint);

    const name = this.getAttribute("name");
    const url = "http://www.google.com";
    ReactDOM.render(
      <ReactComponent href={url}>{name}</ReactComponent>,
      mountPoint
    );
  }
}
customElements.define("react-element", ReactElement);

export default ReactElement;
