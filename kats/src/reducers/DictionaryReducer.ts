import 'whatwg-fetch';
import C from '../constants';
import appInitialState from '../store/appInitialState';
import   { 
    SELECT_ACCOUNTING_FRAMEWORK, RECEIVE_ACCOUNTING_FRAMEWORK, 
    SELECT_AUDITING_STANDARDS, RECEIVE_AUDITING_STANDARDS, 
    SELECT_CATEGORY, RECEIVE_CATEGORY, 
    SELECT_TOPIC, RECEIVE_TOPIC, 
    SELECT_TICKET_TYPE, RECEIVE_TICKET_TYPE, 
    SELECT_STATUS, RECEIVE_STATUS 
} from '../actions/DictionaryActions';
import { DictionaryItem } from '../models/IDictionary';
import { ICurrentTicketState } from '../models/ITicket';


export const dictionaryReducer = (
    state:ICurrentTicketState = appInitialState.ticket.currentTicket, 
    action) => {
    switch (action.type) {
        case C.SELECT_ENGAGEMENT_TYPE:
            return {
                ...state,
                engagementType: (state.engagementType).push(action)
            }
        case SELECT_ACCOUNTING_FRAMEWORK:
            return {
                ...state, 
                accountingFramework: (state.accountingFramework).push(action)
            }
        case SELECT_AUDITING_STANDARDS:
            return {
                ...state,
                auditingStandard: (state.auditingStandard).push(action)
            }
        case SELECT_CATEGORY:
            return {
                ...state,
                category:action
            }
        case SELECT_TOPIC:
            return {
                ...state,
                topic: (state.topic).push(action)
            }
        case SELECT_TICKET_TYPE:
            return {
                ...state,
                ticketType: action
            }
        case SELECT_STATUS:
            return {
                ...state,
                status: action
            }
    }
}



//Engagement Type

export const byEngagementTypeId = (
    state:DictionaryItem[] = appInitialState.engagementType.items,
    action
) => {
    switch (action.type) {
        case C.RECEIVE_ENGAGEMENT_TYPES: //change to update engagement type or add engagement type to ticket
            return {
                ...state,
                ...action.payload.reduce((obj, item) => {
                    obj[item.id] = item
                    return obj
                }, {})
            }
        default:
                  //what happens when KATS is not fetching dictionary items from sharepoint? 
            return state; //send to app default load values
    }
}

export const visibleEngagementTypeIds = (state: number[] = [], action) => {
    switch (action.type) {
        case C.RECEIVE_ENGAGEMENT_TYPES:
            return action.payload.map(engagementType => engagementType.Id)
        default:
            return state
    }
}

export const getEngagementType = (state, Id) => state.byEngagementTypeId[Id]

export const getVisibleEngagementTypes = state =>
    state.visibleEngagementTypeIds.map(Id => getEngagementType(state, Id))



//Accounting  Frameworks

export const byAccountingFrameworkId = (
    state:DictionaryItem[] = appInitialState.accountingFramework.items,
    action
) => {
    switch (action.type) {
        case RECEIVE_ACCOUNTING_FRAMEWORK:
            return {
                ...state,
                ...action.payload.reduce((obj, item) => {
                    obj[item.id] = item
                    return obj
                }, {})
            }
        default:
            return state;
    }
}

export const visibleAccountingFrameworkIds = (state: number[] = [], action) => {
    switch (action.type) {
        case RECEIVE_ACCOUNTING_FRAMEWORK:
            return action.payload.map(item => item.id)
        default:
            return state
    }
}

export const getAccountingFramework = (state, Id) => state.byAccountingFrameworkId[Id]

export const getVisibleAccountingFrameworks = state =>
    state.visibleAccountingFrameworkIds.map(Id => getAccountingFramework(state, Id))




//Auditing Standards

export const byAuditingStandardId = (
    state:DictionaryItem[] = appInitialState.auditingStandard.items,
    action
) => {
    switch (action.type) {
        case RECEIVE_AUDITING_STANDARDS:
            return {
                ...state,
                ...action.payload.reduce((obj, item) => {
                    obj[item.id] = item
                    return obj
                }, {})
            }
        default:
            return state;
    }
}

export const visibleAuditingStandardIds = (state: number[] = [], action) => {
    switch (action.type) {
        case RECEIVE_AUDITING_STANDARDS:
            return action.payload.map(item => item.id)
        default:
            return state
    }
}

export const getAuditingStandard = (state, Id) => state.byAuditingStandardId[Id]

export const getVisibleAuditingStandards = state =>
    state.visibleAuditingStandardIds.map(Id => getAuditingStandard(state, Id))


//Category


export const byCategoryId = (
    state:DictionaryItem[] = appInitialState.category.items,
    action
) => {
    switch (action.type) {
        case RECEIVE_CATEGORY:
            return {
                ...state,
                ...action.payload.reduce((obj, item) => {
                    obj[item.id] = item
                    return obj
                }, {})
            }
        default:
            return state; 
    }
}

export const visibleCategoryIds = (state: number[] = [], action) => {
    switch (action.type) {
        case RECEIVE_CATEGORY:
            return action.payload.map(item => item.id)
        default:
            return state
    }
}

export const getCategory = (state, Id) => state.byCategoryId[Id]

export const getVisibleCategory = state =>
    state.visibleCategoryIds.map(Id => getCategory(state, Id))



//Topic

export const byTopicId = (
    state:DictionaryItem[] = appInitialState.topic.items,
    action
) => {
    switch (action.type) {
        case RECEIVE_TOPIC:
            return {
                ...state,
                ...action.payload.reduce((obj, item) => {
                    obj[item.id] = item
                    return obj
                }, {})
            }
        default:
            return state
    }
}

export const visibleTopicIds = (state: number[] = [], action) => {
    switch (action.type) {
        case RECEIVE_TOPIC:
            return action.payload.map(item => item.id)
        default:
            return state
    }
}

export const getTopic = (state, Id) => state.byTopicId[Id]

export const getVisibleTopics = state =>
    state.visibleTopicIds.map(Id => getTopic(state, Id))

//Ticket Type

export const byTicketTypeId = (
    state = appInitialState.ticket.currentTicket,
    action
) => {
    switch (action.type) {
        case RECEIVE_TICKET_TYPE:
            return {
                ...state,
                ...action.payload.reduce((obj, item) => {
                    obj[item.id] = item
                    return obj
                }, {})
            }
        default:
            return state
    }
}

export const visibleTicketTypeIds = (state: number[] = [], action) => {
    switch (action.type) {
        case RECEIVE_TICKET_TYPE:
            return action.payload.map(item => item.id)
        default:
            return state
    }
}

export const getTicketType = (state, Id) => state.byTicketTypeId[Id]

export const getVisibleticketTypes = state =>
    state.visibleTicketTypeIds.map(Id => getTicketType(state, Id))


//Ticket status

export const byStatusId = (
    state:DictionaryItem[] = appInitialState.status.items,
    action
) => {
    switch (action.type) {
        case RECEIVE_STATUS:
            return {
                ...state,
                ...action.payload.reduce((obj, item) => {
                    obj[item.id] = item
                    return obj
                }, {})
            }
        default:
            return state
    }
}

export const visibleStatusIds = (state: number[] = [], action) => {
    switch (action.type) {
        case RECEIVE_STATUS:
            return action.payload.map(item => item.id)
        default:
            return state
    }
}

export const getStatus = (state, Id) => state.byStatusId[Id]

export const getVisibleStatus = state =>
    state.visibleStatusIds.map(Id => getStatus(state, Id))

