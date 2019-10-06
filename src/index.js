import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import * as Redux from 'redux';
import * as ReactRedux from 'react-redux';
import App from './App';

const defaultStores = [
  {
    addressName: 'Jumbo Eindhoven Boschdijk',
    locationType: 'PuP'
  },
  {
    addressName: 'Jumbo Eindhoven Geldropseweg',
    locationType: 'PuP'
  },
  {
    addressName: 'Jumbo Eindhoven Kastelenplein',
    locationType: 'PuP'
  }
];

function reducer(state = {stores : defaultStores, highlight: ''}, action) {
  switch(action.type) {
    case 'FIND_STORES':
      return state;
    default:
      return state;  
  }
}

let store = Redux.createStore(reducer,  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
<BrowserRouter>
  <ReactRedux.Provider store={store}>
    <App/>
  </ReactRedux.Provider>
</BrowserRouter>, document.getElementById('root'));

