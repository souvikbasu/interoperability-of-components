import { PolymerElement, html } from "@polymer/polymer/polymer-element.js";

class DemoElement extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
          height: 300px;
          width: 300px;
          background-color: #a700dd;
          padding: 20px;
          font-size: 2rem;
          color: white;
          border: solid 2px darkgray;
          margin: 20px;
        }
      </style>
      <div>Custom Element</div>
    `;
  }
}
customElements.define("demo-element", DemoElement);
