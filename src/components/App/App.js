import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Header from '../Header/Header'
import './App.css'

import LandingPage from '../../routes/LandingPage/LandingPage'
import DashboardPage from '../../routes/DashboardPage/DashboardPage'
import LoginPage from '../../routes/LoginPage/LoginPage';
import PublicOnlyRoute from '../Utils/PublicOnlyRoute';
import PrivateRoute from '../Utils/PrivateRoute';

export default class App extends Component {
  state = { hasError: false }

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
            <PrivateRoute path={'/:username/dash'} component={DashboardPage} />
          </Switch>
        </main>
      </div>
    )
  }
}
