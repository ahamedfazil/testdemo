import * as React from "react";
import pnp from "@pnp/pnpjs";
import { Fabric } from "office-ui-fabric-react/lib/Fabric";
import { initializeIcons } from "@uifabric/icons";
import { pnpConfig } from "../config/pnp.config";

import { getCurrentUser } from "../api/UserAPI";
import { IAppProps } from "../models/IAppProps";
import { ICurrentUserState } from "../models/IUserState";


export class App extends React.Component<IAppProps, {}> {
  constructor(props: IAppProps) {
    super(props);
    pnp.setup(pnpConfig);
    initializeIcons(undefined, { disableWarnings: true });
    getCurrentUser(this.props);
  }

  componentDidMount() {
    // getCurrentUser(this.props);
  }

  public render(): JSX.Element {
    const userState: ICurrentUserState = this.props.store.user.currentUser;
    return (
      <Fabric>
        {this.props.store.user.error ? (
          <div>
            Error while fetching current user from SharePoint.
            {this.props.store.user.error}
          </div>
        ) : (
          this.props.store.user.currentUser.isFetched && (
            <div>Current User is: {userState.firstName}</div>
          )
        )}
      </Fabric>
    );
  }
}
