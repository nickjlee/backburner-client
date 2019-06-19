import React from 'react'
import ReactDOM from 'react-dom'
import RewardsChest from './RewardsChest'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<RewardsChest rewardsChest={[]}/>,div)
  ReactDOM.unmountComponentAtNode(div)
})