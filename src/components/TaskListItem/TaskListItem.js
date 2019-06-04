import React, { Component } from 'react'
import './TaskListItem.css'
import { Button } from '../Utils/Utils';
export default class TaskListItem extends Component {
  render() {
    const { task } = this.props

    return (
      <li key={task.id} className="TaskListItem">
        <div className="TaskListItem__name">{task.text}</div>
        <div className="TaskListItem__due_date">Due: {task.due_date}</div>
        <div className="TaskListItem__reward">Reward: {task.reward}</div>
        <div className="TaskListItem__xp">XP: {task.xp}</div>
        <Button className="TaskListItem__edit">Complete</Button>
        <Button className="TaskListItem__delete">Remove</Button>
      </li>
    )
  }
}
