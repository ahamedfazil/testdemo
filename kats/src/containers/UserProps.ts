import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';

import * as Actions from '../actions/UserActions'
import IStore from '../store/IStore';
import { IAppProps } from '../models/IAppProps';
import App from '../App';
import ActionTypes from '../actions/ActionTypes';

function MapStateToProps(store: IStore) {
    return {
        store: store
    };
}

function MapDispatchToProps(dispatch: Dispatch<ActionTypes>) {
    return {
        getCurrentUser: bindActionCreators(
            Actions.getCurrentUser,
            dispatch
        ),
        getCurrentUserSuccess: bindActionCreators(
            Actions.getCurrentUserSuccess,
            dispatch
        ),
        getCurrentUserError: bindActionCreators(
            Actions.getCurrentUserError,
            dispatch
        ),
    }
    
}
export default connect<{},{}, IAppProps>(
    MapStateToProps,
    MapDispatchToProps
)(App) as React.ComponentClass<{}>;