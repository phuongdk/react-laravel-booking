import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import UserList from './list'
import UserCreate from './create'
import UserShow from './show'

export default class User extends Component {
  render () {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path='/' component={UserList} />
            <Route exact path='/users' component={UserList} />
            <Route path='/users/create' component={UserCreate} />
            <Route path='/users/:id' component={UserShow} />
          </Switch>
        </div>
      </Router>
    )
  }
}
