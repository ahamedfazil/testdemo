import C from '../constants';
import { User } from '../models/User'
import { DictionaryItem } from '../models/DictionaryItem';
import { Comment } from '../models/Comment';
import { UserService } from '../services/UserService'


export const visibilityFilters = {
    SHOW_ALL_FIELDS: "SHOW_ALL_FIELDS",
    HIDE_SUPPORT_FIELDS: "HIDE_SUPPORT_FIELDS",

}

export const setVisibilityFilter = (filter) =>
({
    type: C.SET_VISIBILITY_FILTER,
    payload: filter
})

export const setSubmitter = (userId: string) => dispatch => {

    dispatch({
        type: C.REQUEST_SUBMITTER_INFO
    })

    let svc = new UserService();
    let submitter = svc.get(userId);

    return submitter
}

export const addAuditTeamCc = (user:User) =>
({
    type: C.ADD_AUDIT_TEAM_CC,
    payload: user
})

export const removeAuditTeamCc = (index:number) =>
({
    type: C.REMOVE_AUDIT_TEAM_CC,
    payload: index
})

export const setRespIndividual = (user:User) =>
({
    type: C.SET_RESPONSIBLE_INDIVIDUAL,
    payload: user
})

export const setEngagementName = (text:string) =>
({
    type: C.SET_ENGAGEMENT_NAME,
    payload: text
})

export const setEngagementChargeCode = (value:number)=>
({
    type:C.SET_ENGAGEMENT_CHARGE_CODE,
    payload:value
})

export const setAccEndPeriod = (text:string) =>
({
    type: C.SET_ACCOUNTING_PERIOD_END,
    payload:text
})



export const removeEngagementType = (index:number) =>
({
    type: C.REMOVE_ENGAGEMENT_TYPE,
    payload: index
})

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

export const addWatcher = (user:User) =>
({
    type: C.ADD_WATCHER,
    payload: user
})

export const removeWatcher = (index:number) =>
({
    type:C.REMOVE_WATCHER,
    payload: index
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

export const setStatus = (item:DictionaryItem) =>
({
    type: C.SET_STATUS,
    payload:item
})


export const addError = (message:string) =>
({
    type: C.ADD_ERROR,
    payload: message
})

export const clearError = (index:number) =>
({
    type: C.CLEAR_ERROR,
    payload:index
})

export const assignSupportTeam = (index: number) =>
({
    type: C.ASSIGN_SUPPORT_TEAM,
    payload: index
})

export const requireTraining = (isTraining:boolean) =>
({
    type: C.REQUIRE_TRAINING,
    payload: isTraining
})

export const setFaq = (isFaq:boolean) =>
({
    type: C.SET_FAQ,
    payload: isFaq
})

export const changeSuggestions = suggestions =>
({
    type:C.CHANGE_SUGGESTIONS,
    payload: suggestions
})

export const clearSuggestions = () => 
    ({
        type: C.CLEAR_SUGGESTIONS
    })

export const suggestLabelName = value => dispatch => {
    dispatch({
        type: C.FETCH_LABELS
    })
    //TODO: Add rest API call to term store for enterprise keywords/term set
}

export const removeLabel = (index:number) =>
({
    type: C.REMOVE_LABEL,
    payload: index
})

export const setAssignee = (user: User) =>
({
    type: C.SET_ASSIGNEE,
    payload: user
})

export const setReviewer = (user: User) =>
({
    type: C.SET_REVIEWER,
    payload: user
})

export const setConsultation = (text:string) =>
({
    type: C.SET_CONSULTATION,
    payload: text
})

export const setConculsion = (text:string) =>
({
    type: C.SET_CONCLUSION,
    payload: text
})

export const addToKB = (isKb:boolean) =>
({
    type: C.ADD_TO_KB,
    payload: isKb
})