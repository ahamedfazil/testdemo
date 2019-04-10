import { Action } from "redux";
import keys from "./ActionTypeKey";
import { IUserState } from "../models/IUser";

export interface IGetCurrentUserAction extends Action {
  readonly type: keys.GET_CURRENT_USER;
}

export interface IGetCurrentUserActionSuccess extends Action {
  readonly type: keys.GET_CURRENT_USER_SUCCESS;
  payload: {
    currentUser: IUserState;
  };
}

export interface IGetCurrentUserActionError extends Action {
  readonly type: keys.GET_CURRENT_USER_ERROR;
  payload: {
    error: Error;
  };
}

export interface IGetUsersActionInProgress extends Action {
  readonly type: keys.GET_USERS_INPROGRESS;
}

export interface IGetUsersActionSuccess extends Action {
  readonly type: keys.GET_USERS_SUCCESS;
  payload: {
    users: IUserState[];
  };
}

export interface IGetUsersActionError extends Action {
  readonly type: keys.GET_USERS_ERROR;
  payload: {
    error: Error;
  };
}
