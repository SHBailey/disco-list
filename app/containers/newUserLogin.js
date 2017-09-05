import React from 'react'
import { connect } from 'react-redux'
import { StyleSheet, TextInput, View, Button } from 'react-native'

export default class NewUserLogin extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      password: 'password',
      repeatPassword: 'repeatPassword',
      username: 'username',
      fetching: false
    }
  }


  _updateFormState = (form) => {
    return (event) => {
      this.setState({[form]: event.target.value})
    }
  }

  _createUser = (userData)=> {
    this.setState({ fetching: true })
    const fetchOptions = { method: 'POST', body: JSON.stringify(userData) }
    fetch('localhost:4000', fetchOptions )
      .then(response => response.json())
      .then(responseJson => {
        this.setState({fetching: false})
        return responseJson
        })
      .catch(err => {
        this.setState({fetching: false, error: err})
        console.error(err)
      })
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
    const userData = {
      password: this.state.password,
      repeatPassword: this.state.repeatPassword,
      username: this.state.username,
    }
   if (this._validateForm(userData).valid) this.createUser(userData)
  }

  render () {
    return (
      <View >
          <TextInput
            style={{width: '100%'}}
            onChange={this._updateFormState('password')}
            label='password'
            type='password'
          />
          <TextInput
            onChange={this._updateFormState('repeatPassword')}
            type='password'
            label='verify password'
        />
          <TextInput
            onChange={this._updateFormState('username')}
            type='user'
        />
        </View>
    )
  }
}
