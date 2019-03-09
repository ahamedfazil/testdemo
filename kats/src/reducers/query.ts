import { combineReducers } from 'redux'
import C from '../constants'
import { User } from '../models/User';
import { Query } from '../models/Query';
import * as actions from '../actions';


//TODO: Include user context i.e. support user or auditor in initial state reducer

const { SHOW_MY_SUBMITTED } = visibilityFilters

export const visibilityFilter = (state = SHOW_MY_SUBMITTED, action) => {
    switch (action.type) {
        case actions.setVisibilityFilter:
            return action.filter
        default:
            return state
    }
}

export const query = (state = null, action) =>
    (action.type === actions.addQuery) ?
        action.payload :
        state

export const submitter = (state=null, action) =>
    (action.type === actions.setSubmitter) ? (action.payload) :
        state

export const errors = (state: any = {name: ''}, action) => {
    switch (action.type) {
        case addError:
            return {
                ...state,
                name:action.payload.name
            };
        case clearError:
            return state.filter((message, i) => i !== action.payload)
        default:
            return state
    }
}
export const allQueries = (state: any = {name: ''}, action) => {
    switch (action.type) {
        case addQuery:
           // const hasQuery = state.some((query: Query) => query.id === action.payload.id)

            //return (hasQuery) ?
               // state :{
               return {
                    ...state,
                    name:query(null, action).name
               // }.sort()
            }

        case removeQuery:
            return state.filter((query: Query) => query.id !== action.payload.id)

        default:
            return state

    }
}
export const user = (state:any = {name: ''}, action) => {
    switch (action.type) {

        case C.ADD_RESPONSIBLE_INDIVIDUAL:
            action.payload
            return state

        case C.REMOVE_RESPONSIBLE_INDIVIDUAL:

            return Object.assign({}, state, {
                user: !action.payload
            })

        case C.ADD_WATCHER:
            return {
                ...state,
                name:action.payload.name
            };

        case C.REMOVE_WATCHER:
            return state.filter((user, i) => i !== action.payload)

        case C.ADD_AUDIT_TEAM_CC:
            return {
                ...state,
                name:action.payload.name
            };

        case C.REMOVE_AUDIT_TEAM_CC:
            return state.filter((user, i) => i !== action.payload)


        default:
            return state

    }
}

export const comment = (state:any = {name: ''}, action) => {
    switch (action.type) {
        case addComment:
            return {
                ...state,
                name:action.payload.name
            };
        case removeComment:
            return state.filter((note, i) => i !== action.payload)
        default:
            return state
    }
}

 