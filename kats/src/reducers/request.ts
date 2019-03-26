import * as A from '../actions'
import C from '../constants';



//TODO: Include user context i.e. support user or auditor in initial state reducer

const { SHOW_ALL_FIELDS } = A.visibilityFilters

export const visibilityFilter = (state = SHOW_ALL_FIELDS, action) => {
    switch (action.type) {
        case C.SET_VISIBILITY_FILTER:
            return action.filter
        default:
            return state
    }
}
