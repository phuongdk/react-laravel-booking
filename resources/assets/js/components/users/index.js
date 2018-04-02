import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, NavLink, Switch } from 'react-router-dom';
import UserList from './list';
import UserCreate from './create';
import UserShow from './show';

export default class User extends Component {
    render() {
        return (
        <Router>
            <div>
                <Switch>

                    <Route exact path="/users" component={UserList} />
                    <Route exact path="/users/create" component={UserCreate} />
                    <Route path="/users/:id" component={UserShow} />
                </Switch>    
            </div>
        </Router>
        );
    }
}