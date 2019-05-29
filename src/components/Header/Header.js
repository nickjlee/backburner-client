import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    return (
      <>
        <nav className="header">
          <h1>BackBurner</h1>
        </nav>
        <span className="header__tagline--wide">Check. Level-Up</span>
        <div className="header__user-buttons">
          <p>Log In</p>
          <p>Register</p>
        </div>
      </>
    )
  }
}
