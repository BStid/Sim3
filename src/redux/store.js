import { createStore, applyMiddleware, compose } from "redux";
import promiseMiddleWare from "redux-promise-middleware";
import reducer from "./reducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middlewares = composeEnhancers(applyMiddleware(promiseMiddleWare()));
const store = createStore(reducer, middlewares);

export default store;
