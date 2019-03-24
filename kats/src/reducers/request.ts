import * as A from '../actions'
import C from '../constants';
// import initialState from '../initialState/requestState.json'
import initialState from '../initialState/index.json'


//TODO: Include user context i.e. support user or auditor in initial state reducer

const { SHOW_ALL_FIELDS } = A.visibilityFilters

export const visibilityFilter = (state = SHOW_ALL_FIELDS, action) => {
    switch (action.type) {
        case C.SET_VISIBILITY_FILTER:
            return action.filter
        default:
            return state
    }
}

export const ticket = (state = initialState, action) => {

    switch (action.type) {

        // case A.setSubmitter:
        // return Object.assign({}, state,{
        //     submitter: action.payload
        // })

        case C.SET_RESPONSIBLE_INDIVIDUAL:
            return Object.assign({}, state, {
                respIndividual: action.payload
            })

        case C.SET_ENGAGEMENT_NAME:
            return Object.assign({}, state, {
                engagementName: action.payload
            })

        case C.SET_ENGAGEMENT_CHARGE_CODE:
            return Object.assign({}, state, {
                engagementChargeCode: action.payload
            })

        case C.SET_ACCOUNTING_PERIOD_END:
            return Object.assign({}, state, {
                periodEnd: action.payload
            })

        // case A.setAuditStandard:
        //     return Object.assign({}, state, {
        //         auditingStandards: action.payload
        //     })

        // case A.setCategory:
        //     return Object.assign({}, state, {
        //         category: action.payload
        //     })

        case A.setSubject:
            return Object.assign({}, state, {
                subject: action.payload
            })

        case A.setDetailedAnalysis:
            return Object.assign({}, state, {
                detailedAnalysis: action.payload
            })

        case A.setPriority:
            return Object.assign({}, state, {
                isUrgent: action.payload
            })

        case A.setUrgencyReason:
            return Object.assign({}, state, {
                isUrgent: action.payload
            })

        default:
            return state
    }
}

// export const engagementType = (state = initialState, action) => {
//     switch (action.type) {

//         case A.selectEngagementType:
//             return Object.assign({}, state, {

//                 engagementType: [
//                     ...state.engagementType,
//                     action.payload
//                 ]

//             })

//         case A.removeEngagementType:
//             return Object.assign({}, state, {
//                 engagementType: state.engagementType.filter((note, i) => i !== action.payload)
//             })

//         default:
//             return state

//     }
// }

// export const accFramework = (state = initialState, action) => {
//     switch (action.type) {

//         case A.addAccFramework:
//             return Object.assign({}, state, {

//                 accountingFramework: [
//                     ...state.tickets[12].accountingFramework,
//                     action.payload
//                 ]

//             })

//         case A.removeAccFramework:
//             return Object.assign({}, state, {
//                 accountingFramework: state.tickets[12].accountingFramework.filter((note, i) => i !== action.payload)
//             })

//         default:
//             return state

//     }
// }

export const auditTeamCc = (state = initialState, action) => {

    switch (action.type) {

        case A.addAuditTeamCc:
            return Object.assign({}, state, {

                auditTeamCc: [
                    ...state.tickets[12].auditTeam,
                    action.payload
                ]

            })
        case A.removeAuditTeamCc:
            return Object.assign({}, state, {
                auditTeamCc: state.tickets[12].auditTeam.filter((note, i) => i !== action.payload)
            })


        default:
            return state
    }
}

export const comment = (state=initialState, action) => {
    switch (action.type) {
        case A.addComment:
            return Object.assign({}, state, {

                allComments: [
                    ...state.tickets[12].comments,
                    action.payload
                ]

            })

        case A.editComment:

            return Object.assign({}, state, {

                allComments: [
                    ...state.tickets[12].comments,
                    
                ].filter(comment => comment !== action.payload.id)
                .concat(action.payload)
            })

        case A.removeComment:
            return Object.assign({}, state, {

                allComments: [
                    ...state.tickets[12].comments,
                    
                ].filter((note, i) => i !== action.payload)
            })
        default:
            return state
    }
}

export const errors = (state: any[] = [], action) => {
    switch (action.type) {
        case A.addError:
            return [
                ...state,
                action.payload
            ]

        // TODO: Refactor clear error
        case A.clearError:

            return state.filter((message, i) => i !== action.payload)
        default:
            return state
    }
}

