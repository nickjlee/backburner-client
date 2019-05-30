import React, { Component } from 'react'

export default class LoginForm extends Component {
  static defaultProps = {
    onLoginSuccess: () => {}
  }

  state = {
    error: null
  }

  render() {
    const { error } = this.state
    
    return (
      <form className="LoginForm" onSubmit={console.log('Logged In')}>
        <div role="alert">
          {error && <p className="red">{error}</p>}
        </div>
        <div className="username">
          <label htmlFor="LoginForm_username">
            Username
          </label>
          <input type="text" name="username" id="LoginForm_username" required />
        </div>
        <div className="password">
          <label htmlFor="LoginForm_password">
            Password
          </label>
          <input type="password" name="password" id="LoginForm_password" required />
        </div>
        <button type="submit">Login</button>
      </form>
    )
  }
}
