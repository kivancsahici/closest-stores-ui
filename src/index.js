import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Main from './App';
import HomePage from './HomePage';
import OtherComponent from './OtherComponent';

const Root = () => (
  <Main>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/other/" component={OtherComponent} />
      </Switch>
    </BrowserRouter>
  </Main>
);

ReactDOM.render((
    <Root />
), document.getElementById('root'));
