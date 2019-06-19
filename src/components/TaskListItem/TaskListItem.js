import React, { Component } from 'react'
import { NiceDate } from '../Utils/Utils'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle, faTimesCircle, faCalendarCheck, faAward } from '@fortawesome/free-solid-svg-icons'
import './TaskListItem.css'
export default class TaskListItem extends Component {
  render() {
    const { task, onComplete, onRemove } = this.props

    return (
      <div key={task.id} className='TaskListItem'>
        <div className='TaskListItem__task-stats'>
          <div className='TaskListItem__name'>{task.text}</div>
          <div className='TaskListItem__due_date'>
            <FontAwesomeIcon icon={faCalendarCheck} />
            {NiceDate({ date: task.due_date })}
          </div>
          <div className='TaskListItem__reward'>
            <FontAwesomeIcon icon={faAward} />
            {task.reward}
          </div>
          <div className='TaskListItem__xp'>
            <span className='TaskListItem__xp-label'>XP</span>
            <span className='TaskListItem__xp-value'>{task.xp}</span>
          </div>
        </div>
        <div className='TaskListItem__controls'>
          <FontAwesomeIcon
            icon={faCheckCircle}
            className='TaskListItem__complete'
            title='Complete!'
            onClick={() => onComplete(task.id, task.reward, task.xp)}
          />
          <FontAwesomeIcon
            icon={faTimesCircle}
            className='TaskListItem__remove'
            title='Remove..'
            onClick={() => onRemove(task.id)} 
          />
        </div>
      </div>
    )
  }
}
