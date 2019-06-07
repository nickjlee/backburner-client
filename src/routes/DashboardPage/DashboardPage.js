import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import DashboardContext from '../../contexts/DashboardContext'
import DashboardApiService from '../../services/dashboard-api-service'
import { Section } from '../../components/Utils/Utils'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretRight } from '@fortawesome/free-solid-svg-icons'
import UserProfileBrief from '../../components/UserProfileBrief/UserProfileBrief'
import TaskList from '../../components/TaskList/TaskList'
import TokenService from '../../services/token-service'
import RewardsChest from '../../components/RewardsChest/RewardsChest'
import './DashboardPage.css'

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
        DashboardApiService.getUserTasks().then(this.context.setTaskList)
        DashboardApiService.getUserRewards().then(this.context.setRewardsChest)
      })
      .catch(this.context.setError)
  }

  handleClickRemove = task_id => {
    DashboardApiService.deleteTask(task_id)
      .then(() => {
        DashboardApiService.getUserTasks().then(this.context.setTaskList)
      })
      .catch(this.context.setError)
  }

  handleClickComplete = (task_id, reward, xp_gained) => {
    try {
      DashboardApiService.updateUserXp(Number(xp_gained)).then(
        this.context.setUser
      )

      DashboardApiService.deleteTask(task_id).then(() => {
        DashboardApiService.getUserTasks().then(this.context.setTaskList)
      })
      // .catch(this.context.setError)

      if(reward !== '') {
        DashboardApiService.postReward(reward).then(() => {
          DashboardApiService.getUserRewards().then(this.context.setRewardsChest)
        })
      }
      // .catch(this.context.setError)
    } catch (error) {
      this.context.setError(error)
    }
  }

  handleClickClaim = reward_id => {
    DashboardApiService.claimReward(reward_id)
      .then(() => {
        DashboardApiService.getUserRewards().then(this.context.setRewardsChest)
      })
      .catch(this.context.setError)
  }

  renderUserProfileBrief() {
    const { user, rewardsChest } = this.context

    return (
      <>
        <UserProfileBrief user={user} />
        <RewardsChest
          rewardsChest={rewardsChest}
          onClaim={this.handleClickClaim}
        />
      </>
    )
  }

  renderTasks() {
    const { taskList = [] } = this.context

    return (
      <TaskList
        taskList={taskList}
        onComplete={this.handleClickComplete}
        onRemove={this.handleClickRemove}
      />
    )
  }

  render() {
    const { error } = this.context

    return (
      <div className='Dashboard'>
        <div className='UserProfileBrief__with-add-task'>
          <Section className="UserProfileBrief">
            {error ? (
              <p className="red">
                There was an error retrieving User, please try again
              </p>
            ) : (
              this.renderUserProfileBrief()
            )}
          </Section>
          <Section className="AddTask">
            <Link to='/new-task'>
              <h3 className="add-task-link">
                Add New Task
                {' '}
                <FontAwesomeIcon className='blue add-task-icon' icon={faCaretRight} />
              </h3>
            </Link>
          </Section>
        </div>
        <Section className="TaskList">
          {error ? (
            <p className="red">
              There was an error retrieving Tasks, please try again
            </p>
          ) : (
            this.renderTasks()
          )}
        </Section>
      </div>
    )
  }
}
