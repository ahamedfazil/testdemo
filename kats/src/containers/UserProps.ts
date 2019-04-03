import { withRouter } from 'react-router';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';

import * as Actions from '../actions/UserActions'
import IStore from '../store/IStore';
import { IUserActions } from '../actions/IUserActions'

function MapStateToProps(store: IStore) {
    return {
        store: store
    };
}

function MapDispatchToProps(dispatch: Dispatch<IUserActions>) {
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