import C from '../constants'
import initialState  from '../initialState/index.json'
import { combineReducers } from 'redux';
import 'whatwg-fetch'
import   { SELECT_ACCOUNTING_FRAMEWORK, RECEIVE_ACCOUNTING_FRAMEWORK } from '../actions/dictionaryItem';
import { DictionaryItem } from '../models/DictionaryItem';


// let dictionaryState : {
//     "Id":number,
//     "Title":string;
// } = {};

//Engagement Type

export const engagementTypes = (state, action) => {
    switch (action.type) {
        case C.SELECT_ENGAGEMENT_TYPE:
            return {
                ...state,
                dictionary: state.dictionary - 1
            }
    }
}

export const byEngagementTypeId = (
    state:DictionaryItem[] = [],
    action
) => {
    switch (action.type) {
        case C.RECEIVE_ENGAGEMENT_TYPES:
            state = initialState.engagementTypes;
            return {
                ...state,
                ...action.payload.reduce((obj, engagementType) => {
                    obj[engagementType.Id] = engagementType
                    return obj
                }, {})
            }


        default:
            const { engagementTypeId } = action
            if (engagementTypeId) {
                return {
                    ...state,
                    [engagementTypeId]: engagementTypes(state[engagementTypeId], action)
                }
            }
            return state
    }
}

export const visibleEngagementTypeIds = (state: any[] = [], action) => {
    switch (action.type) {
        case C.RECEIVE_ENGAGEMENT_TYPES:
            return action.payload.map(engagementType => engagementType.Id)
        default:
            return state
    }
}

export const getEngagementType = (state, Id) => state._byId[Id]

export const getVisibleEngagementTypes = state =>
    state.visibleIds.map(Id => getEngagementType(state, Id))

//----------------------------------------------------------------------//

//Accounting  Frameworks
export const accountingFrameworks = (state, action) => {
    switch (action.type) {
        case SELECT_ACCOUNTING_FRAMEWORK:
            return {
                ...state,
                dictionary: state.dictionary - 1
            }
    }
}

export const byAccountingFrameworkId = (
    state = initialState.accountingFrameworks,
    action
) => {
    switch (action.type) {
        case RECEIVE_ACCOUNTING_FRAMEWORK:

            return {
                ...state,
                ...action.payload.reduce((obj, accountingFramework) => {
                    obj[accountingFramework.Id] = accountingFramework
                    return obj
                }, {})
            }


        default:
            const { accountingFrameworkId } = action
            if (accountingFrameworkId) {
                return {
                    ...state,
                    [accountingFrameworkId]: accountingFrameworks(state[accountingFrameworkId], action)
                }
            }
            return state
    }
}

export const visibleAccountingFrameworkIds = (state: any[] = [], action) => {
    switch (action.type) {
        case RECEIVE_ACCOUNTING_FRAMEWORK:
            return action.payload.map(accountingFramework => accountingFramework.Id)
        default:
            return state
    }
}

export const getAccountingFramework = (state, Id) => state._byId[Id]

export const getVisibleAccountingFrameworks = state =>
    state.visibleAccountingFrameworkIds.map(Id => getAccountingFramework(state, Id))

//----------------------------------------------------------------------//









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

