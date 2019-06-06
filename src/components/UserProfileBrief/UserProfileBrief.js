import React, { Component } from 'react'
import { NiceDate } from '../Utils/Utils'
import tempGauge from '../../images/xp-bar-placeholder.png'
import './UserProfileBrief.css'

export default class UserProfileBrief extends Component {
  render() {
    const { user } = this.props

    return (
      <div className="user__profile-brief">
        <img className='user__xp-gauge' src={tempGauge} alt='temp'/>
        <div className='user__stats'>
          <h3 className="user__username">{user.username}</h3>
          <h3 className='user__xp'>XP: {user.xp} / {user.xp_to_next_level}</h3>
          <h3 className="user__badge">Level: {user.level}</h3>
          <h3 className="user_member-since">Since: {NiceDate({date: user.date_joined, format: 'MMM YYYY'})}</h3>
        </div>
      </div>
    )
  }
}
