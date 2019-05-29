import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class TaskListItem extends Component {
  render() {
    const { task } = this.props

    return (
      <>
      {/* <Link to={'/'} className="TaskListItem"> */}
        <div className="TaskListItem__name">{task.text}</div>
        <div className="TaskListItem__reward">{task.reward}</div>
        <div className="TaskListItem__xp">{task.xp}</div>
        <button className="TaskListItem__edit">Edit</button>
        <button className="TaskListItem__delete">Delete</button>
      {/* </Link> */}
      </>
    )
  }
}
