import * as Types from "../constains/ActionType";
import * as Message from "../constains/Message";
let initialSate = Message.MSG_WELLCOME;
let message = (state = initialSate, action) => {
  switch (action.type) {
    case Types.CHANGE_MESSAGE:
      return action.message;
    default:
      return state;
  }
};

export default message;
