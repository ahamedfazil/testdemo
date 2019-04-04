import keys from '../constants/ActionTypeKey';
import * as ITicketActions from './ITicketActions'
import { ITicket } from '../models/ITicket';

export function addTicketInProgress(
    newTicket: ITicket
): ITicketActions.IAddTicketActionInProgress {
    return {
        type: keys.ADD_TICKET_INPROGRESS
    }
}

export function addTicketSuccess(
    newTicket: ITicket
): ITicketActions.IAddTicketActionSuccess {
    return {
        type: keys.ADD_TICKET_SUCCESS,
        payload: {
            newTicket
        }
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