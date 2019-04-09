import * as A from '../actions';
import C from '../constants';



export const errors = (state = initialState.errors, action) => {
    switch (action.type) {
        case C.ADD_ERROR:
            return [
                ...state,
                action.payload
            ]

        // TODO: Refactor clear error
        case C.CLEAR_ERROR:

            return state.filter((message, i) => i !== action.payload)
        default:
            return state
    }
}



export const supportComments = (state = initialState.supportTeamComments, action) => {
    switch (action.type) {

        case C.ADD_COMMENT:
            return Object.assign({}, state, {

                supportTeamComments: [
                    ...state,
                    action.payload
                ]

            })

        case C.EDIT_COMMENT:

            return Object.assign({}, state, {
 
                supportTeamComments: [
                    ...state,

                ].filter(comment => comment !== action.payload.id)
                    .concat(action.payload)
            })

        case C.REMOVE_COMMENT:
            return Object.assign({}, state, {

                allComments: [
                    ...state,

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
        
        case C.CLEAR_SUGGESTIONS:
        
            return Object.assign({}, state, {
                suggestions: [
                    ...state.labelNames.suggestions].splice(0)
                    
            
            })

        case A.changeSuggestions:
            return action.payload

        default:
            return state
    }
}