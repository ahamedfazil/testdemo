import React, { Component } from 'react';
import './App.css';
import storeFactory from './store'
import sampleData from './initialState/requestState.json';
import { addError,addEngagementType, addToKB, setSubject, setSubmitter } from './actions'
import requestSubmitterInfo, { fetchSubmitterInfo } from '../src/actions/submitter'
import { Submitter } from './models/Submitter'
import { sp } from '@pnp/sp'
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



// async function get (userId:string):Promise<Submitter> {
  
//   const userInfo = new Submitter;

//   try {

//   sp
//   .profiles
//   .getPropertiesFor(userId).then((profile:any) => {
  
//       console.log(profile.DisplayName);
//       console.log(profile.Email);
//       console.log(profile.Title);
//       console.log(profile.UserProfileProperties.length);
      
     

//      userInfo.user.fullname = profile.DisplayName;
//      userInfo.user.id = profile.Username;
//      userInfo.jobTitle = profile.Title;
//      userInfo.department = profile.Department;
//      userInfo.office = profile.Office;

      

//       })}
//       catch (ex) {
//         console.log(ex);
        
//     }
//     return userInfo;
//       }      
// get("larry.akin@kpmg.co.uk")


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

