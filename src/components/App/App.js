import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Header from '../Header/Header'
import './App.css'

import TasksApiService from '../../services/tasks-api-service'
import DashboardPage from '../../routes/DashboardPage/DashboardPage';

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
          <div className="tasks">
            <DashboardPage />
          </div>

          {/* <div className="backend__test">
            {this.state.task}
          </div> */}
        </main>
      </div>
    )
  }
}
