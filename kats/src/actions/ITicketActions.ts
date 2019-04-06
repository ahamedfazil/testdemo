import { Action } from 'redux';
import keys from '../constants/ActionTypeKey';
import { ICurrentTicketState  } from '../models/ITicket';

export interface IAddTicketActionInProgress extends Action {
    type: keys.ADD_TICKET_INPROGRESS;
    payload:{
        newTicket: ICurrentTicketState;
        listName: string;
    }
}

export interface IAddTicketActionSuccess extends Action{
    readonly type: keys.ADD_TICKET_SUCCESS;
    
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