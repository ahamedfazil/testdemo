import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Fabric } from "office-ui-fabric-react/lib/Fabric";

import App from "./containers/App";
import "./styles/index.scss";
import configureStore from "./store/configureStore";
import { HashRouter as Router } from "react-router-dom";
import { ConnectedRouter } from "react-router-redux";
import { history } from "../src/store/configureStore.dev";

const storeObj = configureStore();

ReactDOM.render(
  <Fabric>
    <Provider store={storeObj}>
      {/* <ConnectedRouter history={history}> */}
      <Router hashType="noslash">
        <App />
      </Router>
      {/* </ConnectedRouter> */}
    </Provider>
  </Fabric>,
  document.getElementById("root") as HTMLElement
);
