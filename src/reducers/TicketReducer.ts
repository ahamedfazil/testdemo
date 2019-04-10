import { Reducer, combineReducers } from "redux";

import {
  IAddTicketActionInProgress,
  IAddTicketActionSuccess,
  IAddTicketActionError
} from "../actions/ITicketActions";
import { ITicketState } from "../models/ITicket";
import appInitialState from "../store/appInitialState";
import ActionTypes from "../actions/ActionTypes";
import ActionTypeKeys from "../actions/ActionTypeKey";

export const supportVisibilityFilter = (state = {}, action: { type: any; filter: any; }) => {
  switch (action.type) {
    case "":
      return action.filter;
    default:
      return state;
  }
};

export const ticketReducer: Reducer<ITicketState> = (
  state: ITicketState = appInitialState.ticket,
  action: ActionTypes
): ITicketState => {
  switch (action.type) {
    case ActionTypeKeys.ADD_TICKET_INPROGRESS:
      return onAddTicketInProgress(state, action);
    case ActionTypeKeys.ADD_TICKET_SUCCESS:
      return onAddTicketSuccess(state, action);
    case ActionTypeKeys.ADD_TICKET_ERROR:
      return onAddTicketError(state, action);
    default:
      return state;
  }
};

function onAddTicketInProgress(
  currentState: ITicketState,
  action: IAddTicketActionInProgress
) {
  return {
    ...currentState,
    isInitialised: true,
    newTicket: action.payload.newTicket
  };
}

function onAddTicketSuccess(
  currentState: ITicketState,
  action: IAddTicketActionSuccess
) {
  return {
    ...currentState,
    isInitialised: true
  };
}

function onAddTicketError(
  currentState: ITicketState,
  action: IAddTicketActionError
) {
  return {
    ...currentState,
    error: action.payload.error.message
  };
}
