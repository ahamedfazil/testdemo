import { Reducer } from "redux";
import { ITicketState } from "../models/ITicketState";
import ActionTypes from "../actions/ActionTypes";
import { initialState } from "../store/initialState";
import ActionTypeKeys from "../actions/ActionTypeKey";
import {
  IGetTicketDictionaryActionInProgress,
  IGetTicketDictionaryActionSuccess,
  IGetTicketDictionaryActionError
} from "../actions/IActions";

export const ticketReducer: Reducer<ITicketState> = (
  state: ITicketState = initialState.ticket,
  action: ActionTypes
): ITicketState => {
  switch (action.type) {
    case ActionTypeKeys.GET_TICKET_DICTIONARY_INPROGRESS:
      return onGetTicketDictionaryInProgress(state, action);
    case ActionTypeKeys.GET_TICKET_DICTIONARY_SUCCESS:
      return onGetTicketDictionarySuccess(state, action);
    case ActionTypeKeys.GET_TICKET_DICTIONARY_ERROR:
      return onGetTicketDictionaryError(state, action);
    default:
      return state;
  }
};

function onGetTicketDictionaryInProgress(
  currentState: ITicketState,
  action: IGetTicketDictionaryActionInProgress
) {
  return {
    ...currentState,
    isinitialised: true
  };
}

function onGetTicketDictionarySuccess(
  currentState: ITicketState,
  action: IGetTicketDictionaryActionSuccess
) {
  return {
    ...currentState,
    isinitialised: true,
    ticketDictionary: action.payload.ticketDictionary
  };
}

function onGetTicketDictionaryError(
  currentState: ITicketState,
  action: IGetTicketDictionaryActionError
) {
  return {
    ...currentState,
    error: action.payload.error
  };
}
