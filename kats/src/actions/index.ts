import C from '../constants';
import { User } from '../models/User'
import { Query } from '../models/Query';


export const visibilityFilters = {
    SHOW_MY_SUBMITTED:"SHOW_MY_SUBMITTED",
    SHOW_MY_UNASSIGNED:"SHOW_MY_UNASSIGNED",
    SHOW_MY_WATCHED:"SHOW_MY_WATCHED"

}

export function addSubmitter (user:User){
    return{
        type:C.ADD_SUBMITTER,
        payload: user
    }
}

export const changeSubmitter = function(user:User){
    return {
        type: C.CHANGE_SUBMITTER,
        payload: user
    }
}

export const addError = (index:number) =>
({
    type: C.ADD_ERROR,
    payload: index
})

export const clearError = (index:number) =>
({
    type: C.CLEAR_ERROR,
    payload:index
})

export const addQuery = (query:Query) =>
({
    type: C.ADD_QUERY,
    payload: query
})

export const removeQuery = (index:number) =>
({
    type:C.REMOVE_QUERY,
    payload: index
})

export const setVisibilityFilter = (filter) =>
({
    type: C.SET_VISIBILITY_FILTER,
    payload: filter
})

export const addComment = (note:string) =>
({
    type: C.ADD_COMMENT,
    payload: note
})

export const removeComment = (index:number) =>
({
    type:C.REMOVE_COMMENT,
    payload:index
})


export const editComment = (index:number) =>
({
    type: C.EDIT_COMMENT,
    payload: index
})

export const addEngagementType = (index:number) =>
({
    type: C.ADD_ENGAGEMENT_TYPE,
    payload:index
})

export const removeEngagementType = (index:number) =>
({
    type: C.REMOVE_ENGAGEMENT_TYPE,
    payload: index
})

export const addAuditingStandards = (index:number) =>
({
    type: C.ADD_AUDITING_STANDARDS,
    payload:index
})

export const removeAuditingStandards = (index:number) =>
({
    type: C.REMOVE_AUDITING_STANDARDS,
    payload: index
})

export const addAccountFramework = (index:number) =>
({
    type: C.ADD_ACCOUNT_FRAMEWORK,
    payload:index
})

export const removeAccountFramework = (index:number) =>
({
    type: C.REMOVE_ACCOUNT_FRAMEWORK,
    payload: index
})

export const addCategory = (index:number) =>
({
    type: C.ADD_CATEGORY,
    payload: index
})

export const changeCategory = (index:number) =>
({
    type: C.CHANGE_CATEGORY,
    payload: index
})

export const setPriority = (index:number) =>
({
    type: C.SET_PRIORITY,
    payload: index
})

export const setStatus = (index:number) =>
({
    type: C.SET_STATUS,
    payload:index
})



// export function addUser (user:User) {
//     switch (user) {
//         case C.ADD_WATCHER:

            
//             break;
    
//         default:
//             break;
//     }
// }

