import { combineReducers } from 'redux'
import C from '../constants'
import { User } from '../models/User';
import { Query } from '../models/Query';
import {
    addSubmitter,
    changeSubmitter,
    addError,
    clearError,
    addQuery,
    removeQuery,
    setVisibilityFilter,
    addComment,
    editComment,
    removeComment,
    visibilityFilters,

} from '../actions';


//TODO: Include user context i.e. support user or auditor in initial state reducer

const { SHOW_MY_SUBMITTED } = visibilityFilters

export const visibilityFilter = (state = SHOW_MY_SUBMITTED, action) => {
    switch (action.type) {
        case setVisibilityFilter:
            return action.filter
        default:
            return state
    }
}

export const query = (state = null, action) =>
    (action.type === addQuery) ?
        action.payload :
        state

export const submitter = (state = User, action) =>
    (action.type === addSubmitter) ? (action.payload) :
        state

export const errors = (state, action) => {
    switch (action.type) {
        case addError:
            return [
                ...state,
                action.payload
            ]
        case clearError:
            return state.filter((message, i) => i !== action.payload)
        default:
            return state
    }
}
//how do we prevent duplicate requests/tickets?
export const allQueries = (state, action) => {
    switch (action.type) {
        case addQuery:
            const hasQuery = state.some((query: Query) => query.id === action.payload.id)

            return (hasQuery) ?
                state :
                [
                    ...state,
                    query(null, action)
                ].sort()

        case removeQuery:
            return state.filter((query: Query) => query.id !== action.payload.id)

        default:
            return state

    }
}
export const user = (state, action) => {
    switch (action.type) {

        case C.ADD_RESPONSIBLE_INDIVIDUAL:
            action.payload
            return state

        case C.REMOVE_RESPONSIBLE_INDIVIDUAL:

            return Object.assign({}, state, {
                user: !action.payload
            })

        case C.ADD_WATCHER:
            return [
                ...state,
                action.payload
            ]

        case C.REMOVE_WATCHER:
            return state.filter((user, i) => i !== action.payload)

        case C.ADD_AUDIT_TEAM_CC:
            return [
                ...state,
                action.payload
            ]

        case C.REMOVE_AUDIT_TEAM_CC:
            return state.filter((user, i) => i !== action.payload)


        default:
            return state

    }
}

export const comment = (state, action) => {
    switch (action.type) {
        case addComment:
            return [
                ...state,
                action.payload
            ]
        case removeComment:
            return state.filter((note, i) => i !== action.payload)
        default:
            return state
    }
}

 