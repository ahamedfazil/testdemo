import { combineReducers } from 'redux'
import { setSubmitter } from './submitter';

// import { selectedEngagementType, 
//         engagementTypesByItem
// } from './dictionary'
import  allTickets, * as fromTicket from './ticket';

import { visibilityFilter } from './request';
import { errors } from './system';
import engagementTypes, * as fromDictionary from './dictionary';
import ticketEngagementType from './ticket';



export default combineReducers({
    allTickets,
    engagementTypes,
    ticketEngagementType,
    // selectedEngagementType,
    // engagementTypesByItem,
    errors,
    visibilityFilter,
    setSubmitter,
})




const getAddedIds = state => fromTicket.getAddedIds(state.action)
const getEngagementType = (state,id) =>fromDictionary.getEngagementType(state.engagementTypes, id)

export const getTicketEngagementTypes = state =>
    getAddedIds(state).map(id => ({
        ...getEngagementType(state,id)
    }))