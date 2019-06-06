import React, { Component } from 'react'

const DashboardContext = React.createContext({
  taskList: [],
  user: {},
  rewardsChest: [],
  error: null,
  setTaskList: () => {},
  setUser: () => {},
  updateUserXp: () => {},
  clearUser: () => {},
  setRewardsChest: () => {},
  setError: () => {},
  clearError: () => {},
})

export default DashboardContext

export class DashboardProvider extends Component {
  state = {
    taskList: [],
    user: {},
    rewardsChest: [],
    error: null
  }

  setTaskList = taskList => {
    this.setState({ taskList })
  }

  setUser = user => {
    this.setState({ user })
  }

  updateUser = user => {
    this.setState({ user })
  }
  
  clearUser = () => {
    this.setState({ user: {} })
  }

  setRewardsChest = rewardsChest => {
    this.setState({ rewardsChest })
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
      rewardsChest: this.state.rewardsChest,
      error: this.state.error,
      setTaskList: this.setTaskList,
      setUser: this.setUser,
      updateUserXp: this.updateUserXp,
      clearUser: this.clearUser,
      setRewardsChest: this.setRewardsChest,
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
