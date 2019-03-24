import C from '../constants';
import { DictionaryItem } from '../models/DictionaryItem';
//import fetch from 'cross-fetch'


export const selectEngagementType = (item) =>
    ({
        type: C.SELECT_ENGAGEMENT_TYPE,
        payload: item
    })

export const requestEngagmentType = () => ({
    type: C.REQUEST_ENGAGEMENT_TYPES,
    
})

export const receiveEngagementTypes = (info, json) => ({
    type: C.RECEIVE_ENGAGEMENT_TYPES,
    payload: info,
    engagementType: json.data.children.map(child => child.data),
    receivedAt: Date.now()
})

export const invalidateEngagamentType = (item) => ({
    type: C.INVALIDATE_ENGAGEMENT_TYPES,
    payload: item
})

export function fetchEngagementTypes() {
    return async function (dispatch) {
        dispatch(requestEngagmentType())
        try{
            let value = await fetch('https://sites.kpmg.co.uk/apps/katsdev/_api/web/lists/GetByTitle(\'Engagement%20Type\')/Items', {
                method: 'GET',
                headers: {
                    Authorization: "Bearer " + 'accessToken',
                    accept: "application/json;odata=verbose",
                    //'Content-Type': 'application/json'
                }
            });
           // dispatch(receiveEngagementTypes(info, json))
           console.log(value);
           
        }
        catch (error){
            console.log(error)

            
            
        }
       
    }
}


<<<<<<< HEAD
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
=======
export const shouldFetchEngagementTypes = (state, action) => {
    const engagementTypes = state.engagementTypesByItem[action]
    if (!engagementTypes) {
        return true
    } else if (engagementTypes.isFetching) {
        return false
    } else {
        return engagementTypes.didInvalidate
    }
}

export function fetchEngagementTypesIfNeeded(action) {
    return (dispatch, getState) => {
        if (shouldFetchEngagementTypes(getState(), action)) {
            return dispatch(fetchEngagementTypes())
        } else {
            return Promise.resolve()
        }
    }
}


export const setAuditStandard = (item:DictionaryItem) =>
({
    type: C.SET_AUDITING_STANDARDS,
    payload:item
})


export const addAccFramework = (item:DictionaryItem) =>
({
    type: C.ADD_ACCOUNTING_FRAMEWORK,
    payload:item
})

export const removeAccFramework = (item:DictionaryItem) =>
({
    type: C.REMOVE_ACCOUNTING_FRAMEWORK,
    payload: item
})

export const setCategory = (item:DictionaryItem) =>
({
    type: C.SET_CATEGORY,
    payload: item
})

export const addTopic = (index:number) =>
({
    type: C.ADD_TOPIC,
    payload: index
})

export const clearTopic = (index:number) =>
({
    type: C.REMOVE_TOPIC,
    payload: index
})

export const setStatus = (item:DictionaryItem) =>
({
    type: C.SET_STATUS,
    payload:item
})
>>>>>>> e48c43fb8fa0e7e2e7dd42c801e4f655f661bd01
