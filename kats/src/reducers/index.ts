import { combineReducers } from 'redux'
import {
    ticket,
    auditTeamCc,
    //engagementType,
   // accFramework,
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

import { setSubmitter } from './submitter';

import {
    selectedEngagementType,
    engagementTypesByItem
} from './dictionary'

export default combineReducers({
    ticket,
    //engagementType,
    selectedEngagementType,
    engagementTypesByItem,
    //accFramework,
    comment,
    auditTeamCc,
    errors,
    visibilityFilter,
    supportVisibilityFilter,
    supportFields,
    submitter:combineReducers({
        setSubmitter,
      //  infoBySubmitter
    }),
    labelNames: combineReducers({
        fetching,
        suggestions
    })
    




})
