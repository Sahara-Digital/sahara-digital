import React from 'react';
import { History } from 'history';
import { Router, Switch, Route } from 'react-router-dom';
import { Home } from '../pages/home';
import { About } from '../pages/about/index';

interface IProps {
    history: History;
}

const Routes = ({ history }: IProps) => {
    return (
        <Router history={history}>
            <Switch>
                <Route
                    exact
                    path="/"
                    render={({ history }: IProps) => <Home history={history} />}
                />
                <Route
                    exact
                    path="/about"
                    render={({ history }: IProps) => (
                        <About history={history} />
                    )}
                />
            </Switch>
        </Router>
    );
};

export default Routes;
