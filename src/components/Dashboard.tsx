import * as React from "react";
import { IDashboardProps } from "../models/IDashboardProps";
import TicketGrid from "../containers/ticket/TicketGrid";
import { autobind } from "@uifabric/utilities";
import { CompoundButton } from "office-ui-fabric-react";
import { ISiteInfo } from "../models/ISiteState";
import { navigateToNewForm } from "../services/SiteAPI";

export class Dashboard extends React.Component<IDashboardProps, {}> {
  constructor(props: IDashboardProps) {
    super(props);
  }

  public render(): JSX.Element {
    return (
      <div>
        <div className="ms-Grid-col ms-sm12 ms-md12 ms-lg12">
          <CompoundButton
            iconProps={{ iconName: "Add" }}
            primary={true}
            secondaryText="You can create a new ticket here"
            onClick={e => {
              this._onNavigationUpdate(e);
            }}
          >
            Create New Ticket
          </CompoundButton>
        </div>
        <br />
        <div className="ms-Grid-col ms-sm12 ms-md12 ms-lg12">For Dev:</div>
        <div className="ms-Grid-col ms-sm12 ms-md12 ms-lg12">
          <TicketGrid />
        </div>
      </div>
    );
  }

  @autobind
  private _onNavigationUpdate(event: any) {
    event.preventDefault();
    navigateToNewForm(this.props);
  }
}
