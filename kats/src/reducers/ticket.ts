import * as A from '../actions';
import C from '../constants';
import initialState from '../initialState/index.json'


const { SHOW_ALL_FIELDS } = A.visibilityFilters

export const supportVisibilityFilter = (state = SHOW_ALL_FIELDS, action) => {
    switch (action.type) {
        case C.SET_VISIBILITY_FILTER:
            return action.filter
        default:
            return state
    }
}


export const allTickets = (state= initialState.allTickets, action) => {

    switch (action.type) {

       case C.ADD_TICKET:
            return [
                    ...state,
                    action.payload
                ]
            

        case C.REMOVE_TICKET:
            return Object.assign({}, state, {
                allTickets: [
                    ...state, action.payload
                ].filter((id,i) => i !==action.payload)
               
            })

        case C.UPDATE_TICKET:
            return Object.assign({}, state, {
                allTickets: [
                    ...state,

                ].filter(id => id !== action.payload.id)
                    .concat(action.payload)
            })


        default:
            return state
    }
}




//TODO: check if current ticket has the engagement item before creating a new state



export const addedEngagementTypeIds = (
        state = initialState.allTickets["engagementType"],
        action) =>
        {
   switch (action.type){
       case C.SELECT_ENGAGEMENT_TYPE:
        if (state.indexOf(action.payload) !== -1){
            return state
        }
       return [
                ...state,action.payload]
        
        default:
           return state
   }
}

export const getAddedIds = (state=initialState.allTickets["engagementType"]) => 
        state.engagementType



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