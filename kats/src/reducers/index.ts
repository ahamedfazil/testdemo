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

import { setSubmitter,infoBySubmitter } from './submitter'


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
    submitter:combineReducers({
        setSubmitter,
        infoBySubmitter
    }),
    labelNames: combineReducers({
        fetching,
        suggestions
    })
    




})
