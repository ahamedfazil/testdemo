import { combineReducers } from 'redux'

import {
    //allTickets, 
    ticketReducer
} from './TicketReducer';
import { visibilityFilter } from './request';
import { errors } from './system';
import {
    engagementTypes,accountingFrameworks,
    auditingStandards,categories,ticketTypes,
    topics,status

} from './DictionaryReducer';
import { userReducer } from './UserReducer';
// import ticketEngagementType from './ticket';



export default combineReducers({
    ticket: ticketReducer,
    user: userReducer,
    errors,
    visibilityFilter,

    engagementTypes,
    accountingFrameworks,
    auditingStandards,
    categories,
    topics,
    ticketTypes,
    status
})


