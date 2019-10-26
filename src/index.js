import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import * as ReactRedux from "react-redux";
import App from "./App";
import configureStore from "./redux/configureStore";
const store = configureStore();

ReactDOM.render(
  <BrowserRouter>
    <ReactRedux.Provider store={store}>
      <App />
    </ReactRedux.Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
