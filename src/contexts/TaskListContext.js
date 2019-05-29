import React, { Component } from 'react'

const TaskListContext = React.createContext({
  taskList: [],
  error: null,
  setError: () => {},
  clearError: () => {},
  setTaskList: () => {}
})

export default TaskListContext

export class TaskListProvider extends Component {
  state = {
    taskList: [],
    error: null
  }

  setTaskList = taskList => {
    this.setState({ taskList })
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
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setTaskList: this.setTaskList
    }

    return (
      <TaskListContext.Provider value={value}>
        {this.props.children}
      </TaskListContext.Provider>
    )
  }
}
