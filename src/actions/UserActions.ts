import keys from "./ActionTypeKey";
import * as IUserActions from "./IUserActions";
import { IUser } from "../models/IUser";

//#region User Actions
export function getCurrentUserInProgress(): IUserActions.IGetUsersActionInProgress {
  return {
    type: keys.GET_USERS_INPROGRESS
  };
}

export function getCurrentUserSuccess(
  users: IUser
): IUserActions.IGetUsersActionSuccess {
  return {
    type: keys.GET_USERS_SUCCESS,
    payload: {
      users
    }
  };
}

export function getCurrentUserError(
  error: Error
): IUserActions.IGetUserActionError {
  return {
    type: keys.GET_USERS_ERROR,
    payload: {
      error
    }
  };
}
//#endregion