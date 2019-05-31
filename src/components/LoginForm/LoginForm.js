import React, { Component } from 'react'
import { Input, Button } from '../../Utils/Utils';

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
