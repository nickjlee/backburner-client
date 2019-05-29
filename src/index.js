import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { TaskListProvider } from './contexts/TaskListContext'
import App from './components/App/App'
import './index.css'

ReactDOM.render(
  <BrowserRouter>
    <TaskListProvider>
      <App />
    </TaskListProvider>
  </BrowserRouter>,
  document.getElementById('root')
)
