import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import appReducer from '../reducers'



const consoleMessages = store => next => action => {
    let result

    console.groupCollapsed(`dispatching action => ${action.type}`)
    console.log('Request', store.getState().subject);
    result = next(action)


    let { subject, engagementType, errors } = store.getState()

    console.log(`
            Request info: ${subject}
            Engagement type: ${engagementType}
            errors: ${errors.length}
    `)

    console.groupEnd()

    return result


}

export default (intialState = {}) => {
    return applyMiddleware(thunk, consoleMessages)(createStore)(appReducer, intialState)
}