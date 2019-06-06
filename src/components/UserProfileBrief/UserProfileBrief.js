import React, { Component } from 'react'
import { NiceDate } from '../Utils/Utils'
import './UserProfileBrief.css'

export default class UserProfileBrief extends Component {
  render() {
    const { user } = this.props

    return (
      <div className="user">
        <div>{user.xp}</div>
        <div className="user__username">{user.username}</div>
        <div className="user__badge">Level: {user.level}</div>
        <div className="user_member-since">Since: {NiceDate({date: user.date_joined, format: 'MMM YYYY'})}</div>
      </div>
    )
  }
}
