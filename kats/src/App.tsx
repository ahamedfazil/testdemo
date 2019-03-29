import React, { Component } from 'react';
import '../src/assets/styles/App.css';
import '../src/assets/styles/NewTicket.css';
import storeFactory from './store'
import { addError } from './actions'
import { Provider } from 'react-redux';
//import { selectEngagementType, fetchEngagementTypes } from '../src/actions/dictionaryItem'
import { initializeIcons } from '@uifabric/icons';
import { addTicket } from './actions/ticket';
import { getEngagementTypes } from './actions/dictionaryItem';
import { GetUser } from './app/scripts/app'

// import * as SPScript from "spscript";
// require("isomorphic-fetch");




initializeIcons('https://static2.sharepointonline.com/files/fabric/assets/icons/');



const initialState = (localStorage['redux-store']) 
// ?
//   JSON.parse(localStorage['redux-store']) :
//   sampleData  

// const saveState = () => 
//   localStorage['redux-store'] = JSON.stringify(store.getState())

const handleError = error => {
  store.dispatch(addError(error.message))

} 

const store = storeFactory(initialState)
// store.subscribe(saveState)



window.addEventListener("error", handleError)


// store.dispatch(requestSubmitterInfo("larry.akin@kpmg.co.uk"))
//store.dispatch(fetchSubmitterInfo("larry.akin@kpmg.co.uk")).then(() => console.log(store.getState()))


// async function getSPList(siteUrl:string, listName: string) {

//   let ctx = SPScript.createContext(siteUrl);

//   let response = await ctx.lists(listName).getItems();
//   return response
// }

// let result = getSPList('https://sites.kpmg.co.uk/apps/katsdev/', "Engagement Type");

// console.log('the list items are ',result);

store.dispatch(addTicket({
  
    "id":1894435,
    "submitter": 26,
    "watcher": [
        2,
        3,
        19
    ],
    "respIndividual": 22,
    "assignee": 5,
    "reviewer": 6,
    "assignedTo": 5,
    "auditTeam": [
        9,
        10
    ],
    "engagementName": "Hartshead Square Developments Ltd ",
    "engagementChargeCode": 2551346,
    "periodEnd": "31/03/2019",
    "engagementType": [1,3],
    "auditingStandard": [1,2],
    "accountingFramework": [1],
    "category": 1,
    "topic": [2,3],
    "ticketType": 2,
    "subject": "Approval needed for Equinox Employee Benefit Trust Limited",
    "detailedAnalysis": "I have a group reporting under UK GAAP (top company Hartshead Square Developments Ltd). There are no SEC requirements and the charge code is 2494423. They are involved in investment property so properties clearly need to be carried at market value.",
    "isUrgent": true,
    "reasonForUrgency": "I need it done ASAP",
    "supportTeam": 1,
    "status": 1,
    "training": false,
    "faq": false,
    "label": [1,35,18],
    "finalConsultation": "Lorem ipsum...",
    "conclusion": "Lorem ipsum",
    "addToKb": true,
    "comments": [
        2,
        15,
        5,
        8
    ],
    "supportTeamComments": [
        1,
        18
    ]}
))
  
store.dispatch(
    addError("Please try again later")
  )

store.dispatch<any>(getEngagementTypes())


 


class App extends Component {

  
  
  render() {
    return (
      <Provider store={store}>
      <div className="App">
        <header className="App-header">
        <App/> 
        </header>
       
     </div>
     </Provider>
    );
  }
}

export default App;

