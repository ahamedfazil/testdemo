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


//Engagement Type

export const engagementTypes = (
    state = appInitialState.engagementType, 
    action) => {
    switch (action.type) {
        case C.SELECT_ENGAGEMENT_TYPE:
            return {
                ...state,
                engagementType: state.engagementType - 1
            }
    }
}

export const byEngagementTypeId = (
    state:DictionaryItem[] = [],
    action
) => {
    switch (action.type) {
        case C.RECEIVE_ENGAGEMENT_TYPES:
            return {
                ...state,
                ...action.payload.reduce((obj, item) => {
                    obj[item.id] = item
                    return obj
                }, {})
            }
        default:
            const { itemId } = action
            if (itemId) {
                return {
                    ...state,
                    [itemId]: engagementTypes(state[itemId], action)
                }
            }
            return state
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

export const getEngagementType = (state, Id) => state._byId[Id]

export const getVisibleEngagementTypes = state =>
    state.visibleEngagementTypeIds.map(Id => getEngagementType(state, Id))



//Accounting  Frameworks
export const accountingFrameworks = (
    state = appInitialState.ticket, 
    action) => {
    switch (action.type) {
        case SELECT_ACCOUNTING_FRAMEWORK:
            return {
                ...state, 
                accountingFramework: state.accountingFramework - 1
            }
    }
}

export const byAccountingFrameworkId = (
    state:DictionaryItem[] = appInitialState.accountingFramework,
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
            const { itemId } = action
            if (itemId) {
                return {
                    ...state,
                    [itemId]: accountingFrameworks(state[itemId], action)
                }
            }
            return state
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

export const getAccountingFramework = (state, Id) => state._byId[Id]

export const getVisibleAccountingFrameworks = state =>
    state.visibleAccountingFrameworkIds.map(Id => getAccountingFramework(state, Id))




//Auditing Standards
export const auditingStandards = (
    state = appInitialState.ticket,
    action) => {
    switch (action.type) {
        case SELECT_AUDITING_STANDARDS:
            return {
                ...state,
                auditingStandard: state.auditingStandard - 1
            }
    }
}

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
            const { itemId } = action
            if (itemId) {
                return {
                    ...state,
                    [itemId]: auditingStandards(state[itemId], action)
                }
            }
            return state
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

export const getAuditingStandard = (state, Id) => state._byId[Id]

export const getVisibleAuditingStandards = state =>
    state.visibleAuditingStandardIds.map(Id => getAuditingStandard(state, Id))


//Category
export const category = (
    state = appInitialState.ticket, 
    action) => {
    switch (action.type) {
        case SELECT_CATEGORY:
            return {
                ...state,
                category: state.category - 1
            }
    }
}

export const byCategoryId = (
    state:DictionaryItem[] = appInitialState.category,
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
            const { itemId } = action
            if (itemId) {
                return {
                    ...state,
                    [itemId]: category(state[itemId], action)
                }
            }
            return state
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

export const getCategory = (state, Id) => state._byId[Id]

export const getVisibleCategory = state =>
    state.visibleCategoryIds.map(Id => getCategory(state, Id))



//Topic
export const topic = (
    state = appInitialState.ticket, action) => {
    switch (action.type) {
        case SELECT_TOPIC:
            return {
                ...state,
                topic: state.topic - 1
            }
    }
}

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
            const { itemId } = action
            if (itemId) {
                return {
                    ...state,
                    [itemId]: topic(state[itemId], action)
                }
            }
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

export const getTopic = (state, Id) => state._byId[Id]

export const getVisibleTopics = state =>
    state.visibleTopicIds.map(Id => getTopic(state, Id))

//Ticket Type
export const ticketType = (
    state = appInitialState.ticket,
    action) => {
    switch (action.type) {
        case SELECT_TICKET_TYPE:
            return {
                ...state,
                ticketType: state.currentTicket.ticketType - 1
            }
    }
}

export const byTicketTypeId = (
    state = appInitialState.ticketType,
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
            const { itemId } = action
            if (itemId) {
                return {
                    ...state,
                    [itemId]: ticketType(state[itemId], action)
                }
            }
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

export const getTicketType = (state, Id) => state._byId[Id]

export const getVisibleticketTypes = state =>
    state.visibleTicketTypeIds.map(Id => getTicketType(state, Id))


//Ticket status
export const status = (
    state = appInitialState.ticket, 
    action) => {
    switch (action.type) {
        case SELECT_STATUS:
            return {
                ...state,
                status: state.currentTicket.status - 1
            }
    }
}

export const byStatusId = (
    state:DictionaryItem[] = appInitialState.status,
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
            const { itemId } = action
            if (itemId) {
                return {
                    ...state,
                    [itemId]: status(state[itemId], action)
                }
            }
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

export const getStatus = (state, Id) => state._byId[Id]

export const getVisibleStatus = state =>
    state.visibleStatusIds.map(Id => getStatus(state, Id))


// export const selectedEngagementType = (state = initialState.engagementTypes.items[1], action) => {
//     switch (action.type) {
//         case C.SELECT_ENGAGEMENT_TYPE:
//             return action.payload
//         default:
//             return state
//     }
// }

// export const engagementTypes = (
//     state = initialState.engagementTypes,
//     action
// ) => {
//     switch (action.type) {
//         case C.INVALIDATE_ENGAGEMENT_TYPES:
//             return Object.assign({}, state, {
//                 didInvalidate: true
//             })
//         case C.REQUEST_ENGAGEMENT_TYPES:
//             return Object.assign({}, state, {
//                 isFetching: true,
//                 didInvalidate: false
//             })
//         case C.RECEIVE_ENGAGEMENT_TYPES:
//             return Object.assign({}, state, {
//                 isFetching: false,
//                 didInvalidate: false,
//                 items: action.payload,
//                 lastUpdated: action.receivedAt
//             })
//         default:
//             return state
//     }
// }

// export const engagementTypesByItem = (state = {}, action) => {
//     switch (action.type) {
//         case C.INVALIDATE_ENGAGEMENT_TYPES:
//         case C.RECEIVE_ENGAGEMENT_TYPES:
//         case C.REQUEST_ENGAGEMENT_TYPES:
//         return Object.assign({},state,{
//             [action.payload]: engagementTypes(
//                 state[action.payload],action)
//         })
//         default:
//             return state
//     }
// }

//mapping selected dictionary item id to dictionary item

