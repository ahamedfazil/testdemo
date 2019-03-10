import { combineReducers } from 'redux'
import {
    request,
    auditTeamCc,
    engagementType,
    accFramework,
    errors,
    visibilityFilter,
    comment
} from './request'


export default combineReducers({
    request,
    engagementType,
    accFramework,
    comment,
    auditTeamCc,
    errors,
    visibilityFilter,




})
