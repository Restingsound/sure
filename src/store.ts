import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import quoteReducer from "./reducers/quoteReducer";

const reducer = combineReducers({
  quote: quoteReducer,
});

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
