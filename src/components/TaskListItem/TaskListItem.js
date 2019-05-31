import React, { Component } from 'react'
import './TaskListItem.css'
import { Button } from '../Utils/Utils';
export default class TaskListItem extends Component {
  render() {
    const { task } = this.props

    return (
      <li className="TaskListItem">
        <div className="TaskListItem__name">{task.text}</div>
        <div className="TaskListItem__due_date">{task.due_date}</div>
        <div className="TaskListItem__reward">{task.reward}</div>
        <div className="TaskListItem__xp">{task.xp}</div>
        <Button className="TaskListItem__edit">Edit</Button>
        <Button className="TaskListItem__delete">Delete</Button>
      </li>
    )
  }
}
