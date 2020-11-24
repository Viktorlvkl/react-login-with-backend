import React from 'react'

import { Router, Switch, Route, Redirect } from 'react-router'

import Login from '../pages/login'
import Register from '../pages/register'
import Home from '../pages/home'
import NotFound from './NotFound'
import PrivateRoute from './PrivateRoute'

import { history } from '../history'

const Routes = () => (
    <Router history={history}>
        <Switch>
            <Route exact path="/">
                <Redirect to="/login" />
            </Route>
            <Route component={Register} exact path="/register" />
            <Route component={Login} exact path="/login" />
            <PrivateRoute component={Home} exact path="/home" />
            <PrivateRoute component={NotFound} />
        </Switch>
    </Router >
)

export default Routes
