import * as A from '../actions'
import initialState from '../initialState/requestState.json'


//TODO: Include user context i.e. support user or auditor in initial state reducer

const { SHOW_MY_SUBMITTED } = A.visibilityFilters

export const visibilityFilter = (state = SHOW_MY_SUBMITTED, action) => {
    switch (action.type) {
        case A.setVisibilityFilter:
            return action.filter
        default:
            return state
    }
}

export const request = (state = initialState, action) => {

    switch (action.type) {

        // case A.setSubmitter:
        // return Object.assign({}, state,{
        //     submitter: action.payload
        // })

        case A.setRespIndividual:
            return Object.assign({}, state, {
                respIndividual: action.payload
            })

        case A.setEngagementName:
            return Object.assign({}, state, {
                engagementName: action.payload
            })

        case A.setEngagementChargeCode:
            return Object.assign({}, state, {
                engagementChargeCode: action.payload
            })

        case A.setAccEndPeriod:
            return Object.assign({}, state, {
                periodEnd: action.payload
            })

        case A.setAuditStandard:
            return Object.assign({}, state, {
                auditingStandards: action.payload
            })

        case A.setCategory:
            return Object.assign({}, state, {
                category: action.payload
            })

        case A.setSubject:
            return Object.assign({}, state, {
                subject: action.payload
            })

        case A.setDetailedAnalysis:
            return Object.assign({}, state, {
                detailedAnalysis: action.payload
            })

        case A.setQuestion:
            return Object.assign({}, state, {
                question: action.payload
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

export const engagementType = (state = initialState, action) => {
    switch (action.type) {

        case A.addEngagementType:
            return Object.assign({}, state, {

                engagementType: [
                    ...state.engagementType,
                    action.payload
                ]

            })

        case A.removeEngagementType:
            return Object.assign({}, state, {
                engagementType: state.engagementType.filter((note, i) => i !== action.payload)
            })

        default:
            return state

    }
}

export const accFramework = (state = initialState, action) => {
    switch (action.type) {

        case A.addAccFramework:
            return Object.assign({}, state, {

                accountingFramework: [
                    ...state.accountingFramework,
                    action.payload
                ]

            })

        case A.removeAccFramework:
            return Object.assign({}, state, {
                accountingFramework: state.accountingFramework.filter((note, i) => i !== action.payload)
            })

        default:
            return state

    }
}

export const auditTeamCc = (state = initialState, action) => {

    switch (action.type) {

        case A.addAuditTeamCc:
            return Object.assign({}, state, {

                auditTeamCc: [
                    ...state.auditTeamCc,
                    action.payload
                ]

            })
        case A.removeAuditTeamCc:
            return Object.assign({}, state, {
                auditTeamCc: state.auditTeamCc.filter((note, i) => i !== action.payload)
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
                    ...state.allComments,
                    action.payload
                ]

            })

        case A.editComment:

            return Object.assign({}, state, {

                allComments: [
                    ...state.allComments,
                    
                ].filter(comment => comment.id !== action.payload.id)
                .concat(action.payload)
            })

        case A.removeComment:
            return Object.assign({}, state, {

                allComments: [
                    ...state.allComments,
                    
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

