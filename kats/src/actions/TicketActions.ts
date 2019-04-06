import keys from '../constants/ActionTypeKey';
import * as ITicketActions from './ITicketActions'
import { ICurrentTicketState } from '../models/ITicket';

export function addTicketInProgress(
    newTicket: ICurrentTicketState,
    listName
): ITicketActions.IAddTicketActionInProgress {
    return {
        type: keys.ADD_TICKET_INPROGRESS,
        payload: {
            newTicket,
            listName
        }
    }
}

export function addTicketSuccess(
    newTicket: ICurrentTicketState
): ITicketActions.IAddTicketActionSuccess {
    return {
        type: keys.ADD_TICKET_SUCCESS,
        
    }
}

export function addTicketError(
    error: Error
): ITicketActions.IAddTicketActionError {
    return {
        type: keys.ADD_TICKET_ERROR,
        payload: {
            error
        }
    }
}

export function removeTicket(id: number) {
    return {
        type: keys.REMOVE_TICKET,
        payload: {
            id
        }
    }
}

export function setTicketId(ticketId: number) {
    return {
        type: keys.SET_TICKET_ID,
        payload: {
            ticketId
        }
    }
}