import React, { Component } from 'react';
import '../src/assets/styles/App.css';
import '../src/assets/styles/NewTicket.css';
import storeFactory from './store'
import sampleData from './initialState/index.json';
import { addError, addToKB, setSubject, setSubmitter } from './actions'
import NewTicket from './components/ui/NewTicket';
import { Provider } from 'react-redux';
import { selectEngagementType, fetchEngagementTypes } from '../src/actions/dictionaryItem'
import { initializeIcons } from '@uifabric/icons';

initializeIcons('https://static2.sharepointonline.com/files/fabric/assets/icons/');



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



window.addEventListener("error", handleError)







// store.dispatch(requestSubmitterInfo("larry.akin@kpmg.co.uk"))
//store.dispatch(fetchSubmitterInfo("larry.akin@kpmg.co.uk")).then(() => console.log(store.getState()))






  
store.dispatch(
    addError("Please try again later")
  )
  
store.dispatch(
    addToKB(true)
  )
  
store.dispatch(setSubject("The Life of Pi"))

store.dispatch(selectEngagementType(1))
store.dispatch<any>(fetchEngagementTypes('engagementTypes')).then(
  () => console.log(store.getState()))


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

