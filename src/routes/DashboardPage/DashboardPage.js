import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import DashboardContext from '../../contexts/DashboardContext'
import DashboardApiService from '../../services/dashboard-api-service'
import { Section } from '../../components/Utils/Utils';
import UserProfileBrief from '../../components/UserProfileBrief/UserProfileBrief'
import TaskList from '../../components/TaskList/TaskList'
import TokenService from '../../services/token-service'
import RewardsChest from '../../components/RewardsChest/RewardsChest';

export default class DashboardPage extends Component {
  static defaultProps = {
    match: { params: {} }
  }

  static contextType = DashboardContext

  componentDidMount() {
    this.context.clearError()
    const username = TokenService.getTokenPayload().sub
    
    DashboardApiService.getUserByUsername(username)
    .then(this.context.setUser)
    .then(() => {
      DashboardApiService.getUserTasks()
        .then(this.context.setTaskList)
      DashboardApiService.getUserRewards()
        .then(this.context.setRewardsChest)
      })
      .catch(this.context.setError)
  }
  
  renderTasks() {
    const { taskList = [] } = this.context
    
    return (
      <TaskList
        taskList={taskList}
        onComplete={this.handleClickComplete}
        onRemove={this.handleClickRemove}/>
    )
  }

  handleClickRemove = (task_id) => {
    DashboardApiService.deleteTask(task_id)
      .then(() => {
        DashboardApiService.getUserTasks()
          .then(this.context.setTaskList)
      })
      .catch(this.context.setError)
  }

  handleClickComplete = (task_id, reward, xp_gained) => {
    try {
      DashboardApiService.updateUserXp(Number(xp_gained))
        .then(this.context.setUser)

      DashboardApiService.deleteTask(task_id)
        .then(() => {
          DashboardApiService.getUserTasks()
            .then(this.context.setTaskList)
        })
        // .catch(this.context.setError)
  
      DashboardApiService.postReward(reward)
        .then(() => {
          DashboardApiService.getUserRewards()
            .then(this.context.setRewardsChest)
        })
        // .catch(this.context.setError)
    } catch(error) {
      this.context.setError(error)
    }
  }
  
  renderUserProfileBrief() {
    const { user, rewardsChest } = this.context
    
    return (
      <div className='user_profile_brief'>
        <UserProfileBrief user={user} />
        <RewardsChest rewardsChest={rewardsChest} />
      </div>
    )
  }
  
  render() {
    const { error } = this.context
    
    return (
      <>
        <Section className="UserProfileBrief">
          {error ? (
            <p className="red">
              There was an error retrieving User, please try again
            </p>
          ) : (
            this.renderUserProfileBrief()
          )}
        </Section>
        <Link to="/new-task">Add New Task</Link>
        <Section list className="TaskList">
          {error ? (
            <p className="red">
              There was an error retrieving Tasks, please try again
            </p>
          ) : (
            this.renderTasks()
          )}
        </Section>
      </>
    )
  }
}
