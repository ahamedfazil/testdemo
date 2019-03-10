import { combineReducers } from 'redux'
import C from '../constants'
import { User } from '../models/User';
import { Query } from '../models/Query';
import * as A from '../actions'
import { number } from 'prop-types';



//TODO: Include user context i.e. support user or auditor in initial state reducer

const { SHOW_MY_SUBMITTED } = A.visibilityFilters

export const visibilityFilter = (state = SHOW_MY_SUBMITTED, action) => {
    switch (action.type) {
        case C.SET_VISIBILITY_FILTER:
            return action.filter
        default:
            return state
    }
}

export const request = (state = null , action) => {

    switch (action.type) {

        case A.setRespIndividual:
            action.payload
            return state

        case A.addEngagementType:
            action.payload
            return state

        case A.setAccEndPeriod:
            action.payload
            return state

        case A.setAuditStd:
            action.payload
            return state

        case A.setCategory:
            action.payload
            return state

        case A.setSubject:
            action.payload
            return state

        case A.setDetailedAnalysis:
            action.payload
            return state

        case A.setPriority:
            action.payload
            return state

        case A.setUrgencyReason:
            action.payload
            return state

        case A.setStatus:
            action.payload
            return state
        default:
            return state
    }
}

export const errors = (state=[],action) => {
    switch (action.type) {
        case C.ADD_ERROR:
            return [
                ...state,
                action.payload
            ]
        case C.CLEAR_ERROR:
            return state.filter((message, i) => i !== action.payload)
        default:
            return state
    }
}

export const auditTeamCc = (state =[], action) => {

    switch (action.type) {

        case C.ADD_AUDIT_TEAM_CC:
            return [
                ...state,
                {
                    text:action.payload
                }
            ]

        case C.REMOVE_AUDIT_TEAM_CC:
            return state.map((user,index)=>{
                if(index === action.payload){
                    return Object.assign({},user,{
                        index:!action.payload
                    })
                }
            })
            default:
                return state
    }
    
}

export const comment = (state:any[]= [], action) => {
    switch (action.type) {
        case A.addComment:
            return[ 
                ...state,
                action.payload
            ]

        case A.editComment:
                             
            return [
            ...state
        ].filter(comment => comment.id !== action.payload.id)
        .concat(action.payload);
        
        case A.removeComment:
            return state.filter((note, i) => i !== action.payload)
        default:
            return state
    }
}

