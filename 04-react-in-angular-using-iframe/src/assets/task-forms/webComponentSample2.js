(function() {
  const tag = 'sample-form';

  const template = document.createElement('template');

  template.innerHTML = `
    <div class="p-4">
      <div>This is Web Component sample 2</div>
      <div>
        <div>Variables (Input):</div>
        <textarea id="input_variables" class="w-full h-64 border mb-4" ></textarea>
      </div>
      <div>
        <div>Variables (Output):</div>
        <textarea id="output_variables" class="w-full h-64 border" ></textarea>
      </div>
      <button id="complete" class="btn-primary">
        Complete
      </button>
    </div>
  `;

  class SampleForm extends HTMLElement {
    constructor() {
      super();

      this.attachShadow({ mode: 'open' });
      this.shadowRoot.appendChild(template.content.cloneNode(true));
      this.variablesInputBox = this.shadowRoot.querySelector('#input_variables');
      this.variablesOutputBox = this.shadowRoot.querySelector('#output_variables');
      this.inputVariables = '';
      this.completeButton = this.shadowRoot.querySelector('#complete');
    }

    connectedCallback() {
      if (this.isConnected && this.hasAttribute('data-variables')) {
        this.inputVariables = this.getAttribute('data-variables');
        this.variablesInputBox.textContent = this.inputVariables;
        this.variablesInputBox.addEventListener('change', this.inputVariablesChanged.bind(this));
        this.variablesOutputBox.addEventListener('change', this.outputVariablesChanged.bind(this));
        this.completeButton.addEventListener('click', this.completeForm.bind(this));

        if (this.hasAttribute('data-styles-css-url')) {
          let stylesCssUrl = this.getAttribute('data-styles-css-url');
          let link = document.createElement('link');
          link.rel = 'stylesheet';
          link.href = stylesCssUrl;
          this.shadowRoot.appendChild(link);
        }
      }
    }

    static get observedAttributes() {
      return ['data-variables', 'data-camunda-api-url', 'data-task-id', 'data-process-definition-id', 'data-styles-css-url'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
      if (name === 'data-variables') {
        this.inputVariables = newValue;
        this.variablesInputBox.textContent = this.inputVariables;
      }
    }

    inputVariablesChanged(e) {
      this.inputVariables = e.target.value;
    }

    outputVariablesChanged(e) {
      this.outputVariables = e.target.value;
    }

    completeForm(e) {
      var event = new CustomEvent('complete', {
        detail: { variables: { ...JSON.parse(this.inputVariables), ...JSON.parse(this.outputVariables) } }
      });
      this.dispatchEvent(event);
    }
  }

  customElements.define(tag, SampleForm);
  window.wcTag = tag;
})();
