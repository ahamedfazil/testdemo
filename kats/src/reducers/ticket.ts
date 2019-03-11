import * as A from '../actions';
import C from '../constants';
import initialState from '../initialState/ticketState.json'

const { SHOW_MY_SUBMITTED } = A.visibilityFilters

export const supportVisibilityFilter = (state = SHOW_MY_SUBMITTED, action) => {
    switch (action.type) {
        case A.setVisibilityFilter:
            return action.filter
        default:
            return state
    }
}

export const supportFields = (state = initialState, action) => {
    switch (action.type) {

        case A.assignSupportTeam:
            return Object.assign({}, state, {
                supportTeamAllocated: action.payload
            })

        case A.requireTraining:
            return Object.assign({}, state, {
                training: action.payload
            })

        case A.setFaq:
            return Object.assign({}, state, {
                faq: action.payload
            })

        case A.setAssignee:
            return Object.assign({}, state, {
                assignee: action.payload
            })

        case A.setReviewer:
            return Object.assign({}, state, {
                reviewer: action.payload
            })

        case A.addComment:
            return Object.assign({}, state, {

                allComments: [
                    ...state.supportTeamComments,
                    action.payload
                ]

            })

        case A.editComment:

            return Object.assign({}, state, {

                allComments: [
                    ...state.supportTeamComments,

                ].filter(comment => comment.id !== action.payload.id)
                    .concat(action.payload)
            })

        case A.removeComment:
            return Object.assign({}, state, {

                allComments: [
                    ...state.supportTeamComments,

                ].filter((note, i) => i !== action.payload)
            })

        case A.setConsultation:
            return Object.assign({}, state, {
                finalConsultation: action.payload

            })

        case A.setConculsion:
            return Object.assign({}, state, {
                conclusion: action.payload

            })

        case A.addToKB:
            return Object.assign({}, state, {
                addToKb: action.payload

            })

        default:
            return state
    }
}

export const fetching = (state = false, action) => {

    switch (action.type) {

        case C.FETCH_LABELS:
            return true

        case C.CANCEL_FETCHING:
            return false

        case C.CHANGE_SUGGESTIONS:
            return false

        default:
            return state
    }

}

export const suggestions = (state = initialState, action) => {

    switch (action.type) {
        
        case A.clearSuggestions:
        
            return Object.assign({}, state, {
                suggestions: [
                    ...state.labels.suggestions].splice(0)
                    
            
            })

        case A.changeSuggestions:
            return action.payload

        default:
            return state
    }
}