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
      <button id="send" class="btn-primary">
        Send Message
      </button>

  `;

  class DemoElement extends HTMLElement {
    constructor() {
      super();

      this.attachShadow({ mode: "open" });
      this.shadowRoot.appendChild(template.content.cloneNode(true));
      this.sendMessageButton = this.shadowRoot.querySelector("#send");
    }

    connectedCallback() {
      if (this.isConnected) {
        this.sendMessageButton.addEventListener(
          "click",
          this.sendMessage.bind(this)
        );
      }
    }

    static get observedAttributes() {
      return [];
    }

    sendMessage(e) {
      var event = new CustomEvent("sendMessage", {
        detail: { msg: "Hi from Web Component!!" }
      });
      this.dispatchEvent(event);
    }
  }

  customElements.define("demo-element", DemoElement);
})();
