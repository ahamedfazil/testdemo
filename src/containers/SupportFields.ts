import SupportFields from "../components/forms/SupportFields";
import { bindActionCreators, Dispatch } from "redux";
import { connect } from "react-redux";
import IStore from "../store/IStore";
import * as UserActions from "../actions/UserActions";
import * as DictionaryActions from "../actions/DictionaryActions";
import { IAppProps } from "../models/IAppProps";
// import { addTicketInProgress } from "../actions/TicketActions";

function MapStateToProps(store: IStore) {
  return {
    store: store
  };
}
function MapDispatchToProps(dispatch: Dispatch<IStore>) {
  return {
    getCurrentUser: bindActionCreators(UserActions.getCurrentUser, dispatch),
    getCurrentUserSuccess: bindActionCreators(
      UserActions.getCurrentUserSuccess,
      dispatch
    ),
    getCurrentUserError: bindActionCreators(
      UserActions.getCurrentUserError,
      dispatch
    ),

    getTicketTypes: bindActionCreators(
      DictionaryActions.getTicketTypeSuccess,
      dispatch
    ),
    // addTicketInProgress: bindActionCreators(addTicketInProgress, dispatch)
  };
}
export default connect<{}, {}, IAppProps>(
  MapStateToProps,
  MapDispatchToProps
)(SupportFields) as React.ComponentClass<{}>;
