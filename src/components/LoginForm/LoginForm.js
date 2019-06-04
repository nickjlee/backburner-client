import React, { Component } from 'react'
import TokenService from '../../services/token-service'
import AuthService from '../../services/auth-api-service'
import { Input, Button } from '../Utils/Utils'

export default class LoginForm extends Component {
  static defaultProps = {
    onLoginSuccess: () => {}
  }

  state = {
    error: null
  }

  handleSubmitJwtAuth = ev => {
    ev.preventDefault()

    this.setState({ error: null })

    const { username, password } = ev.target

    AuthService.postLogin({
      username: username.value,
      password: password.value
    })
      .then(res => {
        TokenService.saveAuthToken(res.authToken)
        this.props.onLoginSuccess()
        username.value = ''
        password.value = ''
      })
      .catch(res => {
        this.setState({ error: res.error })
      })
  }

  render() {
    const { error } = this.state
    
    return (
      <form className="LoginForm" onSubmit={this.handleSubmitJwtAuth}>
        <div role="alert">
          {error && <p className="red">{error}</p>}
        </div>
        <div className="username">
          <label htmlFor="LoginForm_username">
            Username
          </label>
          <Input 
            required 
            name="username" 
            id="LoginForm_username">
          </Input>
        </div>
        <div className="password">
          <label htmlFor="LoginForm_password">
            Password
          </label>
          <Input 
            required 
            type="password" 
            name="password" 
            id="LoginForm_password">
          </Input>
        </div>
        <Button type="submit">
          Login
        </Button>
      </form>
    )
  }
}
