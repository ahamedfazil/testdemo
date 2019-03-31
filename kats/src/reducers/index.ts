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




const getAddedIds = state => fromTicket.getAddedIds(state.action);
const getEngagementType = (state,Id) =>fromDictionary.getEngagementType(state.engagementTypes, Id);
const getAccountingFramework = (state,Id) =>fromDictionary.getAccountingFramework(state.accountingFrameworks, Id);
const getAuditingStandard = (state,Id) => fromDictionary.getAuditingStandard(state.auditingStandards,Id);
const getCategory = (state,Id) => fromDictionary.getCategory(state.category, Id);
const getTopic = (state,Id) => fromDictionary.getTopic(state.topic, Id);
const getTicketType = (state,Id) => fromDictionary.getTicketType(state.ticketType, Id);
const getStatus = (state,Id) => fromDictionary.getStatus(state.status, Id);



export const getTicketEngagementTypes = state =>
    getAddedIds(state).map(id => ({
        ...getEngagementType(state,id)
    }))