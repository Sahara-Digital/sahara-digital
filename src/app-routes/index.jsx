import React from 'react';
import { Router, Switch } from 'react-router-dom';
import { createBrowserHistory } from "history";

const history = createBrowserHistory();

const Routes = (props) => {
    const {children} = props;
    return (
        <Router history={history}>     
        <Switch>
        {children}  
      </Switch>
      
    </Router>
    )
}


export default Routes;