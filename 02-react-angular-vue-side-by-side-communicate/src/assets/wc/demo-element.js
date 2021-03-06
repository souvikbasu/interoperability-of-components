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
      <button id="emit_event" class="btn-primary">
        Emit Event
      </button>
      <button id="post_msg" class="btn-primary">
        Post Message
      </button>
      <div>Message received: <span id="msg_box"></span></div>

  `;

  class DemoElement extends HTMLElement {
    constructor() {
      super();

      this.attachShadow({ mode: "open" });
      this.shadowRoot.appendChild(template.content.cloneNode(true));
      this.emitEventButton = this.shadowRoot.querySelector("#emit_event");
      this.postMessageButton = this.shadowRoot.querySelector("#post_msg");
      this.msgBox = this.shadowRoot.querySelector("#msg_box");
    }

    connectedCallback() {
      if (this.isConnected) {
        this.emitEventButton.addEventListener(
          "click",
          this.emitEvent.bind(this)
        );

        this.postMessageButton.addEventListener(
          "click",
          this.postMessage.bind(this)
        );

        window.addEventListener("message", postMsg => {
          console.log("Received in WC", postMsg.data.msg);
          this.msgBox.textContent = postMsg.data.msg;
        });

        var el = document.querySelector("body");
        el.addEventListener("sendMessage", msgEvent => {
          console.log(msgEvent);
          if (msgEvent.detail.msg) {
            this.msgBox.textContent = msgEvent.detail.msg;
          }
        });
      }
    }

    static get observedAttributes() {
      return ["msg"];
    }

    attributeChangedCallback(name, oldValue, newValue) {
      if (name === "msg") {
        this.msgBox.textContent = newValue;
      }
    }

    emitEvent(e) {
      var event = new CustomEvent("sendMessage", {
        detail: { msg: "Hi from Web Component!! This is custom event" },
        bubbles: true
      });
      this.dispatchEvent(event);
    }

    postMessage(e) {
      window.postMessage({
        msg: "Hi again from Web Component!! This is window.postMessage"
      });
    }
  }

  customElements.define("demo-element", DemoElement);
})();
