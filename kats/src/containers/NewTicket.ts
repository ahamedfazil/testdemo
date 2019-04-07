import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';

import * as UserActions from '../actions/UserActions';
import * as DictionaryActions from '../actions/DictionaryActions';
import { addTicketInProgress } from '../actions/TicketActions'
import IStore from '../store/IStore';
import { IAppProps } from '../models/IAppProps';
import NewTicket from '../components/NewTicket';


function MapStateToProps(store: IStore) {
    return {
        store: store
    };
}

function MapDispatchToProps(dispatch: Dispatch<IStore>) {
    return {
        getCurrentUser: bindActionCreators(
            UserActions.getCurrentUser,
            dispatch
        ),
        getCurrentUserSuccess: bindActionCreators(
            UserActions.getCurrentUserSuccess,
            dispatch
        ),
        getCurrentUserError: bindActionCreators(
            UserActions.getCurrentUserError,
            dispatch
        ),
        getEngagementTypes: bindActionCreators(
            DictionaryActions.getAllEngagementTypes,
            dispatch
        ),
        getAccountingFrameworks: bindActionCreators(
            DictionaryActions.getAllAccountingFrameworks,
            dispatch
        ),
        getAuditingStandards: bindActionCreators(
            DictionaryActions.getAllAuditingStandards,
            dispatch
        ),
        getCategories: bindActionCreators(
            DictionaryActions.getAllCategories,
            dispatch
        ),
        getTopics: bindActionCreators(
            DictionaryActions.getAllTopics,
            dispatch
        ),
        getTicketTypes: bindActionCreators(
            DictionaryActions.getAllTicketTypes,
            dispatch
        ),
        getStatus: bindActionCreators(
            DictionaryActions.getAllStatuses,
            dispatch
        ),
        addTicketInProgress: bindActionCreators(
            addTicketInProgress,
            dispatch
        )
    }

}
export default connect<{}, {}, IAppProps>(
    MapStateToProps,
    MapDispatchToProps
)(NewTicket) as React.ComponentClass<{}>;