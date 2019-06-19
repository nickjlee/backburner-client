import React from 'react'
import ReactDOM from 'react-dom'
import RewardItem from './RewardItem'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<RewardItem reward={{ id: 1, reward: 'Test'}}/>, div)
  ReactDOM.unmountComponentAtNode(div)
})
