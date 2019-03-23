import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import appReducer from '../reducers'
import { Ticket } from '../models/Ticket';
import * as Raven from 'raven-for-redux';

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

const crashReporter = store => next => action => {
    try {
      return next(action)
    } catch (err) {
      console.error('Caught an exception!', err)
      Raven.captureException(err, {
        extra: {
          action,
          state: store.getState()
        }
      })
      throw err
    }
  }

export default (intialState = {}) => {
    return applyMiddleware(thunk,consoleMessages,crashReporter)(createStore)(appReducer, 
        intialState)
}