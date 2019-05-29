import React, { Component } from 'react'
import TaskListItem from '../../components/TaskListItem/TaskListItem'

import store from '../../dummy-store'

export default class TaskListPage extends Component {
  state = { hasError: false }

  renderTasks() {
    return store.map(task => <TaskListItem key={task.id} task={task} />)
  }

  render() {
    return (
      <>
        {this.renderTasks()}
      </>
    )
  }
}
