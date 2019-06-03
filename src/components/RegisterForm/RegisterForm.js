import React, { Component } from 'react'
import { Button, Input, Required } from '../Utils/Utils'
import AuthApiService from '../../services/auth-api-service'

export default class RegisterForm extends Component {
  static defaultProps = {
    onRegisterSuccess: () => {}
  }

  state = { error: null }

  handleSubmit = ev => {
    ev.preventDefault()

    const { username, first_name, password } = ev.target

    const user = {
      username: username.value,
      first_name: first_name.value,
      password: password.value
    }

    AuthApiService.postUser(user)
      .then(user => {
        username.value = ''
        first_name.value = ''
        password.value = ''
        this.props.onRegisterSuccess()
      })
      .catch(res => {
        this.setState({ error: res.error })
      })
  }

  render() {
    const { error } = this.state

    return (
      <form className="RegistrationForm" onSubmit={this.handleSubmit}>
        <div role="alert">{error && <p className="red">{error}</p>}</div>
        <div className="first_name">
          <label htmlFor="RegistrationForm__first_name">
            First name <Required />
          </label>
          <Input
            name="first_name"
            type="text"
            required
            id="RegistrationForm__first_name"
          />
        </div>
        <div className="username">
          <label htmlFor="RegistrationForm__username">
            Username <Required />
          </label>
          <Input
            name="username"
            type="text"
            required
            id="RegistrationForm__username"
          />
        </div>
        <div className="password">
          <label htmlFor="RegistrationForm__password">
            Password <Required />
          </label>
          <Input
            name="password"
            type="password"
            required
            id="RegistrationForm__password"
          />
        </div>
        <Button type="submit">Register</Button>
      </form>
    )
  }
}
