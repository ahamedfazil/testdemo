import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import appReducer from '../reducers'
import Request from '../models/Request'

var request = new Request();

const consoleMessages = store => next => action => {
    let result

    console.groupCollapsed(`dispatching action => ${action.type}`)
    console.log('Request', store.getState().subject);
    result = next(action)

     
    request = store.getState()

    console.log(`
            Subject: ${request.subject}
            Engagement type: ${request.engagementType}
            errors: ${request.errors.length}
    `)

    console.groupEnd()

    return result


}

export default (intialState = {}) => {
    return applyMiddleware(thunk, consoleMessages)(createStore)(appReducer, intialState)
}