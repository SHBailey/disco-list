import React from 'react'
import { connect } from 'react-redux'
import { openConnectionRequest, setForm, clearState } from './reduxActions'
import { StyleSheet, TextInput, View, Button } from 'react-native'

export class NewUserLogin extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      password: 'password',
      repeatPassword: 'repeatPassword',
      username: 'username',
    }
  }


  _updateFormState = (form) => {
    return (event) => {
      this.setState({[form]: event.target.value})
    }
  }

  _validateForm = (formData) => {
    switch (formData) {
        // username too short
      case username.length < 4:
        return { valid: false, error: 'Username must be at least 4 characters!'}
        // passwords don't match
      case formData.password !== formData.repeatPassword:
        return { valid: false, error: 'Passwords must match!' }
      case formData.password === formData.username:
        return { valid: false, error: 'Username cannot be the same as password'}
      default: return { valid: true, error: null }
    }
  }

  _submitForm = () => {
    if (this._validateForm(this.state).valid) this.createUser(this.state)




  }

  render () {
    return (
      <div className='flex flex-column items-center'>
        <div className='md-col-4'>
          <div className='m1 self-start h4'>Host Name</div>
          <input
            style={{width: '100%'}}
            className='p2 h4'
            onChange={this._updateFormState('host')}
            type='text'
          />
          <div className='m1 h4 self-start'>Port</div>
          <input
            onChange={this._updateFormState('port')}
            type='text'
            style={{width: '100%'}}
            className='p2 h4'
        />
          <div className='m1 h4 self-start'>Email</div>
          <input
            onChange={this._updateFormState('user')}
            type='user'
            style={{width: '100%'}}
            className='p2 h4'
        />
          <div className='m1 h4 self-start'>Password</div>
          <input
            onChange={this._updateFormState('password')}
            type='password'
            style={{width: '100%'}}
            className='p2 h4'
        />
          <div>
            <button
              className='mt2 btn-primary btn btn-big'
              onClick={() => this._submitForm()}
          >
            Connect
          </button>
          </div>
        </div>
        {
          this.props.fetching
         ? <div> Loading... </div>
        : null
        }
        {
          this.props.errorMsg
          ? <div className='h1 m2 red muted'>Unable to login</div>
          : null
        }
        {
          this.props.connection
          ? <Redirect to='/emails' push />
          : null
        }
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    fetching: state.fetching,
    errorMsg: state.errorMsg,
    port: state.port,
    user: state.user,
    password: state.password,
    host: state.host,
    connection: state.connection,
    emails: state.emails
  }
}

const mapDispatchToProps = dispatch => {
  return {
    requestConnection: credentials => {
      dispatch(openConnectionRequest(credentials))
    },
    setForm: newValue => dispatch(setForm(newValue)),
    clearState: () => dispatch(clearState())

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EmailForm)
