import { connect, Dispatch } from "react-redux";
import IStore from "../../store/IStore";
import * as Actions from "../../actions/Actions";
import { bindActionCreators } from "redux";
import { ITicketProps } from "../../models/ITicketProps";
import { Ticket } from "../../components/ticket/Ticket";

function mapStateToProps(store: IStore) {
  return {
    store: store
  };
}

function mapDispatchToProps(dispatch: Dispatch<IStore>) {
  return {
    getTicketDictionaryInProgress: bindActionCreators(
      Actions.getTicketDictionaryInProgress,
      dispatch
    ),
    getTicketDictionarySuccess: bindActionCreators(
      Actions.getTicketDictionarySuccess,
      dispatch
    ),
    getTicketDictionaryError: bindActionCreators(
      Actions.getTicketDictionaryError,
      dispatch
    ),
    getCurrentUserSuccess: bindActionCreators(
      Actions.getCurrentUserSuccess,
      dispatch
    ),
    updateSiteInfo: bindActionCreators(Actions.updateSiteInfo, dispatch)
  };
}

export default connect<{}, {}, ITicketProps>(
  mapStateToProps,
  mapDispatchToProps
)(Ticket) as React.ComponentClass<{}>;
