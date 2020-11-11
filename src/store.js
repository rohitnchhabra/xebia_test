import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middleware = [ thunk ];

export default () => {
  let store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(...middleware))
  );
  return store;
};
