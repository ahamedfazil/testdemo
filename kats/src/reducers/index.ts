import { combineReducers } from 'redux'
import { setSubmitter } from './submitter';

// import { selectedEngagementType, 
//         engagementTypesByItem
// } from './dictionary'
import * as fromTicket from './ticket';
import { allTickets } from './ticket';
import { visibilityFilter } from './request';
import { errors } from './system';
import * as fromDictionary from './dictionary';
import {
    byEngagementTypeId, visibleEngagementTypeIds, 
    byAccountingFrameworkId,visibleAccountingFrameworkIds,
    byAuditingStandardId,visibleAuditingStandardIds,
    byCategoryId,visibleCategoryIds,
    byTopicId,visibleTopicIds,
    byTicketTypeId,visibleTicketTypeIds,
    byStatusId,visibleStatusIds
    
}from './dictionary';
// import ticketEngagementType from './ticket';



export default combineReducers({
    allTickets,
    // ticketEngagementType,
    // selectedEngagementType,
    // engagementTypesByItem,
    errors,
    visibilityFilter,
    setSubmitter,
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




const getAddedIds = state => fromTicket.getAddedIds(state.action)
const getEngagementType = (state,id) =>fromDictionary.getEngagementType(state.engagementTypes, id)

export const getTicketEngagementTypes = state =>
    getAddedIds(state).map(id => ({
        ...getEngagementType(state,id)
    }))