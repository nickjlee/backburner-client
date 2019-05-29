import React, { Component } from 'react'
import TaskListContext from '../../contexts/TaskListContext'
import TaskListItem from '../../components/TaskListItem/TaskListItem'

import store from '../../dummy-store'

export default class TaskListPage extends Component {
  static contextType = TaskListContext

  componentDidMount() {
    this.context.clearError()
    // api-service call here to get taskList
    this.context.setTaskList(store)
  }

  renderTasks() {
    const { taskList = [] } = this.context

    return taskList.map(task => <TaskListItem key={task.id} task={task} />)
  }

  render() {
    const { error } = this.context

    return (
      <section className="TaskListPage">
        {error
          ? <p className='red'>There was an error, please try again</p>
          : this.renderTasks()
        }
      </section>
    )
  }
}
