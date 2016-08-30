import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import HomePage from './containers/home.page';


// <Route path="/counter" component={CounterPage} />
export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
  </Route>
);
