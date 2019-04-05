import { Action } from 'redux';
import keys from '../constants/ActionTypeKey';
import { ITicket  } from '../models/ITicket';

export interface IAddTicketActionInProgress extends Action {
    type: keys.ADD_TICKET_INPROGRESS;
}

export interface IAddTicketActionSuccess extends Action{
    readonly type: keys.ADD_TICKET_SUCCESS;
    payload:{
        newTicket: ITicket;
    }
}

export interface IAddTicketActionError extends Action{
    readonly type: keys.ADD_TICKET_ERROR;
    payload:{
        error:Error;
    }
}

export interface IRemoveTicketAction extends Action{
    readonly type: keys.REMOVE_TICKET;
    payload:{
        id:number
    }
}

export interface IUpdateTicketAction extends Action{
    readonly type: keys.UPDATE_TICKET;
    payload: {
        id: number
    }
}