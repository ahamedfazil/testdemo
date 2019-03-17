import React, { Component } from 'react';
import './App.css';
import storeFactory from './store'
import sampleData from './initialState/requestState.json';
import { addError,addEngagementType, addToKB, setSubject, setSubmitter } from './actions'
import requestSubmitterInfo, { fetchSubmitterInfo } from '../src/actions/submitter'
import { DictionaryService } from './services/DictionaryService';



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






store.dispatch(requestSubmitterInfo("larry.akin@kpmg.co.uk"))
//store.dispatch(fetchSubmitterInfo("larry.akin@kpmg.co.uk")).then(() => console.log(store.getState()))


let svc:DictionaryService = new DictionaryService;
let engagementType = JSON.stringify(svc.getAllEngagementTypes());
console.log(engagementType);




store.dispatch(
    addEngagementType({id:5,value:"EU FRA"}))
  
  store.dispatch(
    addError("Please try again later")
  )
  
  store.dispatch(
    addToKB(true)
  )
  
  store.dispatch(setSubject("The Life of Pi"))


// store.dispatch(
//   setSubmitter("larry.akin@kpmg.co.uk")
//   )



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

export default App;

