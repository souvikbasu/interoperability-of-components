(function() {
  const tag = 'choose-name-form';

  const template = document.createElement('template');

  template.innerHTML = `
    <div class="p-2">
      <div class="mb-4">
        <div>Camunda API URL: <span id="camunda_api_url"></span></div>
        <div>Task ID: <span id="task_id"></span></div>
        <div>Process Definition ID: <span id="process_definition_id"></span></div>
      </div>
      <div>
        <div>Input Variables:</div>
        <textarea id="input_variables" class="w-full h-64 border mb-4" ></textarea>
      </div>
      <div>
        <div>Output Variables:</div>
        <textarea id="output_variables" class="w-full h-64 border" ></textarea>
      </div>
      <button id="complete" class="btn-primary">
        Complete
      </button>
    </div>
  `;

  class ChooseNameForm extends HTMLElement {
    constructor() {
      super();

      this.attachShadow({ mode: 'open' });
      this.shadowRoot.appendChild(template.content.cloneNode(true));
      this.variablesInputBox = this.shadowRoot.querySelector('#input_variables');
      this.variablesOutputBox = this.shadowRoot.querySelector('#output_variables');
      this.outputVariables = '{}';
      this.completeButton = this.shadowRoot.querySelector('#complete');
    }

    connectedCallback() {
      if (this.isConnected) {
        this.variablesInputBox.addEventListener('change', this.inputVariablesChanged.bind(this));
        this.variablesOutputBox.addEventListener('change', this.outputVariablesChanged.bind(this));
        this.completeButton.addEventListener('click', this.completeForm.bind(this));

        // styling
        if (this.hasAttribute('data-styles-css-url')) {
          let stylesCssUrl = this.getAttribute('data-styles-css-url');
          let link = document.createElement('link');
          link.rel = 'stylesheet';
          link.href = stylesCssUrl;
          this.shadowRoot.appendChild(link);
        }

        // get camunda api url
        if (this.hasAttribute('data-camunda-api-url')) {
          this.camundaApiUrl = this.getAttribute('data-camunda-api-url');
        }

        // get task id
        if (this.hasAttribute('data-task-id')) {
          this.taskId = this.getAttribute('data-task-id');
        }

        // get process definition id
        if (this.hasAttribute('data-process-definition-id')) {
          this.processDefinitionId = this.getAttribute('data-process-definition-id');
        }

        // show attributes received
        this.shadowRoot.querySelector('#camunda_api_url').innerHTML = this.camundaApiUrl;
        this.shadowRoot.querySelector('#task_id').innerHTML = this.taskId;
        this.shadowRoot.querySelector('#process_definition_id').innerHTML = this.processDefinitionId;
      }
    }

    static get observedAttributes() {
      return ['data-camunda-api-url', 'data-task-id', 'data-process-definition-id'];
    }

    inputVariablesChanged(e) {
      this.inputVariables = e.target.value;
    }

    outputVariablesChanged(e) {
      this.outputVariables = e.target.value;
    }

    completeForm(e) {
      var event = new CustomEvent('complete', {
        detail: { variables: { ...JSON.parse(this.variablesInputBox.textContent), ...JSON.parse(this.outputVariables) } }
      });
      this.dispatchEvent(event);
    }

    set inputVariables(newVal) {
      this.variablesInputBox.textContent = JSON.stringify(newVal, null, 4);
    }
  }

  customElements.define(tag, ChooseNameForm);
  window.wcTag = tag;
})();
