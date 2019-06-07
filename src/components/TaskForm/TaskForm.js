import React, { Component } from 'react'
import DashboardContext from '../../contexts/DashboardContext'
import DashboardApiService from '../../services/dashboard-api-service'
import { Input, Button, Required, Select } from '../Utils/Utils'

export default class TaskForm extends Component {
  static contextType = DashboardContext

  static defaultProps = {
    onAddSuccess: () => {}
  }

  state = { error: null }

  handleSubmit = ev => {
    ev.preventDefault()

    const { task_name, due_date, reward, xp } = ev.target

    DashboardApiService.postNewTask(
      task_name.value,
      due_date.value,
      reward.value,
      Number(xp.value)
    )
      .then(() => {
        DashboardApiService.getUserTasks().then(this.context.setTaskList)
      })
      .then(() => {
        this.props.onAddSuccess()
        task_name.value = ''
        due_date.value = ''
        reward.value = ''
        xp.value = '10'
      })
      .catch(this.context.setError)
  }

  render() {
    const { error } = this.state

    return (
      <form className="AddTaskForm" onSubmit={this.handleSubmit}>
        <div role="alert">{error && <p className="red">{error}</p>}</div>
        <div className="task_name">
          <label htmlFor="task_name">
            Task Name <Required />
          </label>
          <Input
            required
            aria-label="Enter Task Name"
            name="task_name"
            id="task_name"
            placeholder="New Task..."
          />
        </div>

        <div className="due_date">
          <label htmlFor="due_date">
            Due Date <Required />
          </label>
          <Input
            type="date"
            aria-label="Pick a due date"
            name="due_date"
            id="due_date"
          />
        </div>

        <div className="reward">
          <label htmlFor="reward">
            Reward
          </label>
          <Input
            aria-label="Specify a reward"
            name="reward"
            id="reward"
            placeholder="Treat Yourself..."
          />
        </div>

        <div className="xp">
          <label htmlFor="xp">
            XP <Required />
          </label>
          <Select
            required
            aria-label="Choose appropriate xp value"
            name="xp"
            id="xp"
            children={<>
                <option value="10">10 XP</option>
                <option value="25">25 XP</option>
                <option value="50">50 XP</option>
                <option value="75">75 XP</option>
                <option value="100">100 XP</option>
              </>
            }
          />
        </div>

        <Button type="submit">Add Task</Button>
      </form>
    )
  }
}
