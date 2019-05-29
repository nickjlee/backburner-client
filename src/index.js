import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { DashboardProvider } from './contexts/DashboardContext'
import App from './components/App/App'
import './index.css'

ReactDOM.render(
  <BrowserRouter>
    <DashboardProvider>
      <App />
    </DashboardProvider>
  </BrowserRouter>,
  document.getElementById('root')
)
