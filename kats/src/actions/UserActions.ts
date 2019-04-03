import keys from '../constants/ActionTypeKey';
import { IUserState } from '../models/User';
import * as IUserActions from './IUserActions';

export function getCurrentUser(): IUserActions.IGetCurrentUserAction {
    return {
        type:keys.GET_CURRENT_USER
    };
    }

export function getCurrentUserSuccess(
    currentUser: IUserState
):IUserActions.IGetCurrentUserActionSuccess{
    return{
        type: keys.GET_CURRENT_USER_SUCCESS,
        payload: {
            currentUser
        }
    };
}

export function getCurrentUserError (error:Error) :IUserActions.IGetCurrentUserActionError {
    return{
        type: keys.GET_CURRENT_USER_ERROR,
        payload: {
            error
        }
    };
}

export function getUserInfo():IUserActions.IGetUserInfoAction {
    return{
        type: keys.GET_USER_INFO,
      
    };
}

export function getUserInfoSuccess(
    ticketUser:IUserState
    ): IUserActions.IGetUserInfoActionSuccess {
        return{
            type: keys.GET_USER_INFO_SUCCESS,
            payload:{
                ticketUser
            }
        }
    }

export function getUserInfoError(
    error:Error
    ):IUserActions.IGetUserInfoActionError {
        return {
            type: keys.GET_USER_INFO_ERROR,
            payload:{
            error
        }
    };
  }