import React, { Component } from 'react';
import './App.css';
import storeFactory from './store'
import sampleData from './initialState/requestState.json';
import { Provider } from 'react-redux'
import { addError,addEngagementType, addToKB, setSubject, setSubmitter } from './actions'
import requestSubmitterInfo, { fetchSubmitterInfo } from '../src/actions/submitter'
import { Submitter } from './models/Submitter'
import { sp } from '@pnp/sp'



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



function get (userId:string) {
  sp
  .profiles
  .getPropertiesFor(userId).then((profile:any) => {
  
      console.log(profile.DisplayName);
      console.log(profile.Email);
      console.log(profile.Title);
      console.log(profile.UserProfileProperties.length);
      
      let properties = new Submitter;

      properties.user.fullname = profile.DisplayName;
      properties.user.id = profile.Username;
      properties.jobTitle = profile.Title;
      properties.department = profile.Department;
      properties.office = profile.Office;

      })
      
      return new Submitter;
  }

get("larry.akin@kpmg.co.uk")


store.dispatch(requestSubmitterInfo("larry.akin@kpmg.co.uk"))
//store.dispatch(fetchSubmitterInfo("larry.akin@kpmg.co.uk")).then(() => console.log(store.getState()))

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

