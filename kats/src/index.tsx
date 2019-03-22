import 'babel-polyfill'
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// import { createStore, applyMiddleware } from 'redux'
// import thunk from 'redux-thunk'
// import { createLogger } from 'redux-logger'
// import { Provider } from 'react-redux'
// import appReducer from '../src/reducers'



// const loggerMiddleware = createLogger()

// const middleware = [ thunk ]
// if (process.env.NODE_ENV !== 'production') {
//     middleware.push(loggerMiddleware)
// }

// const store = createStore(
//     appReducer,
//     applyMiddleware(...middleware)
// )




ReactDOM.render(
    
    <App />,
    
    document.getElementById('root')
    );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
