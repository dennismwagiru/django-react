import React from 'react';
import {render} from 'react-dom';
import {Router, Route, browserHistory} from 'react-router';
import Login from './login';
import Setup from './setup';

function requireAuth(nextState, replace) {
    if (!localStorage.token) {
        replace({
            pathname: '/app/login/',
            state: {nextPathname: '/app/'}
        })
    }
}

render((
    <Router history={browserHistory}>
        <Route path={'/app/login/'} component={Login} />
        <Route path={'/app/setup/'} component={Setup} />
    </Router>),
    document.getElementById('app'));