import React, { Component } from 'react'
import './TaskListItem.css'
import { NiceDate, Button } from '../Utils/Utils'
export default class TaskListItem extends Component {
  render() {
    const { task, onComplete, onRemove } = this.props

    return (
      <li key={task.id} className="TaskListItem">
        <div className="TaskListItem__name">{task.text}</div>
        <div className="TaskListItem__due_date">
          Due: {NiceDate({ date: task.due_date })}
        </div>
        <div className="TaskListItem__reward">Reward: {task.reward}</div>
        <div className="TaskListItem__xp">XP: {task.xp}</div>
        <Button 
          className="TaskListItem__edit"
          onClick={() => onComplete(task.id, task.reward, task.xp)}>
            Complete
        </Button>
        <Button 
          className="TaskListItem__delete"
          onClick={() => onRemove(task.id)}>
            Remove
        </Button>
      </li>
    )
  }
}
