import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import appReducer from '../reducers/RootReducer'
import * as Raven from 'raven-js';

const consoleMessages = store => next => action => {

  let result

  console.groupCollapsed(`dispatching action => ${action.type}`)
  console.log('Ticket state', store.getState());
  result = next(action)


  let _state = store.getState()

  console.log(`
            
            Tickets: ${_state.ticket.subject}
            
            
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
  return createStore(appReducer,
    intialState,
    compose(applyMiddleware(thunk, consoleMessages, crashReporter)))
}
