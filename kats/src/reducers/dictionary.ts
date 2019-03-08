import {
    addEngagementType,
    removeEngagementType,
    addAccountFramework,
    removeAccountFramework,
    addCategory,
    changeCategory,
    setStatus,
    setPriority
} from '../actions';

export const dictionary = (state=[], action) => {
    switch (action.type) {

        case addEngagementType:
            return [
                ...state,
                action.payload
            ]

        case removeEngagementType:
            return state.filter(i => i !== action.payload)

        case addAccountFramework:
            return [
                ...state,
                action.payload
            ]

        case removeAccountFramework:
            return state.filter(i => i !== action.payload)

        case addCategory:
            return action.payload

        case changeCategory:
            return Object.assign({}, state, {
                category: !action.payload
            })

        case setPriority:
            return action.payload

        case setStatus:
            return action.payload

        default:
            return state

    }
}


export default dictionary


