import React, { Component } from 'react'
import UserModel from './model'
import { BrowserRouter as Router } from 'react-router-dom'
import { LoadingIndicator } from '../libs'

export default class UserShow extends Component {
  constructor (props) {
    super(props)
    this.state = {
      loading: false,
      message: null,
      status: null,
      name: '',
      email: '',
      password: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.goBack = this.goBack.bind(this)
  }

  componentDidMount () {
    this.getUser()
  }

  getUser () {
    const id = this.props.match.params.id
    UserModel.getUser(id).then(result => {
      this.setState({
        loading: false,
        name: result.data.name,
        email: result.data.email
      })
    }
    )
      .catch(error => console.log(error))
  }

  goBack () {
    window.history.back()
  }

  handleChange (event) {
    const value = event.target.value
    const name = event.target.name
    this.setState({
      [name]: value
    })
  }

  handleSubmit (event) {
    const id = this.props.match.params.id
    this.setState({loading: true})
    UserModel.updateUser(id, {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password
    }).then(results => {
      this.setState({
        loading: false,
        message: results.data.message,
        status: results.data.status,
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
          this.state.status === 'success' && this.state.message &&
            <div id='dusm' className={`alert alert-${this.state.status}`} role='alert'>
              <span className='glyphicon glyphicon-exclamation-sign' aria-hidden='true' />
              <span>{this.state.message}</span>
            </div>
        }
        {
          this.state.status === 'danger' && this.state.message &&
            <div id='dusm' className={`alert alert-${this.state.status}`} role='alert'>
              <ul>
                {this.state.message.name && <li>{this.state.message.name}</li>}
                {this.state.message.email && <li>{this.state.message.email}</li>}
                {this.state.message.password && <li>{this.state.message.password}</li>}
              </ul>
            </div>
        }
        <h3 className='page-header mb-1'>Users Detail</h3>
        <Router>
          <div className='mb-2'>
            {
            // <Link title='back to user page' to='/users' className='btn btn-primary'><i className='fa fa-arrow-left' /></Link>
            }
            <a className='btn btn-primary' onClick={this.goBack}><i className='fa fa-arrow-left' /></a>
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
          { this.state.loading
            ? <a className='btn btn-default' disabled href='#'><LoadingIndicator width={24} height={24} show={this.state.loading} /></a>
            : <button type='submit' className='btn btn-default'>Update user</button>
          }
        </form>
      </div>
    )
  }
}
