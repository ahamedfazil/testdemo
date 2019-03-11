import React, { Component } from 'react';
import './App.css';
import storeFactory from './store'
import initialState from './initialState/requestState.json'
import appReducer from './reducers'
import { createStore } from 'redux'
import { setRespIndividual, setEngagementName, addAuditTeamCc, removeAuditTeamCc } from './actions';






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

//  store.dispatch({
//     type: C.SET_SUBMITTER,
//     payload:{
//       fullName: "Chris Evans",
//       jobTitle: "Manager",
//       department: "DPP - Audit Finance",
//       office: "Canada Square",
//       officeNumber: 3344,
//       mobileNumber: 447596490012,
//       otherNumber: 442087596490012
//     }
//   })

  
  store.dispatch({
    type:setRespIndividual,
    payload: "Coral James"
    
  })

  store.dispatch({
    type:setEngagementName,
    payload: "Life of Pi"
  })

  store.dispatch({
    type:addAuditTeamCc,
    payload: {
      "id": 32,
      "fullName": "Larry Akin-Olamiti"
    }
  })

  store.dispatch({
    type: removeAuditTeamCc,
    payload:2
  })

  // store.dispatch({
  //   type:C.ADD_QUERY,
  //   payload:{
  //     id:1234,
  //   submitter: "laza ",
  //   auditTeamCc: "UKTP",
  //   respIndividual: "Me",
  //   engagementName: "Read",
  //   engagementChargeCode:5,
  //   periodEnd:"20/3/2109",
  //   engagementType:4,
  //   auditStandardsId:12,
  //   accountFramework: "Minecraft",
  //   categoryId:2,
  //   ticketTypeId: 6,
  //   subject:"Pfizer chief wants to run..",
  //   detailedAnalysis:"Blah blah",
  //   question: "People can have a look",
  //   priorityId: 10,
  //   reasonForUrgency:"I want it now",
  //   watcher: "Michelle Banrnier",
  //   status:"not done",
  //   commentsId: 5
  //   }
  // })

  

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
