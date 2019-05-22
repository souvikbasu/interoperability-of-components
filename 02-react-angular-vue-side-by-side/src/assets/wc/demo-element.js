(function() {
  const template = document.createElement("template");

  template.innerHTML = `
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

  class DemoElement extends HTMLElement {
    constructor() {
      super();

      this.attachShadow({ mode: "open" });
      this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    connectedCallback() {}

    static get observedAttributes() {
      return [];
    }
  }

  customElements.define("demo-element", DemoElement);
})();
