import { Action } from 'redux';
import keys from '../constants/ActionTypeKey';
import { IUserState } from '../models/User'

// export default interface IUserActions{
//     currentUser:IGetCurrentUserAction,
//     currentUserSuccess:IGetCurrentUserActionSuccess,
//     currentUserError:IGetCurrentUserActionError
// } 

export interface IGetCurrentUserAction extends Action {
    readonly type: keys.GET_CURRENT_USER;
}

export interface IGetCurrentUserActionSuccess extends Action{
    readonly type: keys.GET_CURRENT_USER_SUCCESS;
    payload: {
        currentUser: IUserState;
    };
}

export interface IGetCurrentUserActionError extends Action{
    readonly type: keys.GET_CURRENT_USER_ERROR;
    payload: {
        error:Error;
    };
}

export interface IGetUserInfoAction extends Action {
    readonly type: keys.GET_USER_INFO;
    
}

export interface IGetUserInfoActionSuccess extends Action{
    readonly type: keys.GET_USER_INFO_SUCCESS;
    payload: {
        ticketUser: IUserState;
    };
}

export interface IGetUserInfoActionError extends Action{
    readonly type: keys.GET_USER_INFO_ERROR;
    payload: {
        error:Error;
    };
}

