import { combineReducers } from 'redux'
import { setSubmitter } from './submitter';

import { selectedEngagementType, 
        engagementTypesByItem
} from './dictionary'
import { allTickets, errors } from './ticket';
import { visibilityFilter } from './request';



export default combineReducers({
    allTickets,
    selectedEngagementType,
    engagementTypesByItem,
    errors,
    visibilityFilter,
    setSubmitter,
        })
