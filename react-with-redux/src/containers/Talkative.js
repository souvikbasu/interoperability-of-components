import { connect } from "react-redux";
import { sendMessage } from "../actions";
import ReactComponent from "../components/ReactComponent/ReactComponent";

const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSendMessage: id => {
      dispatch(sendMessage("Hi"));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReactComponent);
