import React, { Component } from 'react';
import './App.css';
import storeFactory from './store'
import { addSubmitter, addQuery, addError, addAuditingStandards, addCategory, setStatus, removeQuery, addComment } from './actions';
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

store.subscribe(() =>console.log(store.getState()))

//console.log('initial state', store.getState());

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

  store.dispatch({
    type:addError,
    payload: "Server not found"
    
  })
  store.dispatch({
    type:addCategory,
    payload: "Materiality"
  })

  store.dispatch({
    type:setStatus,
    payload: "unassigned"
  })

  store.dispatch({
    type:addQuery,
    payload:{
      id:1234,
    submitter: "laza ",
    auditTeamCc: "UKTP",
    respIndividual: "Me",
    engagementName: "Read",
    engagementChargeCode:5,
    periodEnd:"20/3/2109",
    engagementType:4,
    auditStandardsId:12,
    accountFramework: "Minecraft",
    categoryId:2,
    ticketTypeId: 6,
    subject:"Pfizer chief wants to run..",
    detailedAnalysis:"Blah blah",
    question: "People can have a look",
    priorityId: 10,
    reasonForUrgency:"I want it now",
    watcher: "Michelle Banrnier",
    status:"not done",
    commentsId: 5
    }
  })

  store.dispatch({
    type:addComment,
    payload:{
      note: "I love Fridays"
      
    }
    })

//console.log('next state', store.getState());


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
