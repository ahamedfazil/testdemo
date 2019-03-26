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

export const ticketEngagementType = (
                state=initialState.allTickets["engagementType"], 
                action) => {
    switch (action.type){
        case C.REQUEST_ENGAGEMENT_TYPES:
            return state
        case C.FETCH_ENGAGEMENT_TYPES_FAILURE:
            return action.payload
        default:
            return {
                engagementType:addedEngagementTypeIds(state,action)
            }
    }
}

export default ticketEngagementType