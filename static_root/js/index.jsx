import React from 'react';
import {render} from 'react-dom';
import {Router, Route, browserHistory} from 'react-router';
import Home from './home';

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
        <Route path={'/app/'} component={Home} />

    </Router>),
    document.getElementById('app'));