import * as A from '../actions';
import C from '../constants';
// import initialState from '../initialState/ticketState.json'
import initialState from '../initialState/index.json'

const { SHOW_ALL_FIELDS } = A.visibilityFilters

export const supportVisibilityFilter = (state = SHOW_ALL_FIELDS, action) => {
    switch (action.type) {
        case A.setVisibilityFilter:
            return action.filter
        default:
            return state
    }
}

export const supportFields = (state = initialState, action) => {
    switch (action.type) {

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

                ].filter(comment => comment !== action.payload.id)
                    .concat(action.payload)
            })

        case A.removeComment:
            return Object.assign({}, state, {

                allComments: [
                    ...state.supportTeamComments,

                ].filter((note, i) => i !== action.payload)
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