import C from '../constants';
import 'whatwg-fetch'
import { url } from './api/config';
import { DictionaryItem } from '../models/DictionaryItem';

export interface Dictionary {
    results: DictionaryItem[];
}

export const selectEngagementType = item =>
    ({
        type: C.SELECT_ENGAGEMENT_TYPE,
        payload: item
    })

export const receiveEngagementTypes = (items) => ({
    type: C.RECEIVE_ENGAGEMENT_TYPES,
    payload: items
})

export const getEngagementTypes = () => dispatch => {
    fetch(`${url}/_api/web/lists/GetByTitle('Engagement%20Type')/Items?$select=Id,Title`, {
        method: 'GET',
        headers: {
            accept: "application/json;odata=verbose",
        },
    })
        .then(function (response) {
            return response.text()
            
        }).then(function (text) {
            console.log('text is: ',text);
            let val = JSON.parse(text);
            let val1 = val.d as Dictionary;
            console.log('val is: ',val1.results);
            
            val1.results.forEach((item) => {
                console.log(item.Title)
                dispatch(receiveEngagementTypes(val1.results))
            })
        })
}


export const addEngTypeFromState = itemId => ({
    type: C.SELECT_ENGAGEMENT_TYPE,
    payload: itemId
})

export const addEngTypeToTicket = itemId => (dispatch, getState) => {
    if (getState().engagementType.byId > 0) {
        dispatch(addEngTypeFromState(itemId))
    }
}

//Accounting Framework action types
export const SELECT_ACCOUNTING_FRAMEWORK = 'SELECT_ACCOUNTING_FRAMEWORK'
export const RECEIVE_ACCOUNTING_FRAMEWORK = 'RECEIVE_ACCOUNTING_FRAMEWORK'

//Accounting Framework action creators
export const selectAccountingFramework = item =>
    ({
        type: SELECT_ACCOUNTING_FRAMEWORK,
        payload: item
    })

export const receiveAccountingFrameworks = (items) => ({
    type: RECEIVE_ACCOUNTING_FRAMEWORK,
    payload: items
})

export const addAccFramwkFromState = itemId => ({
    type: SELECT_ACCOUNTING_FRAMEWORK,
    payload: itemId
})

export const addAccFramwkToTicket = itemId => (dispatch, getState) => {
    if (getState().accountingFrameworks.byId > 0) {
        dispatch(addAccFramwkFromState(itemId))
    }
}

//Auditing standards

    //Action types
    export const SELECT_AUDITING_STANDARDS = 'SELECT_AUDITING_STANDARDS'
    export const RECEIVE_AUDITING_STANDARDS = 'RECEIVE_AUDITING_STANDARDS'

    //Action creators  
export const selectAuditingStandards = item =>
({
    type: SELECT_AUDITING_STANDARDS,
    payload: item
})

export const receiveAuditingStandards = (items) => ({
    type: RECEIVE_AUDITING_STANDARDS,
    payload: items
})

export const addAudStandFromState = itemId => ({
    type: SELECT_AUDITING_STANDARDS,
    payload: itemId
})

export const addAudStandToTicket = itemId => (dispatch, getState) => {
    if (getState().auditingStandards.byId > 0) {
        dispatch(addAudStandFromState(itemId))
    }
}

//Category
    //Action types
    export const SELECT_CATEGORY = 'SELECT_CATEGORY'
    export const RECEIVE_CATEGORY = 'RECEIVE_CATEGORY'

    //Action creators
    export const selectCategory = item =>
    ({
        type: SELECT_CATEGORY,
        payload: item
    })
    
    export const receiveCategory = (items) => ({
        type: RECEIVE_CATEGORY,
        payload: items
    })
    
    export const addCategoryFromState = itemId => ({
        type: SELECT_CATEGORY,
        payload: itemId
    })
    
    export const addCategoryToTicket = itemId => (dispatch, getState) => {
        if (getState().category.byId > 0) {
            dispatch(addCategoryFromState(itemId))
        }
    }

//Topic
    //Action types
    export const SELECT_TOPIC = 'SELECT_TOPIC'
    export const RECEIVE_TOPIC = 'RECEIVE_TOPIC'

    //Action creators
    export const selectTopic = item =>
    ({
        type: SELECT_TOPIC,
        payload: item
    })
    
    export const receiveTopic = (items) => ({
        type: RECEIVE_TOPIC,
        payload: items
    })
    
    export const addTopicFromState = itemId => ({
        type: SELECT_TOPIC,
        payload: itemId
    })
    
    export const addTopicToTicket = itemId => (dispatch, getState) => {
        if (getState().topic.byId > 0) {
            dispatch(addTopicFromState(itemId))
        }
    }


