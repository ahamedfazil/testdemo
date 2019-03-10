import C from '../constants';
import { User } from '../models/User'
import { Query } from '../models/Query';
import { DictionaryItem } from '../models/DictionaryItem';
import { Comment } from '../models/Comment';


export const visibilityFilters = {
    SHOW_MY_SUBMITTED:"SHOW_MY_SUBMITTED",
    SHOW_MY_UNASSIGNED:"SHOW_MY_UNASSIGNED",
    SHOW_MY_WATCHED:"SHOW_MY_WATCHED"

}


export const setRespIndividual = (user:string) =>
({
    type: C.SET_RESPONSIBLE_INDIVIDUAL,
    payload: user
})

export const setEngagementName = (text:string) =>
({
    type: C.SET_ENGAGEMENT_NAME,
    payload: text
})

export const setEngagementChargeCode = (text:string)=>
({
    type:C.SET_ENGAGEMENT_CHARGE_CODE,
    payload:text
})

export const setAccEndPeriod = (text:string) =>
({
    type: C.SET_ACCOUNTING_PERIOD_END,
    payload:text
})



export function setSubmitter (user:User){
    return{
        type:C.SET_SUBMITTER,
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

export const addEngagementType = (item:DictionaryItem) =>
({
    type: C.ADD_ENGAGEMENT_TYPE,
    payload:item
})

export const removeEngagementType = (index:number) =>
({
    type: C.REMOVE_ENGAGEMENT_TYPE,
    payload: index
})

export const setAuditStd = (index:number) =>
({
    type: C.SET_AUDITING_STANDARDS,
    payload:index
})


export const addAccFramewk = (index:number) =>
({
    type: C.ADD_ACCOUNTING_FRAMEWORK,
    payload:index
})

export const removeAccFramewk = (index:number) =>
({
    type: C.REMOVE_ACCOUNTING_FRAMEWORK,
    payload: index
})

export const setCategory = (index:number) =>
({
    type: C.SET_CATEGORY,
    payload: index
})

export const addTopic = (index:number) =>
({
    type: C.ADD_TOPIC,
    payload: index
})

export const clearTopic = (index:number) =>
({
    type: C.CLEAR_TOPIC,
    payload: index
})

export const setSubject = (text:string) =>
({
    type: C.SET_SUBJECT,
    payload: text
})

export const setDetailedAnalysis = (text:string) =>
({
    type: C.SET_DETAILED_ANALYSIS,
    payload: text
})

export const setPriority = (isUrgent:boolean) =>
({
    type: C.SET_PRIORITY,
    payload: isUrgent
})

export const setUrgencyReason = (text:string) =>
({
    type: C.SET_REASON_FOR_URGENCY,
    payload: text
})

export const uploadFile = (text:string) =>
({
    type: C.UPLOAD_FILE,
    payload: text
})

export const removeFile = (index:number) =>
({
    type: C.REMOVE_FILE,
    payload: index
})

export const addWatcher = (text:string) =>
({
    type: C.ADD_WATCHER,
    payload: text
})

export const removeWatcher = (index:number) =>
({
    type:C.REMOVE_WATCHER,
    payload: index
})

export const setStatus = (index:number) =>
({
    type: C.SET_STATUS,
    payload:index
})

export const addComment = (item:Comment) =>
({
    type: C.ADD_COMMENT,
    payload: item
})

export const removeComment = (index:number) =>
({
    type:C.REMOVE_COMMENT,
    payload:index
})


export const editComment = (item:Comment) =>
({
    type: C.EDIT_COMMENT,
    payload: item
})
