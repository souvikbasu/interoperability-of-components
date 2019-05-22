import { connect } from "react-redux";
import { sendMessage } from "../actions";
import AnotherReactComponent from "../components/AnotherReactComponent/AnotherReactComponent";

const mapStateToProps = state => {
  return {
    receivedMsg: state.msg
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSendMessage: id => {
      dispatch(sendMessage("Hello"));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AnotherReactComponent);
