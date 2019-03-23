import C from '../constants'

export const selectedEngagementType = (state = 'engagementTypes', action) => {
    switch (action.type) {
        case C.SELECT_ENGAGEMENT_TYPE:
            return action.payload
        default:
            return state
    }
}

export const engagementTypes = (
    state = {
        "isFetching": false,
        "didInvalidate": false,
        "items": []
    },
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
            [action.payload]: engagementTypes(state[action.payload],action)
        })
        default:
            return state
    }
}

