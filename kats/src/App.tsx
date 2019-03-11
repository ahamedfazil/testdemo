import React, { Component } from 'react';
import './App.css';
import storeFactory from './store'
import sampleData from './initialState/requestState.json';
import { Provider } from 'react-redux'
import { addError } from './actions'


const initialState = (localStorage['redux-store']) ?
  JSON.parse(localStorage['redux-store']) :
  sampleData  

const saveState = () => 
  localStorage['redux-store'] = JSON.stringify(store.getState())

const handleError = error => {
  store.dispatch(addError(error.message))

} 

const store = storeFactory(initialState)
store.subscribe(saveState)

// window.React = React
// window.store = store

window.addEventListener("error", handleError)


class App extends Component {
  
  render() {
    return (
      <Provider>
      <div className="App">
        <header className="App-header">
          
        </header>
      </div>
      </Provider>
    );
  }
}

export default App;

