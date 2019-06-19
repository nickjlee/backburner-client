import React, { Component } from 'react'
import TaskListItem from '../TaskListItem/TaskListItem'
import './TaskList.css'

export default class TaskList extends Component {
  renderTasks() {
    const { taskList = [], onComplete, onRemove } = this.props

    if(taskList.length === 0) {
      return (
        <div className='tasklist-no-tasks'>
          <h3>No tasks... YAY!</h3>
        </div>
      )
    }

    return taskList.map(task => 
      <TaskListItem
        key={task.id}
        task={task}
        onComplete={onComplete}
        onRemove={onRemove} 
      />
    )
  }
  
  render() {
    return (
      <div className="tasklist-inner">
        <h2 className='tasklist-title'>Tasks</h2>
        {this.renderTasks()}
      </div>
    )
  }
}
