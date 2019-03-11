import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import appReducer from '../reducers'

// const store = createStore(combineReducers)

const consoleMessages = store =>next => action => {
    let result

    console.groupCollapsed(`dispatching action => ${action.type}`)
    console.log('Request', store.getstate().allQueries);
    result = next(action)


    let {allQueries,submitter, errors} = store.getstate()

    console.log(`
            Request info: ${allQueries.length}
            Submitter: ${submitter}
            errors: ${errors}
    `)

    console.groupEnd()

    return result
    
    
}

export default (intialState = {}) => {
    return applyMiddleware(thunk,consoleMessages)(createStore)(appReducer,intialState)
}