import React, { Component } from 'react'
import DashboardContext from '../../contexts/DashboardContext'
import DashboardApiService from '../../services/dashboard-api-service'
import { Input, Button } from '../Utils/Utils'

export default class TaskForm extends Component {
  static contextType = DashboardContext

  static defaultProps = {
    onAddSuccess: () => {}
  }

  handleSubmit = ev => {
    ev.preventDefault()

    const { text, due_date, reward, xp } = ev.target

    DashboardApiService.postNewTask(
      text.value,
      due_date.value,
      reward.value,
      Number(xp.value)
    )
      .then(() => {
        DashboardApiService.getUserTasks()
          .then(this.context.setTaskList)
      })
      .then(() => {
        this.props.onAddSuccess()
        text.value = ''
        due_date.value = ''
        reward.value = ''
        xp.value = '10'
      })
      .catch(this.context.setError)
  }

  render() {
    return (
      <form className="AddTaskForm" onSubmit={this.handleSubmit}>
        <div className="text">
          <Input
            required
            aria-label="Enter Task Name"
            name="text"
            id="text"
            placeholder="New Task..."
          />
        </div>

        <div className="due_date">
          <Input
            type="date"
            aria-label="Pick a due date"
            name="due_date"
            id="due_date"
          />
        </div>

        <div className="reward">
          <Input
            aria-label="Specify a reward"
            name="reward"
            id="reward"
            placeholder="a guilt-free night out"
          />
        </div>

        <div className="xp">
          <label htmlFor="xp">XP</label>
          <select
            required
            aria-label="Choose appropriate xp value"
            name="xp"
            id="xp"
          >
            <option value="10">10 XP</option>
            <option value="25">25 XP</option>
            <option value="50">50 XP</option>
            <option value="75">75 XP</option>
            <option value="100">100 XP</option>
          </select>
        </div>
        
        <Button type="submit">Add Task</Button>
      </form>
    )
  }
}
