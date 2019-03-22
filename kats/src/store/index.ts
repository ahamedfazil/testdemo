import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import appReducer from '../reducers'
import Request from '../models/Request'
import { Ticket } from '../models/Ticket';

const consoleMessages = store => next => action => {
    
    let result

    console.groupCollapsed(`dispatching action => ${action.type}`)
    console.log('Request', store.getState().subject);
    result = next(action)

     
    let ticket:Ticket = store.getState()

    console.log(`
            Subject: ${ticket.subject}
            Engagement type: 
            errors: ${ticket.errors.length}
    `)

    console.groupEnd()

    return result


}

export default (intialState = {}) => {
    return applyMiddleware(thunk,consoleMessages)(createStore)(appReducer, 
        intialState)
}