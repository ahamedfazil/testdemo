import { createStore, applyMiddleware } from 'redux'
import appReducer from '../reducers'

// const store = createStore(combineReducers)

const consoleMessages = store =>next => action => {
    let result

    console.groupCollapsed(`dispatching action => ${action.type}`)
    console.log('Query', store.getstate().allQueries);
    result = next(action)


    let {allQueries,submitter, errors} = store.getstate()

    console.log(`
            Query info: ${allQueries.length}
            Submitter: ${submitter}
            errors: ${errors}
    `)

    console.groupEnd()

    return result
    
    
}

export default (intialState = {}) => {
    return applyMiddleware(consoleMessages)(createStore)(appReducer,intialState)
}