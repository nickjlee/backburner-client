import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import DashboardContext from '../../contexts/DashboardContext'
import DashboardApiService from '../../services/dashboard-api-service'
import { Section } from '../../components/Utils/Utils';
import UserProfileBrief from '../../components/UserProfileBrief/UserProfileBrief'
import TaskList from '../../components/TaskList/TaskList'
import TokenService from '../../services/token-service'

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
      if(username !== this.context.user.username) {
        this.context.setError('You are authorized for this page')
      } else {
        DashboardApiService.getUserTasks(this.context.user.id)
            .then(this.context.setTaskList)
      }
      })
      .catch(this.context.setError)
  }
  
  renderTasks() {
    const { taskList = [] } = this.context
    
    return <TaskList taskList={taskList} />
  }
  
  renderUserProfileBrief() {
    const { user } = this.context
    
    return <UserProfileBrief user={user} />
  }
  
  render() {
    const { error } = this.context
    
    return (
      <>
        <Section className="UserProfileBrief">
          {error ? (
            <p className="red">There was an error retrieving User, please try again</p>
          ) : (
            this.renderUserProfileBrief()
          )}
        </Section>
        <Link to="/new-task">Add New Task</Link>
        <Section list className="TaskList">
          {error ? (
            <p className="red">There was an error retrieving Tasks, please try again</p>
          ) : (
            this.renderTasks()
          )}
        </Section>
      </>
    )
  }
}
