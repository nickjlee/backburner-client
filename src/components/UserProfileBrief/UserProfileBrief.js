import React, { Component } from 'react'

export default class UserProfileBrief extends Component {
  render() {
    const { user } = this.props

    return (
      <div className="user">
        <div className="user__username">{user.username}</div>
        <div className="user__badge">Level: {user.level}</div>
        <div className="user_member-since">EST: {user.date_joined}</div>
      </div>
    )
  }
}
