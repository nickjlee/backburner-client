import React, { Component } from 'react'
import DashboardContext from '../../contexts/DashboardContext'
import DashboardApiService from '../../services/dashboard-api-service'
import store from '../../dummy-store'
import UserProfileBrief from '../../components/UserProfileBrief/UserProfileBrief'
import TaskList from '../../components/TaskList/TaskList'

export default class DashboardPage extends Component {
  static defaultProps = {
    match: { params: {} }
  }

  static contextType = DashboardContext

  componentDidMount() {
    const { username } = this.props.match.params
    this.context.clearError()
    DashboardApiService.getUserByUsername(username)
      .then(this.context.setUser)
      .then( () => {
        DashboardApiService.getUserTasks(this.context.user.id)
          .then(this.context.setTaskList)
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
        <section className="TaskList">
          {error ? (
            <p className="red">There was an error retrieving Tasks, please try again</p>
          ) : (
            this.renderTasks()
          )}
        </section>
        <section className="UserProfileBrief">
          {error ? (
            <p className="red">There was an error retrieving User, please try again</p>
          ) : (
            this.renderUserProfileBrief()
          )}
        </section>
      </>
    )
  }
}
