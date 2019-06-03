import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { DashboardProvider } from './contexts/DashboardContext'
import { UserProvider } from './contexts/UserContext'
import { TasksProvider } from './contexts/TasksContext'
import App from './components/App/App'
import './index.css'

ReactDOM.render(
  <BrowserRouter>
    <DashboardProvider>
    <UserProvider>
      <TasksProvider>
        <App />
      </TasksProvider>
    </UserProvider>
    </DashboardProvider>
  </BrowserRouter>,
  document.getElementById('root')
)
