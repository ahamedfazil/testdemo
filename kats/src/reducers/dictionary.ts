import C from '../constants'
import initialState  from '../initialState/index.json'

export const selectedEngagementType = (state = initialState.engagementTypes.items[1], action) => {
    switch (action.type) {
        case C.SELECT_ENGAGEMENT_TYPE:
            return action.payload
        default:
            return state
    }
}

export const engagementTypes = (
    state = initialState.engagementTypes,
    action
) => {
    switch (action.type) {
        case C.INVALIDATE_ENGAGEMENT_TYPES:
            return Object.assign({}, state, {
                didInvalidate: true
            })
        case C.REQUEST_ENGAGEMENT_TYPES:
            return Object.assign({}, state, {
                isFetching: true,
                didInvalidate: false
            })
        case C.RECEIVE_ENGAGEMENT_TYPES:
            return Object.assign({}, state, {
                isFetching: false,
                didInvalidate: false,
                items: action.payload,
                lastUpdated: action.receivedAt
            })
        default:
            return state
    }
}

export const engagementTypesByItem = (state = {}, action) => {
    switch (action.type) {
        case C.INVALIDATE_ENGAGEMENT_TYPES:
        case C.RECEIVE_ENGAGEMENT_TYPES:
        case C.REQUEST_ENGAGEMENT_TYPES:
        return Object.assign({},state,{
            [action.payload]: engagementTypes(
                state[action.payload],action)
        })
        default:
            return state
    }
}

//mapping selected dictionary item id to dictionary item

export const _byId = (
    state = initialState.engagementTypes.items,
    action
) => {
    switch (action.type) {
        case C.RECEIVE_ENGAGEMENT_TYPES:
            return {
                ...state,
                ...action.payload.reduce((obj, engagementType) => {
                    obj[engagementType.id] = engagementType
                    return obj
                })
            }
    }
}

export const _visibleIds = (state:any[], action) => {
    switch(action.type){
        case C.RECEIVE_ENGAGEMENT_TYPES:
            return action.payload.map(engagementType => engagementType.id)
        default:
            return state
    }
}

export const _getEngagementType = (state,id) => state._byId[id]

export const _getVisibleEngagementTypes = state =>
    state._visibleIds.map(id => _getEngagementType(state,id))