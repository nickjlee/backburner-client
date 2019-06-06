import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import TokenService from '../../services/token-service'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFireAlt } from '@fortawesome/free-solid-svg-icons'
import './Header.css'
import DashboardContext from '../../contexts/DashboardContext';

export default class Header extends Component {
  static contextType = DashboardContext

  handleLogoutClick = () => {
    TokenService.clearAuthToken()
    this.context.clearUser()
  }

  renderLogoutLink() {
    return (
      <div className='Header__logged-in'>
        <Link
          to='/dash'>
          Dash
        </Link>
        <Link
          onClick={this.handleLogoutClick}
          to='/'>
          Logout
        </Link>
      </div>
    )
  }

  renderLoginLink() {
    return (
      <div className='Header__not-logged-in'>
        <Link
          to='/register'>
          Register
        </Link>
        <Link
          to='/login'>
          Login
        </Link>
      </div>
    )
  }

  render() {
    return <>
        <nav className='Header'>
          <h1>
            <Link to='/'>
              <FontAwesomeIcon className='red' icon={faFireAlt} />
              {' '}
              BackBurner
            </Link>
          </h1>
          <span className='Header__tagline--wide'>Organize Your Life.</span>
          {TokenService.hasAuthToken()
            ? this.renderLogoutLink()
            : this.renderLoginLink()
          }
        </nav>

        <span className='Header__tagline--narrow'>Organize Your Life.</span>
      </>
  }
}
