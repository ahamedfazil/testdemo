import React, { Component } from 'react';
import './App.css';
import storeFactory from './store'
import { addSubmitter } from './actions';
import initialState from './initialState/queryState.json'
import appReducer from './reducers'
import { createStore } from 'redux'





class App extends Component {
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          
        </header>
      </div>
    );
  }
}

const store = createStore(appReducer)
console.log('initial state', store.getState());

 store.dispatch({
    type: addSubmitter,
    payload:{
      fullName: "Chris Evans",
      jobTitle: "Manager",
      department: "DPP - Audit Finance",
      office: "Canada Square",
      officeNumber: 3344,
      mobileNumber: 447596490012,
      otherNumber: 442087596490012
    }
  })

console.log('next state', store.getState());


// const initialState = (localStorage['redux-store']) ?
//   JSON.parse(localStorage['redux-store']) :
//   {}  

// const saveState = () => {
//   const state = JSON.stringify(store.getState())
//   localStorage['redux-store'] = state
// }

// const store = storeFactory(initialState)

// store.subscribe(saveState)


// store.dispatch({
//   type: addSubmitter,
//   payload:{
//     fullName: "Chris Evans",
//     jobTitle: "Manager",
//     department: "DPP - Audit Finance",
//     office: "Canada Square",
//     officeNumber: 3344,
//     mobileNumber: 447596490012,
//     otherNumber: 442087596490012
//   }
// })








export default App;
