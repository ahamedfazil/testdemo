import { Action } from "redux";
import keys from "./ActionTypeKey";
import { IUser } from "../models/IUser";
export interface IGetUsersActionInProgress extends Action {
  readonly type: keys.GET_USERS_INPROGRESS;
}

export interface IGetUsersActionSuccess extends Action {
  readonly type: keys.GET_USERS_SUCCESS;
  payload: {
    users: IUser;
  };
}

export interface IGetUserActionError extends Action {
  readonly type: keys.GET_USERS_ERROR;
  payload: {
    error: Error;
  };
}
