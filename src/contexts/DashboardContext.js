import React, { Component } from 'react'

const DashboardContext = React.createContext({
  taskList: [],
  user: {},
  rewardsChest: [],
  error: null,
  setTaskList: () => {},
  setUser: () => {},
  addReward: () => {},
  clearUser: () => {},
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
  
  addNewTask = newTask => {
    this.setTaskList([
      ...this.state.taskList,
      newTask
    ])
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

  addReward = reward => {
    this.setState([ reward, ...this.state.rewardsChest ])
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
      setTaskList: this.setTaskList,
      setUser: this.setUser,
      clearUser: this.clearUser,
      addReward: this.addReward,
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
