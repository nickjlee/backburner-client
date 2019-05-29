import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Header from '../Header/Header'
import './App.css'

import store from '../../dummy-store'
import TaskListItem from '../TaskListItem/TaskListItem'
import TasksApiService from '../../services/tasks-api-service'
import TaskListPage from '../../routes/TaskListPage/TaskListPage';

export default class App extends Component {
  state = { task: null, hasError: false }

  componentDidMount() {
    TasksApiService.getTasks()
      .then(res => this.setState({task: res}))
      .catch()
  }

  render() {
    return (
      <div className="App">
        <header className="App__header">
          <Header />
        </header>
        <main className="App__main">
          <h1>Welcome to BackBurner</h1>
          <h2>Add your tasks...</h2>
          <h2>Check off as you do...</h2>
          <h2>Level-Up!!!</h2>

          <div className="tasks">
            <ul>
              <TaskListPage />
            </ul>
          </div>

          <div className="backend__test">
            {this.state.task}
          </div>
        </main>
      </div>
    )
  }
}
