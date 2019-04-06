import { combineReducers } from 'redux'


// import { selectedEngagementType, 
//         engagementTypesByItem
// } from './dictionary'
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




const getAddedIds = state => fromTicket.getAddedIds(state.action);
const getEngagementType = (state, Id) => fromDictionary.getEngagementType(state.engagementTypes, Id);
const getAccountingFramework = (state, Id) => fromDictionary.getAccountingFramework(state.accountingFrameworks, Id);
const getAuditingStandard = (state, Id) => fromDictionary.getAuditingStandard(state.auditingStandards, Id);
const getCategory = (state, Id) => fromDictionary.getCategory(state.category, Id);
const getTopic = (state, Id) => fromDictionary.getTopic(state.topic, Id);
const getTicketType = (state, Id) => fromDictionary.getTicketType(state.ticketType, Id);
const getStatus = (state, Id) => fromDictionary.getStatus(state.status, Id);



export const getTicketEngagementTypes = state =>
    getAddedIds(state).map(id => ({
        ...getEngagementType(state, id)
    }))
export const getTicketAccountingFrameworks = state =>
    getAddedIds(state).map(id => ({
        ...getAccountingFramework(state, id)
    }))
export const getTicketAuditingStandards = state =>
    getAddedIds(state).map(id => ({
        ...getAuditingStandard(state, id)
    }))
export const getTicketCategory = state =>
    getAddedIds(state).map(id => ({
        ...getCategory(state, id)
    }))
export const getTicketTopics = state =>
    getAddedIds(state).map(id => ({
        ...getTopic(state, id)
    }))
export const getTicketTicketTypes = state =>
    getAddedIds(state).map(id => ({
        ...getTicketType(state, id)
    }))
export const getTicketStatus = state =>
    getAddedIds(state).map(id => ({
        ...getStatus(state, id)
    }))
