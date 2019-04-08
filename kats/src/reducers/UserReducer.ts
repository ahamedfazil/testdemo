import { Reducer } from 'redux';
import ActionTypeKeys from '../constants/ActionTypeKey';
import {
    IGetCurrentUserAction,
    IGetCurrentUserActionSuccess,
    IGetCurrentUserActionError,
    IGetUsersActionInProgress,
    IGetUsersActionSuccess,
    IGetUsersActionError
} from '../actions/IUserActions';
import { IUser } from '../models/IUser'
import appInitialState from '../store/appInitialState'
import ActionTypes from '../actions/ActionTypes';


export const userReducer: Reducer<IUser> = (
    state:IUser = appInitialState.user,
    action: ActionTypes
): IUser => {
    switch (action.type) {
        case ActionTypeKeys.GET_CURRENT_USER:
            return onGetCurrentUserDetailsInProgress(state, action);
        case ActionTypeKeys.GET_CURRENT_USER_SUCCESS:
            return onGetCurrentUserDetails(state, action);
        case ActionTypeKeys.GET_CURRENT_USER_ERROR:
            return onGetCurrentUserDetailsError(state, action)
        case ActionTypeKeys.GET_USERS_INPROGRESS:
            return onGetUserDetailsInProgress(state, action);
        case ActionTypeKeys.GET_USERS_SUCCESS:
            return onGetUserDetailsSuccess(state, action);
        case ActionTypeKeys.GET_USERS_ERROR:
            return onGetUserDetailsError(state, action)
        default:
            return state

    }

}

function onGetCurrentUserDetailsInProgress(
    currentState: IUser,
    action: IGetCurrentUserAction
) {
    return {
        ...currentState,
        isInitialised: true,
    };
}

function onGetCurrentUserDetails(
    currentState: IUser,
    action: IGetCurrentUserActionSuccess) {
    return {
        ...currentState,
        isInitialised: true,
        currentUser: action.payload.currentUser
    };
}

function onGetCurrentUserDetailsError(
    currentState: IUser,
    action: IGetCurrentUserActionError
) {
    return {
        ...currentState,
        error: action.payload.error.message
    };
}

function onGetUserDetailsInProgress(
    currentState: IUser,
    action: IGetUsersActionInProgress
) {
    return {
        ...currentState,
        isInitialised: true,
    };
}

function onGetUserDetailsSuccess(
    currentState: IUser,
    action: IGetUsersActionSuccess) {
    return {
        ...currentState,
        isInitialised: true,
        currentUser: action.payload.users
    };
}

function onGetUserDetailsError(
    currentState: IUser,
    action: IGetUsersActionError
) {
    return {
        ...currentState,
        error: action.payload.error.message
    };
}