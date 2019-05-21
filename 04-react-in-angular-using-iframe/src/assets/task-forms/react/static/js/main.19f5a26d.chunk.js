(window.webpackJsonp = window.webpackJsonp || []).push([
  [0],
  {
    15: function(e, t, a) {
      'use strict';
      a.r(t);
      var n = a(0),
        o = a.n(n),
        r = a(7),
        s = a.n(r);
      Boolean(
        'localhost' === window.location.hostname ||
          '[::1]' === window.location.hostname ||
          window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)
      );
      var l = a(8),
        i = a(1),
        c = a(2),
        m = a(4),
        u = a(3),
        p = a(5),
        d = (function(e) {
          function t() {
            var e, a;
            Object(i.a)(this, t);
            for (var n = arguments.length, o = new Array(n), r = 0; r < n; r++) o[r] = arguments[r];
            return (
              ((a = Object(m.a)(this, (e = Object(u.a)(t)).call.apply(e, [this].concat(o)))).state = {
                variables: a.props.variables,
                outputVariables: {}
              }),
              (a.completeForm = function() {
                a.props.completeEventHandler(Object(l.a)({}, a.state.variables, a.state.outputVariables));
              }),
              (a.changeInputVariables = function(e) {
                a.setState({ variables: JSON.parse(e.target.value) });
              }),
              (a.changeOutputVariables = function(e) {
                a.setState({ outputVariables: JSON.parse(e.target.value) });
              }),
              a
            );
          }
          return (
            Object(p.a)(t, e),
            Object(c.a)(t, [
              {
                key: 'render',
                value: function() {
                  return o.a.createElement(
                    'div',
                    { class: 'p-2' },
                    o.a.createElement('div', null, 'This is React Component'),
                    o.a.createElement(
                      'div',
                      { class: 'mb-4' },
                      o.a.createElement(
                        'div',
                        null,
                        'Camunda API URL:',
                        ' ',
                        o.a.createElement('span', { id: 'camunda_api_url' }, this.props.camundaApiUrl)
                      ),
                      o.a.createElement('div', null, 'Task ID: ', o.a.createElement('span', { id: 'task_id' }, this.props.taskId)),
                      o.a.createElement(
                        'div',
                        null,
                        'Process Definition ID:',
                        ' ',
                        o.a.createElement('span', { id: 'process_definition_id' }, this.props.processDefinitionId)
                      )
                    ),
                    o.a.createElement(
                      'div',
                      null,
                      o.a.createElement('div', null, 'Input Variables:'),
                      o.a.createElement(
                        'textarea',
                        { id: 'input_variables', class: 'w-full h-64 border mb-4', onChange: this.changeInputVariables },
                        JSON.stringify(this.state.variables, null, 4)
                      )
                    ),
                    o.a.createElement(
                      'div',
                      null,
                      o.a.createElement('div', null, 'Output Variables:'),
                      o.a.createElement('textarea', {
                        id: 'output_variables',
                        class: 'w-full h-64 border',
                        onChange: this.changeOutputVariables
                      })
                    ),
                    o.a.createElement('button', { id: 'complete', class: 'btn-primary', onClick: this.completeForm }, 'Complete')
                  );
                }
              }
            ]),
            t
          );
        })(n.Component),
        v = (function(e) {
          function t() {
            return Object(i.a)(this, t), Object(m.a)(this, Object(u.a)(t).apply(this, arguments));
          }
          return (
            Object(p.a)(t, e),
            Object(c.a)(t, [
              {
                key: 'render',
                value: function() {
                  return o.a.createElement('div', null, 'Sample Form 2');
                }
              }
            ]),
            t
          );
        })(n.Component);
      var b = function(e) {
        var t,
          a,
          n = { SampleForm1: d, SampleForm2: v };
        if (e.formKey) {
          var r = e.formKey.split(':');
          'react' === r[0] && (console.log('React component to be rendered: ', r[1]), (t = r[1]));
        } else e.componentName && (t = e.componentName);
        return (a = n[t]) ? o.a.createElement('div', { className: 'App' }, o.a.createElement(a, e)) : null;
      };
      !(function(e) {
        console.log('React Custom Form - 1 - listen to host messages'),
          window.addEventListener(
            'message',
            function(t) {
              var a = t.data,
                n = a.data;
              'loadFormRequest' === a.type &&
                (console.log('React Custom Form - 3 - received event from host', n),
                console.log('React Custom Form - 4,5,6,7 - render component and send variables as props, send handler for complete event'),
                console.log('React Custom Form - 7 - listen to React component events'),
                e(n, function(e) {
                  console.log(
                    'React Custom Form - 8 - React component raised event to complete the task. Send message to host to complete the task'
                  ),
                    window.parent.postMessage({ type: 'formCompleteRequest', data: e });
                }));
            },
            !1
          ),
          (window.onload = function() {
            console.log('React Custom Form - 2 - tell host we are ready now to listen to host messages'),
              window.parent.postMessage({ type: 'formLoaded' });
          });
      })(function(e, t) {
        s.a.render(o.a.createElement(b, Object.assign({}, e, { completeEventHandler: t })), document.getElementById('root'));
      }),
        'serviceWorker' in navigator &&
          navigator.serviceWorker.ready.then(function(e) {
            e.unregister();
          });
    },
    9: function(e, t, a) {
      e.exports = a(15);
    }
  },
  [[9, 1, 2]]
]);
//# sourceMappingURL=main.19f5a26d.chunk.js.map
