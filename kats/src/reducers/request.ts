import * as A from '../actions'
import C from '../constants';
// import initialState from '../initialState/requestState.json'
import initialState from '../initialState/index.json'


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

export const ticket = (state = initialState, action) => {

    switch (action.type) {

        // case A.setSubmitter:
        // return Object.assign({}, state,{
        //     submitter: action.payload
        // })

        case C.ADD_TICKET:
            return Object.assign({}, state, {
                tickets: action.payload
            })

        case C.REMOVE_TICKET:
            return Object.assign({}, state, {
                tickets: action.payload
            })

        case C.UPDATE_TICKET:
            return Object.assign({}, state, {
                tickets: action.payload
            })


        default:
            return state
    }
}




export const errors = (state: any[] = [], action) => {
    switch (action.type) {
        case A.addError:
            return [
                ...state,
                action.payload
            ]

        // TODO: Refactor clear error
        case A.clearError:

            return state.filter((message, i) => i !== action.payload)
        default:
            return state
    }
}

