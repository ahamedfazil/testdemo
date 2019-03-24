import { combineReducers } from 'redux'
import {
    ticket,
   
  
    errors,
    visibilityFilter,
 
} from './request'

// import {
//     supportVisibilityFilter,
//     supportFields,
//     fetching,
//     suggestions
// } from './ticket'

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
    
   
    errors,
    visibilityFilter,

    submitter:combineReducers({
        setSubmitter,
      //  infoBySubmitter
    }),
    labelNames: combineReducers({
        // fetching,
        // suggestions
    })
    




})
