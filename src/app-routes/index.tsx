import React from "react";
import { History } from "history";
import { Router, Switch, Route } from "react-router-dom";
import { Home } from "../pages/home";

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
                    component={({ history }: IProps) => (
                        <Home history={history} />
                    )}
                />
            </Switch>
        </Router>
    );
};

export default Routes;
