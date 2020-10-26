import React from 'react';
import { History } from 'history';
import { Router, Switch, Route } from 'react-router-dom';
import { Home, About, Contact } from '../pages/';

interface IProps {
    history: History;
}

const Routes: React.FunctionComponent<IProps> = ({
    history,
}: IProps): JSX.Element => {
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
                {/* <Route
                    exact
                    path="/services"
                    render={({ history }: IProps) => (
                        <Services history={history} />
                    )}
                /> */}
                {/* <Route
                    exact
                    path="/team"
                    render={({ history }: IProps) => <Team history={history} />}
                /> */}
                {/* <Route
                    exact
                    path="/careers"
                    render={({ history }: IProps) => (
                        <Careers history={history} />
                    )}
                /> */}
                <Route
                    exact
                    path="/contact"
                    render={({ history }: IProps) => (
                        <Contact history={history} />
                    )}
                />
            </Switch>
        </Router>
    );
};

export default Routes;
