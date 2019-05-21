import { SEND_MESSAGE } from "./actions";

export interface IAppState {
  msg: string;
  dateTime: string;
}

export const INITIAL_STATE: IAppState = {
  msg: "",
  dateTime: Date()
};

export function rootReducer(state, action) {
  console.log(state, action);

  switch (action.type) {
    case SEND_MESSAGE:
      return Object.assign({}, state, {
        msg: action.msg,
        dateTime: Date()
      });
  }
  return state;
}
