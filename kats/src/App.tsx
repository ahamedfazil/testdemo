import React, { Component } from 'react';
import './App.css';
import storeFactory from './store'
import sampleData from './initialState/requestState.json';
import { Provider } from 'react-redux'
import { addError,addEngagementType, addToKB } from './actions'


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

//window.React = React
// window.store = store

window.addEventListener("error", handleError)

// let state = initialState
// state = apppReducer(state,{
//   type:setSubject,
//   payload:"Hello"
// })

// store.dispatch(
//   addEngagementType({5,"EU FRA"}))

store.dispatch(
  addError(4)
)

store.dispatch(
  addToKB(true)
)


class App extends Component {
  
  render() {
    return (
      <Provider store ={store}>
      <div className="App">
        <header className="App-header">
          
        </header>
      </div>
      </Provider>
    );
  }
}

export default App;