//Topic
    //Action types
    export const SELECT_TICKET_TYPE = 'SELECT_TICKET_TYPE'
    export const RECEIVE_TICKET_TYPE = 'RECEIVE_TICKET_TYPE'

    //Action creators
    export const selectTicketType = item =>
    ({
        type: SELECT_TICKET_TYPE,
        payload: item
    })
    
    export const receiveTicketType = (items) => ({
        type: RECEIVE_TOPIC,
        payload: items
    })
    
    export const addTicketTypeFromState = itemId => ({
        type: SELECT_TOPIC,
        payload: itemId
    })
    
    export const addTicketTypeToTicket = itemId => (dispatch, getState) => {
        if (getState().ticketType.byId > 0) {
            dispatch(addTicketTypeFromState(itemId))
        }
    }

    //Status
    //Action types
    export const SELECT_STATUS = 'SELECT_STATUS'
    export const RECEIVE_STATUS = 'RECEIVE_STATUS'

    //Action creators
    export const selectStatus = item =>
    ({
        type: SELECT_STATUS,
        payload: item
    })
    
    export const receiveStatus = (items) => ({
        type: RECEIVE_STATUS,
        payload: items
    })
    
    export const addStatusToTicketFromState = itemId => ({
        type: SELECT_STATUS,
        payload: itemId
    })
    
    export const addStatusToTicket = itemId => (dispatch, getState) => {
        if (getState().status.byId > 0) {
            dispatch(addStatusToTicketFromState(itemId))
        }
    }

    
 

// export const fetchEngagementTypesIfNeeded = (action) => {
//     return (dispatch, getState) => {
//         if (shouldFetchEngagementTypes(getState(), action)) {
//             return dispatch(fetchEngagementTypes())
//         } else {
//             return Promise.resolve()
//         }
//     }
// }



// export const shouldFetchEngagementTypes = (state, action) => {
//     const engagementTypes = state.engagementTypesByItem[action]
//     if (!engagementTypes) {
//         return true
//     } else if (engagementTypes.isFetching) {
//         return false
//     } else {
//         return engagementTypes.didInvalidate
//     }
// }

// export function fetchEngagementTypesIfNeeded(action) {
//     return (dispatch, getState) => {
//         if (shouldFetchEngagementTypes(getState(), action)) {
//             return dispatch(fetchEngagementTypes(action))
//         } else {
//             return Promise.resolve()
//         }
//     }
// }


// export const setAuditStandard = (item:DictionaryItem) =>
// ({
//     type: C.SET_AUDITING_STANDARDS,
//     payload:item
// })


// export const addAccFramework = (item:DictionaryItem) =>
// ({
//     type: C.ADD_ACCOUNTING_FRAMEWORK,
//     payload:item
// })

// export const removeAccFramework = (item:DictionaryItem) =>
// ({
//     type: C.REMOVE_ACCOUNTING_FRAMEWORK,
//     payload: item
// })

// export const setCategory = (item:DictionaryItem) =>
// ({
//     type: C.SET_CATEGORY,
//     payload: item
// })

// export const addTopic = (index:number) =>
// ({
//     type: C.ADD_TOPIC,
//     payload: index
// })

// export const clearTopic = (index:number) =>
// ({
//     type: C.REMOVE_TOPIC,
//     payload: index
// })

// export const setStatus = (item:DictionaryItem) =>
// ({
//     type: C.SET_STATUS,
//     payload:item
// })


// export const setAuditStandard = (item:DictionaryItem) =>
// ({
//     type: C.SET_AUDITING_STANDARDS,
//     payload:item
// })


// export const addAccFramework = (item:DictionaryItem) =>
// ({
//     type: C.ADD_ACCOUNTING_FRAMEWORK,
//     payload:item
// })

// export const removeAccFramework = (item:DictionaryItem) =>
// ({
//     type: C.REMOVE_ACCOUNTING_FRAMEWORK,
//     payload: item
// })

// export const setCategory = (item:DictionaryItem) =>
// ({
//     type: C.SET_CATEGORY,
//     payload: item
// })

// export const addTopic = (index:number) =>
// ({
//     type: C.ADD_TOPIC,
//     payload: index
// })

// export const clearTopic = (index:number) =>
// ({
//     type: C.REMOVE_TOPIC,
//     payload: index
// })

// export const setStatus = (item:DictionaryItem) =>
// ({
//     type: C.SET_STATUS,
//     payload:item
// })
