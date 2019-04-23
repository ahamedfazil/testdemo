import * as React from "react";
import pnp from "@pnp/pnpjs";
import { Fabric } from "office-ui-fabric-react/lib/Fabric";
import { HashRouter as Router } from "react-router-dom";
import { initializeIcons } from "@uifabric/icons";
import "@progress/kendo-ui";
import "@progress/kendo-theme-default/dist/all.css";
import { pnpConfig } from "../utils/pnp.config";

import { getCurrentUser } from "../services/UserAPI";
import { IAppProps } from "../models/IAppProps";
import { ErrorMessage } from "./support/ErrorMessage";
import { Spinner, SpinnerSize } from "office-ui-fabric-react";
import AppNavigation from "./AppNavigation";

export class App extends React.Component<IAppProps, {}> {
  constructor(props: IAppProps) {
    super(props);
    pnp.setup(pnpConfig);
    initializeIcons(undefined, { disableWarnings: true });
  }

  componentDidMount() {
    getCurrentUser(this.props);
  }

  public render(): JSX.Element {
    return (
      <Router hashType="noslash">
        <Fabric>
          <div>
            {!this.props.store.user.currentUser.isFetched ? (
              this.props.store.user.error ? (
                <ErrorMessage
                  error={`Error while getting user - ${
                    this.props.store.user.error
                  }`}
                />
              ) : (
                <Spinner
                  size={SpinnerSize.large}
                  style={{ margin: "200px" }}
                  label={"Getting current user info..."}
                />
              )
            ) : (
              <div className="ms-Grid">
                <AppNavigation />
              </div>
            )}
          </div>
        </Fabric>
      </Router>
    );
  }
}
