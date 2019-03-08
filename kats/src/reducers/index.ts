import { combineReducers } from 'redux'
import { 
    visibilityFilter,
    query,
    submitter,
    errors,
    user,
    comment,
    allQueries
 } from './query'
import { dictionary } from './dictionary'

export default combineReducers({
    query,
    dictionary,
    visibilityFilter,
    submitter,
    errors,
    user,
    comment,
    allQueries

})
