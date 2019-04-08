import { combineReducers } from 'redux'


// import { selectedEngagementType, 
//         engagementTypesByItem
// } from './IDictionaryState'
import * as fromTicket from './TicketReducer';
import {
    //allTickets, 
    ticketReducer
} from './TicketReducer';
import { visibilityFilter } from './request';
import { errors } from './system';
import * as fromDictionary from './DictionaryReducer';
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


