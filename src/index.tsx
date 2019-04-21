import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Fabric } from "office-ui-fabric-react/lib/Fabric";

import App from "./containers/App";
import "./styles/index.scss";
import configureStore from "./store/configureStore";
import { ConnectedRouter } from "react-router-redux";
import { history } from "../src/store/configureStore.dev";

const storeObj = configureStore();

ReactDOM.render(
  <Provider store={storeObj}>
    {/* <ConnectedRouter history={history}> */}
      <App />
    {/* </ConnectedRouter> */}
  </Provider>,
  document.getElementById("root") as HTMLElement
);
