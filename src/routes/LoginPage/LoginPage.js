import React, { Component } from 'react'
import { Section } from '../../components/Utils/Utils'
import LoginForm from '../../components/LoginForm/LoginForm'

export default class LoginPage extends Component {
  static defaultProps = {
    location: {},
    history: {
      push: () => {}
    }
  }

  handleLoginSuccess = (username) => {
    const { history } = this.props
    const destination = `/${username}/dash`
    history.push(destination)
  }
  
  render() {
    return (
      <Section className='LoginPage'>
        <h2>Login</h2>
        <LoginForm onLoginSuccess={this.handleLoginSuccess} />
      </Section>
    )
  }
}
