import C from '../constants'
import initialState  from '../initialState/index.json'
import { combineReducers } from 'redux';
import 'whatwg-fetch'

export const engagementTypes = (state, action) =>{
    switch(action.type){
    case C.SELECT_ENGAGEMENT_TYPE:
        return {
            ...state,
            dictionary:state.dictionary -1
        }
}
}

const byId = (
    state = initialState.engagementTypes.items,
    action
) => {
    switch (action.type) {
        case C.RECEIVE_ENGAGEMENT_TYPES:
            return {
                ...state,
                ...action.payload.reduce((obj, engagementType) => {
                    obj[engagementType.Id] = engagementType
                    return obj
                },{})
            }
        default:
        const { engagementTypeId } = action
        if (engagementTypeId){
            return {
                ...state,
                [engagementTypeId]: engagementTypes(state[engagementTypeId],action)
            }
        }
        return state
    }
}

const visibleIds = (state:any[]=[], action) => {
    switch(action.type){
        case C.RECEIVE_ENGAGEMENT_TYPES:
            return action.payload.map(engagementType => engagementType.Id)
        default:
            return state
    }
}

export default combineReducers({
    byId,
    visibleIds
})

export const getEngagementType = (state,Id) => state._byId[Id]

export const getVisibleEngagementTypes = state =>
    state._visibleIds.map(Id => getEngagementType(state,Id))














// export const selectedEngagementType = (state = initialState.engagementTypes.items[1], action) => {
//     switch (action.type) {
//         case C.SELECT_ENGAGEMENT_TYPE:
//             return action.payload
//         default:
//             return state
//     }
// }

// export const engagementTypes = (
//     state = initialState.engagementTypes,
//     action
// ) => {
//     switch (action.type) {
//         case C.INVALIDATE_ENGAGEMENT_TYPES:
//             return Object.assign({}, state, {
//                 didInvalidate: true
//             })
//         case C.REQUEST_ENGAGEMENT_TYPES:
//             return Object.assign({}, state, {
//                 isFetching: true,
//                 didInvalidate: false
//             })
//         case C.RECEIVE_ENGAGEMENT_TYPES:
//             return Object.assign({}, state, {
//                 isFetching: false,
//                 didInvalidate: false,
//                 items: action.payload,
//                 lastUpdated: action.receivedAt
//             })
//         default:
//             return state
//     }
// }

// export const engagementTypesByItem = (state = {}, action) => {
//     switch (action.type) {
//         case C.INVALIDATE_ENGAGEMENT_TYPES:
//         case C.RECEIVE_ENGAGEMENT_TYPES:
//         case C.REQUEST_ENGAGEMENT_TYPES:
//         return Object.assign({},state,{
//             [action.payload]: engagementTypes(
//                 state[action.payload],action)
//         })
//         default:
//             return state
//     }
// }

//mapping selected dictionary item id to dictionary item

