import {
    addEngagementType,
    removeEngagementType,
    addAccFramewk,
    removeAccFramewk
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

        case addAccFramewk:
            return [
                ...state,
                action.payload
            ]

        case removeAccFramewk:
            return state.filter(i => i !== action.payload)

        default:
            return state

    }
}


export default dictionary


