import React, { Component } from 'react'

const UserContext = React.createContext({
  user: {},
  error: null,
  loggedIn: false,
  setUser: () => {},
  getUsername: () => {},
  clearUser: () => {},
  setError: () => {},
  clearError: () => {}
})

export default UserContext

export class UserContextProvider extends Component {
  state = {
    user: {},
    error: null
  }

  setUser = user => {
    this.setState({ user, loggedIn: true })
  }

  getUsername = () => {
    return this.state.user.username
  }

  clearUser = () => {
    this.setState({ user: {}, loggedIn: false })
  }

  setError = error => {
    console.error(error)
    this.setState({ error })
  }

  clearError = () => {
    this.setState({ error: null })
  }

  render() {
    const value = {
      user: this.state.user,
      error: this.state.error,
      loggedIn: this.state.loggedIn,
      setUser: this.state.setUser,
      getUsername: this.state.getUsername,
      clearUser: this.state.clearUser,
      setError: this.state.setError,
      clearError: this.state.clearError
    }

    return (
      <UserContext.Provider value={value}>
        {this.props.children}
      </UserContext.Provider>
    )
  }
}
