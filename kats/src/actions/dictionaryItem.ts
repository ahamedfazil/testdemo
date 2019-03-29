import C from '../constants';
import caller from './api/caller'
import { resolve } from 'q';
import { DictionaryService } from '../services/DictionaryService';
import 'whatwg-fetch'


let svc = new DictionaryService;

export const selectEngagementType = item =>
    ({
        type: C.SELECT_ENGAGEMENT_TYPE,
        payload: item
    })

// export const requestEngagmentType = (info) => ({
//     type: C.REQUEST_ENGAGEMENT_TYPES,
//     payload: info

// })

export interface Idd {
    results: DictionaryProperties[];
}

export interface DictionaryProperties {
    Title: string;
    Id: number;
}


export const receiveEngagementTypes = (items) => ({
    type: C.RECEIVE_ENGAGEMENT_TYPES,
    payload: items
})

export const getEngagementTypes = () => dispatch => {
    fetch(`https://sites.kpmg.co.uk/apps/katsdev/_api/web/lists/GetByTitle('Engagement%20Type')/Items?$select=Id,Title`, {
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
            let val1 = val.d as Idd;
            console.log('val is: ',val1.results);
            
            val1.results.forEach((item) => {
                console.log(item.Title)
                dispatch(receiveEngagementTypes(val1.results))
            })
        })
}

// export const getEngagementTypes = () =>dispatch=> {
//    let value = svc.getAllEngagementTypes()
//    //value.then(res=> res.json())
//     dispatch(receiveEngagementTypes(value))    
//      console.log('dictionary item ',value);
// }

// export const getEngagementTypes = () => {
//     try {

//         let value = fetch(`https://sites.kpmg.co.uk/apps/katsdev/_api/web/lists/GetByTitle('Engagement%20Type')/Items?$select=Id,Title`, {
//             method: 'GET',
//             headers: {
//                 accept: "application/json;odata=verbose",
//             },
//         })
//             .then(response => response.json())
//             .then(result => {
//                 setTimeout(() => {
//                     dispatch => {
//                         dispatch(receiveEngagementTypes(result.json()))
//                         console.log('result is: ',JSON.stringify(result.json()));
//                     }
//                 }, 5000)
//             });
//             console.log('value is: ',JSON.stringify(value));
            

//     } catch (error) {
//         console.log(error);
//         throw new Error;
//     }
// }
    // new Promise(function (resolve, reject) {
    //     resolve(svc.getAllEngagementTypes())
    // }).then(function (result) {
    //     console.log(result);
        
    //     return result;
    // }).then(function (result) {
    //     dispatch => {
    //         return dispatch(receiveEngagementTypes(result))
    //     }
    // })

    // return async function (dispatch) {
    //     try {
    //         let value = await fetch(`https://sites.kpmg.co.uk/apps/katsdev/_api/web/lists/GetByTitle('Engagement%20Type')/Items?$select=Id,Title`, {
    //             method: 'GET',
    //             headers: {
    //                 accept: "application/json;odata=verbose",
    //             },
    //         })

    //         let val = await value.json() as Idd
    //         val.d.forEach((item) => {
    //             alert(item.Title)
    //         });
    //         console.log('Items are ', val.d);
    //         dispatch(receiveEngagementTypes(val))
    //     }
    //     catch(error) {
    //         console.log(error);
    //         throw new Error;
    //     }
    // }



 

export const addToTicketFromState = itemId => ({
    type: C.SELECT_ENGAGEMENT_TYPE,
    payload: itemId
})

export const addToTicket = itemId => (dispatch, getState) => {
    if (getState().engagementType.byId > 0) {
        dispatch(addToTicketFromState(itemId))
    }
}

export const _receiveEngagementTypes = (info, json) => ({
    type: C.RECEIVE_ENGAGEMENT_TYPES,
    payload: info,
    engagementType: json.data.children.map(child => child.data),
    receivedAt: Date.now()
})

// export const invalidateEngagamentType = (item) => ({
//     type: C.INVALIDATE_ENGAGEMENT_TYPES,
//     payload: item
// })

// export const fetchEngagementTypes = (info) => {
//     return async function (dispatch) {
//         dispatch(requestEngagmentType(info))
//         try {
//             let value = await fetch('https://xlitconsultinge.sharepoint.com/sites/katsdev/_api/web/lists/GetByTitle(\'Engagement%20Type\')/Items', {
//                 method: 'GET',
//                 headers: {
//                     Authorization: "Bearer " + 'accessToken',
//                     accept: "application/json;odata=verbose",
//                     //'Content-Type': 'application/json'
//                 }
//             })
//             .then(response => response.json())
//             .then (json =>dispatch(receiveEngagementTypes(info, json)));
            
//             console.log(value);

//         }
//         catch (error) {
//             console.log(error)



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
