import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import User from './users/index'

const Test = () => (
  <div>Test</div>
)

const Header = () => (
  <div className='container-fluid'>
    <div className='row'>
      <nav className='navbar navbar-default'>
        <div className='navbar-header'>
          <button type='button' className='navbar-toggle collapsed' data-toggle='collapse' data-target='#bs-example-navbar-collapse-1' aria-expanded='false'>
            <span className='sr-only'>Toggle navigation</span>
            <span className='icon-bar' />
            <span className='icon-bar' />
            <span className='icon-bar' />
          </button>
          {
          /*
          <Router>
            <Link className='navbar-brand' to='/'>Brand</Link>
          </Router>
          */
          }
          <a className='navbar-brand' href='https://ventus-phuongdk.c9users.io'>Home</a>
        </div>
        <Router>
          <div className='collapse navbar-collapse' id='bs-example-navbar-collapse-1'>
            <ul className='nav navbar-nav'>
              <li>
                <a className='nav-link' href='https://ventus-phuongdk.c9users.io/users'>User management</a>
              </li>
              {
              /*
              <li>
                <NavLink className='nav-link' activeStyle={{fontWeight: 'bold'}} activeClassName='active' to='/users'>User management</NavLink>
              </li>
              <li>
                <NavLink className="nav-link" activeStyle={{fontWeight: 'bold'}} activeClassName="active" to="/rooms">Room management</NavLink>
              </li>
              <li>
                <NavLink className="nav-link" activeStyle={{fontWeight: 'bold'}} activeClassName="active" to="/bookings">Book management</NavLink>
              </li>
              */
              }
            </ul>
          </div>
        </Router>
      </nav>
    </div>
  </div>
)

const Main = () => (
  <Router>
    <div className='container'>
      <div className='row'>
        <Route exact path='/' component={User} />
        <Route path='/users' component={User} />
        <Route path='/rooms' component={Test} />
        <Route path='/bookings' component={Test} />
      </div>
    </div>
  </Router>
)

export default class Home extends Component {
  render () {
    return (
      <div id='page'>
        <Header />
        <Main />
      </div>
    )
  }
}

if (document.getElementById('app')) {
  ReactDOM.render(<Home />, document.getElementById('app'))
}
