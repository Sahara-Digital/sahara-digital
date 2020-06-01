import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import { createBrowserHistory } from "history";
import AppContent from '../app-content';
import { About, Contact, Events } from '../components/pages';

const history = createBrowserHistory();

const Routes = () => {
    return (
        <Router history={history}>     
        <Switch>
        <Route exact path="/" component={AppContent} /> 
        <Route exact path="/about" component={About} /> 
        <Route exact path="/contact" component={Contact} /> 
        <Route exact path="/events" component={Events} /> 
      </Switch>
      
    </Router>
    )
}


export default Routes;