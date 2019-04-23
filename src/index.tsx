import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./containers/App";
import "./styles/index.scss";
import configureStore from "./store/configureStore";

const storeObj = configureStore();
ReactDOM.render(
  <Provider store={storeObj}>
      <App />
  </Provider>,
  document.getElementById("root") as HTMLElement
);
