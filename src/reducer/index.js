import { combineReducers } from "redux";
import login from "./login";
import search from "./search";

const appReducer = combineReducers({
  login,
  search
});

const rootReducer = (state, action) => {
  if (action.type === "USER_LOGOUT") {
    state = undefined;
  }
  return appReducer(state, action);
};
export default rootReducer;
