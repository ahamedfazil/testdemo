import { combineReducers } from 'redux'


// import { selectedEngagementType, 
//         engagementTypesByItem
// } from './IDictionary'
import * as fromTicket from './TicketReducer';
import {
    //allTickets, 
    ticketReducer
} from './TicketReducer';
import { visibilityFilter } from './request';
import { errors } from './system';
import * as fromDictionary from './DictionaryReducer';
import {
    byEngagementTypeId, visibleEngagementTypeIds,
    byAccountingFrameworkId, visibleAccountingFrameworkIds,
    byAuditingStandardId, visibleAuditingStandardIds,
    byCategoryId, visibleCategoryIds,
    byTopicId, visibleTopicIds,
    byTicketTypeId, visibleTicketTypeIds,
    byStatusId, visibleStatusIds

} from './DictionaryReducer';
import { userReducer } from './UserReducer';
// import ticketEngagementType from './ticket';



export default combineReducers({
    //allTickets,
    ticket: ticketReducer,
    user: userReducer,
    // ticketEngagementType,
    // selectedEngagementType,
    // engagementTypesByItem,
    errors,
    visibilityFilter,

    engagementTypes: combineReducers({
        byEngagementTypeId,
        visibleEngagementTypeIds,
    }),
    accountingFrameworks: combineReducers({
        byAccountingFrameworkId,
        visibleAccountingFrameworkIds
    }),
    auditingStandards: combineReducers({
        byAuditingStandardId,
        visibleAuditingStandardIds,
    }),
    category: combineReducers({
        byCategoryId,
        visibleCategoryIds,
    }),
    topic: combineReducers({
        byTopicId,
        visibleTopicIds,
    }),
    ticketType: combineReducers({
        byTicketTypeId,
        visibleTicketTypeIds,
    }),
    status: combineReducers({
        byStatusId,
        visibleStatusIds
    })
})


