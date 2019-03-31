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
    byEngagementTypeId, 
    visibleEngagementTypeIds, 
    byAccountingFrameworkId, 
    visibleAccountingFrameworkIds,
    
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
    })
})




const getAddedIds = state => fromTicket.getAddedIds(state.action)
const getEngagementType = (state,id) =>fromDictionary.getEngagementType(state.engagementTypes, id)

export const getTicketEngagementTypes = state =>
    getAddedIds(state).map(id => ({
        ...getEngagementType(state,id)
    }))