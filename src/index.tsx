import React from "react";
import * as ReactDOM from "react-dom";
import './index.scss';
import App from './App';
// import storeFactory from './store'
// import appInitialState from './store/appInitialState'
// import { addError } from './actions';
import { Provider } from 'react-redux';

// const initialState = (localStorage['redux-store']) ?
//   JSON.parse(localStorage['redux-store']) :
//   appInitialState

// const saveState = () =>
//   localStorage['redux-store'] = JSON.stringify(store.getState())


// const store = storeFactory(initialState)
// store.subscribe(saveState)

const rootElement = document.getElementById("root") as HTMLElement;
ReactDOM.render(
  <Provider store={null}>
      <div>
        <App />
      </div>
  </Provider>,
  rootElement
);

// render(

//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.getElementById('container')
// );

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();
