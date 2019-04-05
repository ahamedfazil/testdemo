import { Reducer } from 'redux';
import ActionTypeKeys from '../constants/ActionTypeKey';
import {
    IGetCurrentUserAction,
    IGetCurrentUserActionSuccess,
    IGetCurrentUserActionError,
    IGetUserInfoAction,
    IGetUserInfoActionSuccess,
    IGetUserInfoActionError
} from '../actions/IUserActions';
import { User } from '../models/User'
import appInitialState from '../store/appInitialState'
import ActionTypes from '../actions/ActionTypes';


export const userReducer: Reducer<User> = (
    state:User = appInitialState.users[0],
    action: ActionTypes
): User => {
    switch (action.type) {
        case ActionTypeKeys.GET_CURRENT_USER:
            return onGetCurrentUserDetailsInProgress(state, action);
        case ActionTypeKeys.GET_CURRENT_USER_SUCCESS:
            return onGetCurrentUserDetails(state, action);
        case ActionTypeKeys.GET_CURRENT_USER_ERROR:
            return onGetCurrentUserDetailsError(state, action)
        case ActionTypeKeys.GET_USER_INFO:
            return onGetUserDetailsInProgress(state, action);
        case ActionTypeKeys.GET_USER_INFO_SUCCESS:
            return onGetUserDetails(state, action);
        case ActionTypeKeys.GET_USER_INFO_ERROR:
            return onGetUserDetailsError(state, action)
        default:
            return state

    }

}

function onGetCurrentUserDetailsInProgress(
    currentState: User,
    action: IGetCurrentUserAction
) {
    return {
        ...currentState,
        isInitialised: true,
    };
}

function onGetCurrentUserDetails(
    currentState: User,
    action: IGetCurrentUserActionSuccess) {
    return {
        ...currentState,
        isInitialised: true,
        currentUser: action.payload.currentUser
    };
}

function onGetCurrentUserDetailsError(
    currentState: User,
    action: IGetCurrentUserActionError
) {
    return {
        ...currentState,
        error: action.payload.error.message
    };
}

function onGetUserDetailsInProgress(
    currentState: User,
    action: IGetUserInfoAction
) {
    return {
        ...currentState,
        isInitialised: true,
    };
}

function onGetUserDetails(
    currentState: User,
    action: IGetUserInfoActionSuccess) {
    return {
        ...currentState,
        isInitialised: true,
        currentUser: action.payload.ticketUser
    };
}

function onGetUserDetailsError(
    currentState: User,
    action: IGetUserInfoActionError
) {
    return {
        ...currentState,
        error: action.payload.error.message
    };
}