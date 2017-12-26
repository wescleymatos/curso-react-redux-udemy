import React from 'react';
import {Router, Route, Redirect, hashHistory} from 'react-router';

import Todo from '../todo/todo';
import About from '../about/about';

export default props => {
  return (
    <Router history={hashHistory}>
        <Route path='/about' component={About} />
        <Route path='/tarefas' component={Todo} />
        <Route path='*' component={Todo} />
    </Router>
  );
}
