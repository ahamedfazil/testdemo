import { connect, Dispatch } from "react-redux";
import * as Actions from "../../actions/Actions";
import IStore from "../../store/IStore";
import { push, RouterState } from "react-router-redux";
import { TicketGrid } from "../../components/ticket/TicketGrid";
import { bindActionCreators } from "redux";
import { ITicketGridProps } from "../../models/ITicketGridProps";

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

export default connect<{}, {}, ITicketGridProps>(
  mapStateToProps,
  mapDispatchToProps
)(TicketGrid) as React.ComponentClass<{}>;
