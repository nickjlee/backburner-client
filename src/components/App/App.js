import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Header from '../Header/Header'
import './App.css'

import LandingPage from '../../routes/LandingPage/LandingPage'
import DashboardPage from '../../routes/DashboardPage/DashboardPage'
import LoginPage from '../../routes/LoginPage/LoginPage';
import RegisterPage from '../../routes/RegisterPage/RegisterPage'
import PublicOnlyRoute from '../Utils/PublicOnlyRoute';
import PrivateRoute from '../Utils/PrivateRoute';
import NotFoundPage from '../../routes/NotFoundPage/NotFoundPage';
import TaskForm from '../TaskForm/TaskForm';

export default class App extends Component {
  state = { hasError: false }

  static getDerivedStateFromError(error) {
    console.error(error)
    return { hasError: true }
  }

  render() {
    return (
      <div className="App">
        <header className="App__header">
          <Header />
        </header>
        <main className="App__main">
          {this.state.hasError && <p className='red'>There was an error! Oh no!</p>}
          <Switch>
            <Route exact path={'/'} component={LandingPage} />
            <PublicOnlyRoute path={'/login'} component={LoginPage} />
            <PublicOnlyRoute path={'/register'} component={RegisterPage} />
            <PrivateRoute path={'/dash'} component={DashboardPage} />
            <PrivateRoute path={'/new-task'} component={TaskForm} />
            <Route component={NotFoundPage} />
          </Switch>
        </main>
      </div>
    )
  }
}
