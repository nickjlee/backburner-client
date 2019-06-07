import React, { Component } from 'react'
import TaskListItem from '../TaskListItem/TaskListItem'
import './TaskList.css'

export default class TaskList extends Component {
  renderTasks() {
    const { taskList = [], onComplete, onRemove } = this.props

    return taskList.map(task => <TaskListItem key={task.id} task={task} onComplete={onComplete} onRemove={onRemove} />)
  }
  
  render() {
    return (
      <div className="tasklist-inner">
        {this.renderTasks()}
      </div>
    )
  }
}
