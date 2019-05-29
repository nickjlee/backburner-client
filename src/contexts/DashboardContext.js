import React, { Component } from 'react'

const DashboardContext = React.createContext({
  taskList: [],
  user: {},
  error: null,
  setError: () => {},
  clearError: () => {},
  setTaskList: () => {},
  setUser: () => {}
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
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setTaskList: this.setTaskList,
      setUser: this.setUser
    }

    return (
      <DashboardContext.Provider value={value}>
        {this.props.children}
      </DashboardContext.Provider>
    )
  }
}
