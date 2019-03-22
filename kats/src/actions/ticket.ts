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
export const setTicketId = ticketId => 
({
    type: C.SET_TICKET_ID,
    payload:ticketId
})