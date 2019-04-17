import { Action } from "redux";
import keys from "./ActionTypeKey";
import { ICurrentUserState } from "../models/IUserState";
import { ITicketDictionary } from "../models/ITicketState";

//#region UserActions
export interface IGetUserActionInProgress extends Action {
  readonly type: keys.GET_CURRENT_USER_INPROGRESS;
}

export interface IGetUserActionSuccess extends Action {
  readonly type: keys.GET_CURRENT_USER_SUCCESS;
  payload: {
    currentUser: ICurrentUserState;
  };
}

export interface IGetUserActionError extends Action {
  readonly type: keys.GET_CURRENT_USER_ERROR;
  payload: {
    error: Error;
  };
}
//#endregion

//#region ticket Dictionary
export interface IGetTicketDictionaryActionInProgress extends Action {
  readonly type: keys.GET_TICKET_DICTIONARY_INPROGRESS;
}

export interface IGetTicketDictionaryActionSuccess extends Action {
  readonly type: keys.GET_TICKET_DICTIONARY_SUCCESS;
  payload: {
    ticketDictionary: ITicketDictionary;
  };
}

export interface IGetTicketDictionaryActionError extends Action {
  readonly type: keys.GET_TICKET_DICTIONARY_ERROR;
  payload: {
    error: Error;
  };
}
//#endregion
