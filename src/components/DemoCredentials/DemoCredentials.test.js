import React from 'react'
import ReactDOM from 'react-dom'
import DemoCredentials from './DemoCredentials'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<DemoCredentials />, div)
  ReactDOM.unmountComponentAtNode(div)
})