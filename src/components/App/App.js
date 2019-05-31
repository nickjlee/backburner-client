import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Header from '../Header/Header'
import './App.css'

import LandingPage from '../../routes/LandingPage/LandingPage'
import DashboardPage from '../../routes/DashboardPage/DashboardPage'
import LoginPage from '../../routes/LoginPage/LoginPage';

export default class App extends Component {
  state = { hasError: false }

  render() {
    return (
      <div className="App">
        <header className="App__header">
          <Header />
        </header>
        <main className="App__main">
          <div className="tasks">
            <Switch>
              <Route exact path={'/'} component={LandingPage} />
              <Route path={'/login'} component={LoginPage} />
              <Route path={'/:username/dash'} component={DashboardPage} />
            </Switch>
          </div>
        </main>
      </div>
    )
  }
}
