import C from '../constants';
import { User } from '../models/User'
import { DictionaryItem } from '../models/DictionaryItem';
import { Comment } from '../models/Comment';
import { Ticket } from '../models/Ticket';

export function addTicket(ticket:Ticket){
    return {
        type: C.ADD_TICKET,
        payload: ticket
    }
}

export const removeTicket = function(id) {
    return {
        type: C.REMOVE_TICKET,
        payload:id
    }
}

export const setTicketId = ticketId => 
({
    type: C.SET_TICKET_ID,
    payload:ticketId
})