import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import UsersList from '../../components/Users/UsersList';
import UserDetails from '../../components/Users/UserDetails';

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={UsersList} />
      <Route exact path="/users/:id" component={UserDetails} />
    </Switch>
  </Router>
);

export default App;
