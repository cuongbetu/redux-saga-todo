import { createStore, compose, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import mainReducer from "../reducers/index";
import thunk from "redux-thunk";
import rootSaga from "./../sagas/index";

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers =
  process.env.MODE_ENV !== "production" &&
  typeof window === "object" &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        shouldHotReload: false,
      })
    : compose;

const configureStore = () => {
  const middlewares = [thunk, sagaMiddleware];
  const enhancers = [applyMiddleware(...middlewares)];
  const store = createStore(mainReducer, composeEnhancers(...enhancers));
  sagaMiddleware.run(rootSaga);
  return store;
};

export default configureStore;
