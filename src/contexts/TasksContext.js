import React, { Component } from 'react'

const TasksContext = React.createContext({
  taskList: [],
  error: null,
  setTaskList: () => {},
  clearTaskList: () => {},
  setError: () => {},
  clearError: () => {}
})

export default TasksContext

export class TasksContextProvider extends Component {
  state = {
    taskList: [],
    error: null
  }

  setTaskList = taskList => {
    this.setState({ taskList })
  }

  clearTaskList = () => {
    this.setState({ taskList: [] })
  }

  setError = error => {
    this.setState({ error })
  }

  clearError = () => {
    this.setState({ error: null })
  }

  render() {
    const value = {
      taskList: this.state.taskList,
      error: this.state.error,
      setTaskList: this.state.taskList,
      clearTaskList: this.state.clearTaskList,
      setError: this.state.setError,
      clearError: this.state.clearError
    }

    return (
      <TasksContext.Provider value={value}>
        {this.props.children}
      </TasksContext.Provider>
    )
  }
}
