import React, { Component } from 'react'
import UserModel from './model'
import { BrowserRouter as Router, Link } from 'react-router-dom'

export default class UserCreate extends Component {
  constructor (props) {
    super(props)
    this.state = {
      message: null,
      status: null,
      name: '',
      email: '',
      password: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange (event) {
    const value = event.target.value
    const name = event.target.name
    this.setState({
      [name]: value
    })
  }

  handleSubmit (event) {
    UserModel.createUser({
      name: this.state.name,
      email: this.state.email,
      password: this.state.password
    }).then(results => {
      this.setState({
        message: results.data.message,
        status: results.data.status,
        name: '',
        email: '',
        password: ''
      })
    })
      .catch(error => console.log(error))
    event.preventDefault()
  }

  render () {
    return (
      <div className='user-wrapper'>
        {
          this.state.status === 'success' && this.state.message
            ? <div id='dusm' className={`alert alert-${this.state.status}`} role='alert'>
              <span className='glyphicon glyphicon-exclamation-sign' aria-hidden='true' />
              <span>{this.state.message}</span>
            </div>
            : null
        }
        {
          this.state.status === 'danger' && this.state.message
            ? <div id='dusm' className={`alert alert-${this.state.status}`} role='alert'>
              {
                <ul>
                  {this.state.message.name && <li>{this.state.message.name}</li>}
                  {this.state.message.email && <li>{this.state.message.email}</li>}
                  {this.state.message.password && <li>{this.state.message.password}</li>}
                </ul>
              }
            </div>
            : null
        }
        <h3 className='page-header mb-1'>Users Create</h3>
        <Router>
          <div className='mb-2'>
            <Link title='back to user page' to='/users' className='btn btn-primary'><i className='fa fa-arrow-left' /></Link>
          </div>
        </Router>

        <form onSubmit={this.handleSubmit}>
          <div className='form-group'>
            <label>Name</label>
            <input autoComplete type='text' className='form-control' name='name' placeholder='Enter name' onChange={this.handleChange} value={this.state.name} />
          </div>
          <div className='form-group'>
            <label>Email</label>
            <input autoComplete type='email' className='form-control' name='email' placeholder='Enter email' onChange={this.handleChange} value={this.state.email} />
          </div>
          <div className='form-group'>
            <label>Password</label>
            <input autoComplete type='password' className='form-control' name='password' placeholder='Enter password' onChange={this.handleChange} value={this.state.password} />
          </div>
          <button type='submit' className='btn btn-default'>Create user</button>
        </form>
      </div>
    )
  }
}
