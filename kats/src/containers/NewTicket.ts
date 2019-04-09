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
            DictionaryActions.getEngagementTypeSuccess,
            dispatch
        ),
        getAccountingFrameworks: bindActionCreators(
            DictionaryActions.getAccountingFrameworkSuccess,
            dispatch
        ),
        getAuditingStandards: bindActionCreators(
            DictionaryActions.getAuditingStandardSuccess,
            dispatch
        ),
        getCategories: bindActionCreators(
            DictionaryActions.getCategorySuccess,
            dispatch
        ),
        getTopics: bindActionCreators(
            DictionaryActions.getTopicSuccess,
            dispatch
        ),
        getTicketTypes: bindActionCreators(
            DictionaryActions.getTicketTypeSuccess,
            dispatch
        ),
        getStatus: bindActionCreators(
            DictionaryActions.getStatusSuccess,
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