import { combineReducers } from 'redux'
import { request, 
    auditTeamCc, 
    engagementType,
    accFramework,
    errors, 
    visibilityFilter,
    comment } from './query'


export default combineReducers({
    request,
    engagementType,
    accFramework,
    comment,
    auditTeamCc, 
    errors, 
    visibilityFilter,
   
   


})
