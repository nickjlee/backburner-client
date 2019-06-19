import React from 'react'
import ReactDOM from 'react-dom'
import TaskListItem from './TaskListItem'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <TaskListItem
      task={{ 
        id: 0, 
        text: 'Test Text', 
        due_date: '2019',
        reward: 'Test Reward',
        xp: 100        
      }}
    />,div)
  ReactDOM.unmountComponentAtNode(div)
})