import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import reducer from "./reducer";

export default function initializeStore(initialState) {
  return createStore(
    reducer,

    // Redux Devtools Extension
    // eslint-disable-next-line no-underscore-dangle, max-len
    // global.window && window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    initialState,

    // Async middleware
    applyMiddleware(thunk),
  );
}
