import React, { Component } from 'react'
import TaskListItem from '../TaskListItem/TaskListItem'
import './TaskList.css'

export default class TaskList extends Component {
  renderTasks() {
    const { taskList = [] } = this.props

    return taskList.map(task => <TaskListItem key={task.id} task={task} />)
  }
  
  render() {
    return (
      <ul className="abc">
        {this.renderTasks()}
      </ul>
    )
  }
}
