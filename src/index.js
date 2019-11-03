import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import * as ReactRedux from "react-redux";
import App from "./components/App";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "./redux/reducers";
import rootSaga from "./redux/sagas";
import createSagaMiddleware from "redux-saga";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <BrowserRouter>
    <ReactRedux.Provider store={store}>
      <App />
    </ReactRedux.Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
