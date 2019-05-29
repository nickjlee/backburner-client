import React, { Component } from 'react'
import DashboardContext from '../../contexts/DashboardContext'
import TaskListItem from '../../components/TaskListItem/TaskListItem'

import store from '../../dummy-store'
import UserProfileBrief from '../../components/UserProfileBrief/UserProfileBrief';
import TaskList from '../../components/TaskList/TaskList';

export default class DashboardPage extends Component {
  static contextType = DashboardContext

  componentDidMount() {
    this.context.clearError()
    // api-service call here to get taskList
    this.context.setUser(store.users[0])
    this.context.setTaskList(store.tasks)
  }

  renderTasks() {
    const { taskList = [] } = this.context

    return <TaskList taskList={taskList} />
  }

  renderUserProfileBrief() {
    const { user } = this.context

    return <UserProfileBrief user={user}/>
  }

  render() {
    const { error } = this.context

    return (<>
      <section className="TaskList">
        {error
          ? <p className='red'>There was an error, please try again</p>
          : this.renderTasks()
        }
      </section>
      <section className="UserProfileBrief">
        {error
          ? <p className='red'>There was an error, please try again</p>
          : this.renderUserProfileBrief()
        }
      </section>
      </>
    )
  }
}
