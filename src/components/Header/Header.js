import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

export default class Header extends Component {
  render() {
    return (
      <>
        <nav className="Header">
          <h1>BackBurner</h1>
          <span className="Header__tagline--wide">Level Up Your Life</span>
          <div className="Header__user-buttons">
            <p>Log In</p>
            <p>Register</p>
          </div>
        </nav>
      </>
    )
  }
}
