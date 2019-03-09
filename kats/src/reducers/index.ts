import { combineReducers } from 'redux'
import { request, auditTeamCc, errors, visibilityFilter,comment } from './query'
import { dictionary } from './dictionary'

export default combineReducers({
    request,
    comment,
    auditTeamCc, 
    errors, 
    visibilityFilter,
    dictionary


})
