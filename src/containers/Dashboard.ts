import { connect, Dispatch } from "react-redux";
import * as Actions from "../actions/Actions";
import { IDashboardProps } from "../models/IDashboardProps";
import IStore from "../store/IStore";
import { Dashboard } from "../components/Dashboard";
import { push, RouterState } from "react-router-redux";
import { bindActionCreators } from "redux";

function mapStateToProps(store: IStore) {
  return {
    store: store
  };
}

function mapDispatchToProps(dispatch: Dispatch<RouterState>) {
  return {
    onChangePath: (key: string) => {
      dispatch(push(key));
    },
    updateSiteInfo: bindActionCreators(Actions.updateSiteInfo, dispatch)
  };
}

export default connect<{}, {}, IDashboardProps>(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard) as React.ComponentClass<{}>;
