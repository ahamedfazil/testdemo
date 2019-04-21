import * as React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import Ticket from "../containers/ticket/Ticket";
import Dashboard from "../containers/Dashboard";

class AppNavigation extends React.Component<{}> {
  constructor(props: {}) {
    super(props);
  }

  public render(): JSX.Element {
    return (
      <div className="ms-Grid-row">
        <Router hashType="noslash">
          <div>
            <Route path="/" exact={true} component={Dashboard} />
            <Route path="/newticket" exact={true} component={Ticket} />
            <Route
                path="/editticket/:itemId"
                exact={true}
                component={Ticket}
              />
              <Route
                path="/viewticket/:itemId"
                exact={true}
                component={Ticket}
              />
          </div>
        </Router>
      </div>
    );
  }
}

export default AppNavigation;
