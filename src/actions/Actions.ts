import keys from "./ActionTypeKey";
import * as IActions from "./IActions";
import { ICurrentUserState } from "../models/IUserState";
import { ITicketDictionary } from "../models/ITicketState";
//#region User Actions
export function getCurrentUserInProgress(): IActions.IGetUserActionInProgress {
  return {
    type: keys.GET_CURRENT_USER_INPROGRESS
  };
}

export function getCurrentUserSuccess(
  currentUser: ICurrentUserState
): IActions.IGetUserActionSuccess {
  return {
    type: keys.GET_CURRENT_USER_SUCCESS,
    payload: {
      currentUser
    }
  };
}

export function getCurrentUserError(
  error: Error
): IActions.IGetUserActionError {
  return {
    type: keys.GET_CURRENT_USER_ERROR,
    payload: {
      error
    }
  };
}
//#endregion

//#region Ticket Dictionary Actions
export function getTicketDictionaryInProgress(): IActions.IGetTicketDictionaryActionInProgress {
  return {
    type: keys.GET_TICKET_DICTIONARY_INPROGRESS
  };
}

export function getTicketDictionarySuccess(
  ticketDictionary: ITicketDictionary
): IActions.IGetTicketDictionaryActionSuccess {
  return {
    type: keys.GET_TICKET_DICTIONARY_SUCCESS,
    payload: {
      ticketDictionary
    }
  };
}

export function getTicketDictionaryError(
  error: Error
): IActions.IGetTicketDictionaryActionError {
  return {
    type: keys.GET_TICKET_DICTIONARY_ERROR,
    payload: {
      error
    }
  };
}
//#endregion
