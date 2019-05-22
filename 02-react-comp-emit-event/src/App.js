import React from "react";
import "./App.css";
import ReactComponent from "./components/ReactComponent/ReactComponent";

class App extends React.Component {
  state = {
    msg: "Initial msg set by parent"
  };

  componentDidMount() {
    window.addEventListener("message", postMsg => {
      console.log(postMsg.data.msg);
      this.setState({ msg: postMsg.data.msg });
    });

    var el = document.querySelector("body");
    el.addEventListener("sendMessage", msgEvent => {
      console.log(msgEvent);
      if (msgEvent.detail.msg) {
        this.setState({ msg: msgEvent.detail.msg });
      }
    });
  }

  render() {
    return (
      <div className="App">
        <div>React App</div>
        <ReactComponent msg={this.state.msg} />
      </div>
    );
  }
}

export default App;
