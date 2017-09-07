// @flow
import React from 'react'
import { connect } from 'react-redux'
import { Text, ScrollView, StyleSheet, TextInput, View, Button } from 'react-native'

export default class NewUserLogin extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      password: 'password',
      repeatPassword: 'repeatPassword',
      username: 'username',
      fetching: false,
      error: null,
    }
  }


  _updateFormState = (form) => {
    return (event) => {
      this.setState({[form]: event.target.value})
    }
  }

  _createUser = (userData) => {
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
      case formData.username.length < 4:
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
      <ScrollView style={{padding: 20}}>
          <TextInput
            style={{width: '100%'}}
            placeholder='password'
            onChange={this._updateFormState('password')}
            secureTextEntry={true}
            autoCorrect={false}
          />
          <TextInput
            onChange={this._updateFormState('repeatPassword')}
            secureTextEntry={true}
            autoCorrect={false}
            placeholder='verify password'
          />
          <TextInput
            onChange={this._updateFormState('username')}
            autoCorrect={false}
            placeholder='username'
          />
          <Button onPress={this._submitForm} title='Create New Account'>
          </Button>
          {this.state.error && <Text>{this.state.error}</Text>}
        </ScrollView>
    )
  }
}
