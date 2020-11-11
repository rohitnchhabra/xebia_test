import { LOGGED_IN } from "../action/types";
const initialState = {
  isLoggedIn: false,
};
const planReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGGED_IN:
      return {
        isLoggedIn: true,
      };
    default:
      return state;
  }
};

export default planReducer;
