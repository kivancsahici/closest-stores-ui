import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

const Root = () => (
  
  <BrowserRouter>
   <App></App> 
  </BrowserRouter>

);

ReactDOM.render((
    <Root />
), document.getElementById('root'));
