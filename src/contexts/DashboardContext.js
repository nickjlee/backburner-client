import React, { Component } from 'react'

const DashboardContext = React.createContext({
  taskList: [],
  user: {},
  error: null,
  setTaskList: () => {},
  setUser: () => {},
  clearUser: () => {},
  setError: () => {},
  clearError: () => {},
})

export default DashboardContext

export class DashboardProvider extends Component {
  state = {
    taskList: [],
    user: {},
    error: null
  }

  setTaskList = taskList => {
    this.setState({ taskList })
  }

  setUser = user => {
    this.setState({ user })
  }

  clearUser = () => {
    this.setState({ user: {} })
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
      taskList: this.state.taskList,
      user: this.state.user,
      setTaskList: this.setTaskList,
      setUser: this.setUser,
      clearUser: this.clearUser,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
    }

    return (
      <DashboardContext.Provider value={value}>
        {this.props.children}
      </DashboardContext.Provider>
    )
  }
}
