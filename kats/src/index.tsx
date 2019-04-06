import 'babel-polyfill'
require("isomorphic-fetch");
import React from 'react';
import { render } from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import storeFactory from './store'
import appInitialState from './store/appInitialState'
import { addError } from './actions';
import { Provider } from 'react-redux';

const initialState = (localStorage['redux-store']) ?
  JSON.parse(localStorage['redux-store']) :
  appInitialState  

const saveState = () => 
  localStorage['redux-store'] = JSON.stringify(store.getState())


const store = storeFactory(initialState)
store.subscribe(saveState)


const handleError = error => {
    store.dispatch(addError(error.message))
  
  } 

  window.addEventListener("error", handleError)


render(
    
    <Provider store={store}>
    <App />
    </Provider>,
    document.getElementById('container')
    );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
