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


export const addToTicketFromState = itemId => ({
    type: C.SELECT_ENGAGEMENT_TYPE,
    payload: itemId
})

export const addToTicket = itemId => (dispatch, getState) => {
    if (getState().engagementType.byId > 0) {
        dispatch(addToTicketFromState(itemId))
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
