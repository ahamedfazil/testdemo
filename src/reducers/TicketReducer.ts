import { Reducer,combineReducers } from 'redux';

import {
    IAddTicketActionInProgress,
    IAddTicketActionSuccess,
    IUpdateTicketAction,
    IAddTicketActionError
} from '../actions/ITicketActions';

import * as A from '../actions';
import C from '../constants';
import { ITicketState } from '../models/ITicket';
import appInitialState from '../store/appInitialState';
import ActionTypes from '../actions/ActionTypes';
import ActionTypeKeys from '../constants/ActionTypeKey';


const { SHOW_ALL_FIELDS } = A.visibilityFilters

export const supportVisibilityFilter = (state = SHOW_ALL_FIELDS, action) => {
    switch (action.type) {
        case C.SET_VISIBILITY_FILTER:
            return action.filter
        default:
            return state
    }
}


export const ticketReducer: Reducer<ITicketState> = (
    state:ITicketState = appInitialState.ticket,
    action: ActionTypes
):ITicketState => {
    switch (action.type) {
        case ActionTypeKeys.ADD_TICKET_INPROGRESS:
            return onAddTicketInProgress(state, action);
        case ActionTypeKeys.ADD_TICKET_SUCCESS:
            return onAddTicketSuccess(state,action);
        case ActionTypeKeys.ADD_TICKET_ERROR:
            return onAddTicketError(state,action);
        default:
        return state
}

}

function onAddTicketInProgress(
    currentState: ITicketState,
    action: IAddTicketActionInProgress) {
    return {
        ...currentState,
        isInitialised:true,
        newTicket: action.payload.newTicket
        
    };
}

function onAddTicketSuccess(
    currentState: ITicketState,
    action: IAddTicketActionSuccess
){
    return{
        ...currentState,
        isInitialised: true,

    };
}

function onAddTicketError(
    currentState:ITicketState,
    action: IAddTicketActionError
){
    return {
        ...currentState,
        error: action.payload.error.message
    };
}

