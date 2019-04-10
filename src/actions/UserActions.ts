import keys from "./ActionTypeKey";
import { IUserState } from "../models/IUser";
import * as IUserActions from "./IUserActions";

export function getCurrentUser(): IUserActions.IGetCurrentUserAction {
  return {
    type: keys.GET_CURRENT_USER
  };
}

export function getCurrentUserSuccess(
  currentUser: IUserState
): IUserActions.IGetCurrentUserActionSuccess {
  return {
    type: keys.GET_CURRENT_USER_SUCCESS,
    payload: {
      currentUser
    }
  };
}

export function getCurrentUserError(
  error: Error
): IUserActions.IGetCurrentUserActionError {
  return {
    type: keys.GET_CURRENT_USER_ERROR,
    payload: {
      error
    }
  };
}

export function getUsersInProgress(): IUserActions.IGetUsersActionInProgress {
  return {
    type: keys.GET_USERS_INPROGRESS
  };
}

export function getUserInfoSuccess(
  users: IUserState[]
): IUserActions.IGetUsersActionSuccess {
  return {
    type: keys.GET_USERS_SUCCESS,
    payload: {
      users
    }
  };
}

export function getUserInfoError(
  error: Error
): IUserActions.IGetUsersActionError {
  return {
    type: keys.GET_USERS_ERROR,
    payload: {
      error
    }
  };
}
