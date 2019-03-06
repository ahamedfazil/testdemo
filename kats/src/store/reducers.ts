import  constants from '../constants'

export const submitter = (state = "Christopher Dan", action) =>
    (action.type === constants.ADD_SUBMITTER) ? (action.payload) :
        state