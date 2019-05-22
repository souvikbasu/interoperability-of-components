const sendMessage = (state = {}, action) => {
  switch (action.type) {
    case "SEND_MESSAGE":
      return { msg: action.msg };
    default:
      return state;
  }
};

export default sendMessage;
