import React from 'react';
import { History } from 'history';
import { Router, Switch, Route } from 'react-router-dom';
import { Home, About, Contact, NotFoundPage } from '../pages/';

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
                    path={process.env.PUBLIC_URL + '/'}
                    render={({ history }: IProps) => <Home history={history} />}
                />
                <Route
                    exact
                    path={process.env.PUBLIC_URL + '/about'}
                    render={({ history }: IProps) => (
                        <About history={history} />
                    )}
                />
                {/* <Route
                    exact
                    path={process.env.PUBLIC_URL + "/services"}
                    render={({ history }: IProps) => (
                        <Services history={history} />
                    )}
                /> */}
                {/* <Route
                    exact
                    path={process.env.PUBLIC_URL + "/team"}
                    render={({ history }: IProps) => <Team history={history} />}
                /> */}
                {/* <Route
                    exact
                    path={process.env.PUBLIC_URL + "/careers"}
                    render={({ history }: IProps) => (
                        <Careers history={history} />
                    )}
                /> */}
                <Route
                    exact
                    path={process.env.PUBLIC_URL + '/contact'}
                    render={({ history }: IProps) => (
                        <Contact history={history} />
                    )}
                />
                <Route
                    exact
                    path={process.env.PUBLIC_URL + '*'}
                    render={({ history }: IProps) => (
                        <NotFoundPage history={history} />
                    )}
                />
            </Switch>
        </Router>
    );
};

export default Routes;
