import C from '../constants'
// import initialState from '../initialState/requestState.json'

// export const setSubmitter = (state:string="",action)=> {
//     switch (action.type) {
//         case C.SET_SUBMITTER:
//             return action.payload
//         default:
//             return state
//     }
// }

const userInfo = (state = {
    isFetching: false,
    didInvalidate: false,
    submitter: {}
},
    action
) => {
    switch (action.type) {

        case C.INVALIDATE_SUBMITTER:
            return Object.assign({}, state, {
                didInvalidate: true
            })

        case C.REQUEST_SUBMITTER_INFO:
            return Object.assign({}, state, {
                isFetching: true,
                didInvalidate: false
            })

        case C.RECEIVE_SUBMITTER_INFO:
            return Object.assign({}, state, {
                isFetching: false,
                didInvalidate: false,
                submiter: action.payload,

            })

        default:
            return state

    }
}

// export const infoBySubmitter = (state=initialState,action) => {
//     switch (action.type) {
//         case C.INVALIDATE_SUBMITTER:
//         case C.RECEIVE_SUBMITTER_INFO:
//         case C.REQUEST_SUBMITTER_INFO:
//             return Object.assign({}, state, {
//                 [action.payload]: userInfo(state[action.payload],action)
//             })
//         default:
//             return state
//     }
   
// }