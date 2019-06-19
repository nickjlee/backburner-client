import React from 'react'
import ReactDOM from 'react-dom'
import UserProfileBrief from './UserProfileBrief'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <UserProfileBrief 
      user={{
        username: 'test',
        xp: 100,
        xp_to_next_level: 500,
        level: 1,
        date_joined: 'Test Date'
      }}
    />,div)
  ReactDOM.unmountComponentAtNode(div)
})