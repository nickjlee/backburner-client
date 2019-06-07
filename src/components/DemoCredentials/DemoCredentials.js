import React, { Component } from 'react'
import './DemoCredentials.css'

export default class DemoCredentials extends Component {
  render() {
    return (
      <div className="DemoCredentials">
        <h4>Take a look at what the demo user has on their BackBurner</h4>
        <h5 className="DemoCredentials__username-wrapper">
          <span className="demo_username_label">Username:</span>
          {' '}
          <span className="demo_username">demo</span>
        </h5>
        <h5 className="DemoCredentials__password-wrapper">
          <span className="demo_password_label">Username:</span>
          {' '}
          <span className="demo_password">password</span>
        </h5>
      </div>
    )
  }
}
