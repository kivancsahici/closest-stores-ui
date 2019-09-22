import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './App';
import HomePage from './HomePage';
import OtherComponent from './OtherComponent';

const Root = () => (
  <App>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/other/" component={OtherComponent} />
      </Switch>
    </BrowserRouter>
  </App>
);

ReactDOM.render((
    <Root />
), document.getElementById('root'));
