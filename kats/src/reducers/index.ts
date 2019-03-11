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

import {
    supportVisibilityFilter,
    supportFields,
    fetching,
    suggestions

} from './ticket'


export default combineReducers({
    request,
    engagementType,
    accFramework,
    comment,
    auditTeamCc,
    errors,
    visibilityFilter,
    supportVisibilityFilter,
    supportFields,
    labelNames: combineReducers({
        fetching,
        suggestions
    })
    




})
