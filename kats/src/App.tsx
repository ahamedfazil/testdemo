import React, { Component } from 'react';
import './App.css';
import storeFactory from './store'
import C from './constants';
import initialState from './initialState/queryState.json'
import appReducer from './reducers'
import { createStore } from 'redux'
import { addEngagementType, removeEngagementType, addComment, setCategory, setStatus, removeComment, editComment } from './actions';





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
    type:C.ADD_ERROR,
    payload: "Server not found"
    
  })
  store.dispatch({
    type:setCategory,
    payload: 1
  })

  store.dispatch({
    type:setStatus,
    payload: 2
  })
  store.dispatch({
    type:addEngagementType,
    payload: 1
  })
  store.dispatch({
    type:addEngagementType,
    payload: 2
  })

  store.dispatch({
    type:addEngagementType,
    payload: 3
  })

  store.dispatch({
    type:removeEngagementType,
    payload: 2
  })

store.dispatch({
  type:C.ADD_AUDIT_TEAM_CC,
  payload: "Theresa May"
})

store.dispatch({
  type:C.ADD_AUDIT_TEAM_CC,
  payload: 5
})


store.dispatch({
  type:C.REMOVE_AUDIT_TEAM_CC,
  payload: 5
})



  store.dispatch({
    type:C.ADD_QUERY,
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
    payload: {
      "note": "Where are we with the responses?",
      "owner": "Neil Manning",
      "date": "15-04-2017"
    }
    })

  store.dispatch({
    type:addComment,
    payload: {
      "note": "I love Fridays",
      "owner": "Lazza",
      "date": "20-05-2019"
    }
    })

    store.dispatch({
      type:removeComment,
      payload: 1
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
